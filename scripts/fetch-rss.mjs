import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RSS_URL = 'https://note.com/maa964/rss';
const OUTPUT_DIR = path.join(__dirname, '../public/data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'rss.json');

function extractTagContent(xml, tag) {
    const regex = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>|<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i');
    const match = xml.match(regex);
    return match ? (match[1] || match[2] || '').trim() : '';
}

function formatDate(dateStr) {
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

function stripHtml(html) {
    return html
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .trim();
}

function generateId(link) {
    const hash = link.split('/').pop() || '';
    return hash.slice(0, 8).toUpperCase() || Math.random().toString(36).slice(2, 10).toUpperCase();
}

async function fetchRss() {
    console.log(`Fetching RSS from: ${RSS_URL}`);

    try {
        const response = await fetch(RSS_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const xml = await response.text();

        const items = [];
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

        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        }

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(items, null, 2));
        console.log(`Successfully saved ${items.length} articles to ${OUTPUT_FILE}`);
    } catch (error) {
        console.error('Error fetching RSS:', error);
        process.exit(1);
    }
}

fetchRss();
