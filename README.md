# maa Portfolio

AI/ML Engineer & Video Creator のポートフォリオサイト

## 技術スタック

- **Framework**: Next.js 16 + React 19
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Orbitron, Rajdhani, JetBrains Mono

## セットアップ

```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm start
```

## サイト構成

| セクション | 説明 |
|-----------|------|
| Hero | フルスクリーンヒーロー + パーティクル背景 |
| Expertise | 専門分野カード (AI/ML, Python, n8n) |
| Projects | プロジェクトグリッド (Jitsi, AI Video, Whisper, Web Automation) |
| Skills | 技術スタック + プログレスバー |
| Philosophy | 開発理念タブ切り替え |
| Contact | コンタクトフォーム + SNSリンク |

## デザイン特徴

- **Cyberpunk/Tech aesthetic**: グリッド背景、グロー効果
- **Gradient accents**: Cyan → Purple グラデーション
- **Smooth animations**: Framer Motion によるスクロールアニメーション
- **Responsive**: モバイル/デスクトップ対応

## ディレクトリ構成

```
src/
├── app/
│   ├── globals.css    # グローバルスタイル
│   ├── layout.tsx     # ルートレイアウト
│   └── page.tsx       # メインページ
├── components/
│   ├── Header.tsx     # ナビゲーションヘッダー
│   ├── Hero.tsx       # ヒーローセクション
│   ├── Expertise.tsx  # 専門分野
│   ├── Projects.tsx   # プロジェクト一覧
│   ├── Skills.tsx     # 技術スタック
│   ├── Philosophy.tsx # 開発理念
│   ├── Contact.tsx    # コンタクト
│   └── Footer.tsx     # フッター
public/
└── images/            # Canvaスライド画像
```

## License

MIT
