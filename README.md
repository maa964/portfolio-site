# Masahiro Portfolio Site

禅とデジタルの融合をテーマにした、レスポンシブ対応のポートフォリオWebサイト。

## 🎯 特徴

- **レスポンシブデザイン**: デスクトップ、タブレット、モバイルに完全対応
- **モダンUI**: Tailwind CSSによる洗練されたインターフェース
- **高速パフォーマンス**: Next.js 15 + React 19による最適化
- **キーボードナビゲーション**: 矢印キーでページ遷移
- **フルスクリーンメニュー**: 全ページへの素早いアクセス
- **プログレッシブ画像ロード**: 初回ロード時のプリロード処理

## 🛠️ 技術スタック

- **Framework**: Next.js 15.0.3
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript 5
- **Icons**: Lucide React
- **Build Tool**: Turbopack (Next.js内蔵)

## 📋 前提条件

- Node.js 18.0.0以上
- npm 9.0.0以上

## 🚀 セットアップ手順

### 1. 依存関係のインストール

\`\`\`bash
npm install
\`\`\`

### 2. 画像ファイルの配置

Canvaからエクスポートした15枚のPNG画像を以下のディレクトリに配置してください：

\`\`\`
portfolio-site/
└── public/
    └── images/
        ├── page-01.png
        ├── page-02.png
        ├── page-03.png
        ├── ...
        └── page-15.png
\`\`\`

**画像ダウンロードURL**: 
各ページの画像は以下のURLからダウンロードできます（Canvaエクスポート結果）

### 3. 開発サーバーの起動

\`\`\`bash
npm run dev
\`\`\`

ブラウザで http://localhost:3000 を開いてください。

## 📦 ビルドとデプロイ

### 本番ビルド

\`\`\`bash
npm run build
\`\`\`

### 本番サーバー起動

\`\`\`bash
npm start
\`\`\`

### 静的エクスポート（オプション）

静的ホスティング（Netlify、Vercelなど）用にエクスポートする場合：

\`\`\`bash
# next.config.mjsを編集
output: 'export' に変更

# ビルド実行
npm run build

# outディレクトリが生成されます
\`\`\`

## 🎮 使い方

### ナビゲーション

- **矢印キー（←→）**: 前後のページへ移動
- **ページインジケーター**: クリックで特定のページへジャンプ
- **メニューボタン**: 全ページ一覧を表示
- **前後ボタン**: 画面下部の矢印ボタンでページ遷移

### レスポンシブ対応

- **デスクトップ（1024px以上）**: フルナビゲーション表示
- **タブレット（768px-1023px）**: 簡略化されたナビゲーション
- **モバイル（767px以下）**: ハンバーガーメニュー

## 📁 プロジェクト構造

\`\`\`
portfolio-site/
├── public/
│   └── images/           # ポートフォリオ画像
│       └── page-*.png
├── src/
│   └── app/
│       ├── layout.tsx    # ルートレイアウト
│       ├── page.tsx      # メインページコンポーネント
│       └── globals.css   # グローバルスタイル
├── package.json          # プロジェクト設定
├── tsconfig.json         # TypeScript設定
├── tailwind.config.ts    # Tailwind設定
├── next.config.mjs       # Next.js設定
└── README.md             # このファイル
\`\`\`

## 🎨 カスタマイズ

### カラーテーマの変更

\`tailwind.config.ts\` の \`colors\` セクションを編集：

\`\`\`typescript
colors: {
  cyan: {
    400: '#22d3ee',  // アクセントカラー
    500: '#06b6d4',
  },
  purple: {
    500: '#a855f7',  // セカンダリカラー
  },
  // ...
}
\`\`\`

### ページ情報の変更

\`src/app/page.tsx\` の \`portfolioPages\` 配列を編集：

\`\`\`typescript
const portfolioPages = [
  { id: 1, title: 'Hero', alt: 'Masahiro - AI/ML Engineer' },
  // ...
];
\`\`\`

## 🔧 トラブルシューティング

### 画像が表示されない

1. \`public/images/\` ディレクトリに画像が正しく配置されているか確認
2. ファイル名が \`page-01.png\` 〜 \`page-15.png\` の形式になっているか確認
3. 開発サーバーを再起動

### ビルドエラー

\`\`\`bash
# node_modulesとキャッシュをクリア
rm -rf node_modules .next
npm install
npm run build
\`\`\`

## 📝 ライセンス

このプロジェクトは個人ポートフォリオ用です。

## 👤 作成者

**Masahiro**
- Email: zentunadance@gmail.com
- GitHub: [@maa964](https://github.com/maa964)

## 🙏 謝辞

- Canva - デザイン生成
- Next.js - Reactフレームワーク
- Tailwind CSS - スタイリング
- Lucide - アイコン
