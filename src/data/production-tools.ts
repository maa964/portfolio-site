export interface ToolSpec {
    label: string;
    value: string;
}

export interface ToolMeta {
    period: string;
    scope: string[];
    technology: string[];
}

export interface TypographySpec {
    element: string;
    font: string;
    size: string;
    lineHeight: string;
    weight: string;
}

export interface ColorSpec {
    hex: string;
    role: string;
    name: string;
}

export interface Tool {
    id: string;
    title: string;
    summary: string;
    meta: ToolMeta;
    specs: ToolSpec[];
    typography?: TypographySpec[];
    colors?: ColorSpec[];
    downloadUrl?: string;
    boothUrl?: string;
    githubUrl?: string;
}

export const tools: Tool[] = [
    {
        id: 'creative-suite',
        title: 'Creative Suite',
        summary: 'OSSベースのクリエイティブツール統合環境。画像・動画・ベクター編集、AI Studio を搭載。PRs welcome!',
        meta: {
            period: '2024.10 - Present',
            scope: ['企画', '設計', '実装', 'OSS'],
            technology: ['Python 3.12', 'PySide6', 'FastAPI', 'Pillow', 'NumPy']
        },
        specs: [
            { label: 'License', value: 'MIT' },
            { label: 'Platform', value: 'Cross-platform' },
            { label: 'UI Framework', value: 'PySide6' },
            { label: 'Apps', value: 'Photo / Video / Vector' },
            { label: 'AI Studio', value: 'SD / Whisper' },
            { label: 'Plugin API', value: 'FastAPI + JWT' }
        ],
        githubUrl: 'https://github.com/maa964/creative-suite/'
    },
    {
        id: 'upscaler',
        title: 'Unified Video Enhancer',
        summary: 'AIノイズ除去と超解像アップスケーリング（2x〜4x）を搭載。フレーム補間を省略した軽量・高速版。',
        meta: {
            period: '2024.08 - 2024.10',
            scope: ['企画', '設計', '実装'],
            technology: ['Python', 'PyTorch', 'CUDA', 'Real-ESRGAN']
        },
        specs: [
            { label: 'Platform', value: 'Windows 10/11' },
            { label: 'Scale Factor', value: '2x - 4x' },
            { label: 'GPU', value: 'NVIDIA CUDA' },
            { label: 'Features', value: 'Denoising / Upscale' },
            { label: 'Batch', value: 'Supported' },
            { label: 'AI Reduction', value: 'Natural Look' }
        ],
        typography: [
            { element: 'Heading', font: 'Inter', size: '20px', lineHeight: '1.4', weight: '500' },
            { element: 'Body', font: 'Inter', size: '14px', lineHeight: '1.6', weight: '400' },
            { element: 'Code', font: 'IBM Plex Mono', size: '13px', lineHeight: '1.5', weight: '400' }
        ],
        colors: [
            { hex: '#1a1a1a', role: 'Primary Action', name: 'Signal Black' },
            { hex: '#16a34a', role: 'Success State', name: 'Process Complete' },
            { hex: '#dc2626', role: 'Error State', name: 'Process Failed' },
            { hex: '#f5f5f5', role: 'Background', name: 'Surface' }
        ]
    },
    {
        id: 'interpolator',
        title: 'Frame Interpolator',
        summary: '24fps映像を60/120fpsに変換。光学フロー推定による自然なスローモーション生成。',
        meta: {
            period: '2023.09 - 2024.01',
            scope: ['設計', '実装'],
            technology: ['Python', 'RIFE', 'CUDA']
        },
        specs: [
            { label: 'Architecture', value: 'RIFE v4.6' },
            { label: 'Precision', value: 'FP16 / Mixed' },
            { label: 'Latency', value: '14ms @ 1080p' },
            { label: 'Output FPS', value: '60 / 120' }
        ]
    },
    {
        id: 'ae-plugin',
        title: 'AE Pipeline Plugin',
        summary: 'After Effects内でGPUアクセラレーション推論を実行。編集ワークフローとの統合。',
        meta: {
            period: '2024.01 - 2024.03',
            scope: ['設計', '実装', 'ドキュメント'],
            technology: ['C++', 'Adobe SDK', 'LibTorch']
        },
        specs: [
            { label: 'Compatibility', value: 'AE 2022+' },
            { label: 'Interface', value: 'C++ / Adobe SDK' },
            { label: 'Engine', value: 'LibTorch Backend' },
            { label: 'API Version', value: '1.2.0' }
        ]
    },
    {
        id: 'pomodoro',
        title: 'Pomodoro Timer',
        summary: '作業集中支援ツール。25分作業/5分休憩サイクルを自動管理。',
        meta: {
            period: '2024.04 - 2024.05',
            scope: ['企画', '設計', '実装'],
            technology: ['Electron', 'TypeScript', 'React']
        },
        specs: [
            { label: 'Platform', value: 'Windows' },
            { label: 'Type', value: 'Desktop App' },
            { label: 'Framework', value: 'Electron' },
            { label: 'Size', value: '< 50MB' }
        ],
        boothUrl: 'https://maa964.booth.pm/items/7977463'
    },
    {
        id: 'taskmanager',
        title: 'Task Manager',
        summary: 'シンプルなタスク管理。追加・編集・削除、優先度設定、進捗管理。',
        meta: {
            period: '2024.05 - 2024.06',
            scope: ['企画', '設計', '実装'],
            technology: ['Electron', 'TypeScript', 'SQLite']
        },
        specs: [
            { label: 'Platform', value: 'Windows' },
            { label: 'Type', value: 'Desktop App' },
            { label: 'Storage', value: 'SQLite' }
        ],
        boothUrl: 'https://maa964.booth.pm/items/7977565'
    },
    {
        id: 'media-converter',
        title: 'Media Converter',
        summary: '画像・動画の一括変換ツール。NVIDIA CUDA GPUによる高速処理。',
        meta: {
            period: '2024.06 - 2024.07',
            scope: ['企画', '設計', '実装'],
            technology: ['Python', 'FFmpeg', 'CUDA']
        },
        specs: [
            { label: 'Platform', value: 'Windows' },
            { label: 'Engine', value: 'CUDA Accelerated' },
            { label: 'Formats', value: '20+ supported' }
        ],
        boothUrl: 'https://maa964.booth.pm/items/8007334'
    }
];
