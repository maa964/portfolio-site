import fs from 'fs';
import path from 'path';

export interface RssArticle {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

function extractTagContent(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>|<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i');
  const match = xml.match(regex);
  return match ? (match[1] || match[2] || '').trim() : '';
}

function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.');
  } catch {
    return dateStr;
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
}

function generateId(link: string): string {
  const hash = link.split('/').pop() || '';
  return hash.slice(0, 8).toUpperCase() || Math.random().toString(36).slice(2, 10).toUpperCase();
}

export async function getRssArticles(url: string = 'https://note.com/maa964/rss'): Promise<RssArticle[]> {
  // Try reading from local file first (GitHub Action generated)
  try {
    const filePath = path.join(process.cwd(), 'public/data/rss.json');
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.warn('Local RSS file not found or invalid, falling back to live fetch:', error);
  }

  // Fallback to live fetch
  return fetchRssArticles(url);
}

export async function fetchRssArticles(url: string): Promise<RssArticle[]> {
  const response = await fetch(url, {
    next: { revalidate: 3600 }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch RSS: ${response.status}`);
  }

  const xml = await response.text();

  const items: RssArticle[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];

    const title = extractTagContent(itemXml, 'title');
    const link = extractTagContent(itemXml, 'link');
    const pubDate = extractTagContent(itemXml, 'pubDate');
    const description = stripHtml(extractTagContent(itemXml, 'description'));

    items.push({
      id: generateId(link),
      title,
      link,
      pubDate: formatDate(pubDate),
      description: description.slice(0, 200) + (description.length > 200 ? '...' : '')
    });
  }

  return items;
}
