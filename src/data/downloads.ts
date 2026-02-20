export interface AppDownload {
    id: string;
    name: string;
    description: string;
    version: string;
    lastUpdated: string;
    license: string;
    platforms: {
        name: string;
        icon: 'windows' | 'mac' | 'linux';
        downloadUrl: string;
        fileSize: string;
    }[];
    tags: string[];
    featured?: boolean;
}

export const apps: AppDownload[] = [
    {
        id: 'pomodro-timer',
        name: 'PomodroTimer',
        description: 'シンプルで使いやすいポモドーロタイマーアプリ。集中力を高め、効率的な作業をサポートします。25分の作業と5分の休憩を繰り返すポモドーロテクニックを簡単に実践できます。',
        version: 'v1.0.0',
        lastUpdated: '2025-02-04',
        license: 'MIT',
        platforms: [
            { name: 'Windows', icon: 'windows', downloadUrl: '/downloads/PomodroTimer.exe', fileSize: '15 MB' },
        ],
        tags: ['Productivity', 'Timer', 'Open Source'],
        featured: true,
    },
];
