type Language = 'ja' | 'en' | 'zh';

export interface PortfolioPage {
    id: number;
    title: { [K in Language]: string };
    alt: string;
    category: string;
    description: { [K in Language]: string };
    techSpecs?: string[];
    prompt?: string;
    params?: Record<string, string>;
}

export const portfolioPages: PortfolioPage[] = [
    {
        id: 1,
        title: { ja: 'ネクサスギャラリー', en: 'Nexus Gallery', zh: '枢纽画廊' },
        alt: 'AI-Generated Cinematics - Cyber-Zen Gallery',
        category: 'A',
        description: { ja: '機械学習とビジュアルストーリーテリングの融合を探求。', en: 'Exploring the convergence of machine learning and visual storytelling.', zh: '探索机器学习与视觉叙事的融合。' }
    },
    {
        id: 2,
        title: { ja: 'ネオンドリーム v2', en: 'Neon Dreams v2', zh: '霓虹之梦 v2' },
        alt: 'Cyberpunk city street with neon signs',
        category: 'B',
        description: { ja: 'Runway Gen-2とSDXLを使用した生成ビデオ合成。', en: 'Generative Video Synthesis using Runway Gen-2 and SDXL.', zh: '使用 Runway Gen-2 和 SDXL 的生成式视频合成。' },
        techSpecs: ['Runway Gen-2', 'Midjourney v6', 'Stable Diffusion XL', 'Topaz Video AI'],
        prompt: '/imagine cinematic wide shot of neo-tokyo grid, hyper-detailed architecture, volumetric neon lighting, heavy rain, anamorphic lens flares, cyberpunk aesthetic, high motion, fluid dynamics --ar 21:9',
        params: { seed: '48293921004', cfg: '7.5', motion: '6/10', steps: '50 [DDIM]', sampler: 'Euler A', interpolation: 'R-ESRGAN 4x+' }
    },
    {
        id: 3,
        title: { ja: 'アイデンティティシステム', en: 'Identity System', zh: '身份系统' },
        alt: 'Neural Architect & Visionary Profile',
        category: 'C',
        description: { ja: '高次元の機械知性とシネマティックな美学の融合。', en: 'Merging high-dimensional machine intelligence with cinematic aesthetics.', zh: '将高维机器智能与电影美学融合。' }
    },
    {
        id: 4,
        title: { ja: 'コンタクトプロトコル', en: 'Contact Protocol', zh: '联系协议' },
        alt: 'Cyber-Terminal Contact Interface',
        category: 'D',
        description: { ja: 'プロジェクトの問い合わせ用の安全な通信チャネル。', en: 'Secure transmission channel for project inquiries.', zh: '用于项目咨询的安全传输通道。' }
    },
    {
        id: 5,
        title: { ja: 'テクニカルアーティファクト', en: 'Technical Artifacts', zh: '技术产物' },
        alt: 'Cyber-Zen Tech Blog Feed',
        category: 'E',
        description: { ja: 'AI/MLエンジニアリングと合成メディアの最前線を解読。', en: 'Decrypting the frontier of AI/ML engineering and synthetic media.', zh: '解密 AI/ML 工程与合成媒体的前沿。' }
    },
    {
        id: 6,
        title: { ja: 'サウンドエンジニアリング', en: 'Sound Engineering', zh: '声学工程' },
        alt: 'Mix Engineering & Mastering Services',
        category: 'F',
        description: { ja: '現代メディアのためのハイファイな音響彫刻。', en: 'High-fidelity sonic sculpture for modern media.', zh: '现代媒体的高保真声学雕塑。' }
    },
    {
        id: 7,
        title: { ja: 'オーディオプレビュー', en: 'Audio Preview', zh: '音频预览' },
        alt: 'Sound Engineering with Audio Preview',
        category: 'G',
        description: { ja: 'インタラクティブな信号解析とオーディオプレビューインターフェース。', en: 'Interactive signal analysis and audio preview interface.', zh: '交互式信号分析与音频预览界面。' }
    }
];
