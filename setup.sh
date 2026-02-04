#!/usr/bin/env bash
set -euo pipefail

echo "========================================"
echo " maa Portfolio Site セットアップ (Linux)"
echo "========================================"
echo

# Node.js バージョンチェック
echo "[1/4] Node.js バージョン確認中..."
if ! command -v node >/dev/null 2>&1; then
  echo "❌ エラー: Node.jsがインストールされていません"
  echo "https://nodejs.org/ にてインストールしてください"
  exit 1
fi
NODE_VERSION=$(node -v)
echo "✓ Node.js バージョン: ${NODE_VERSION}"
echo

# npm バージョンチェック
echo "[2/4] npm バージョン確認中..."
if ! command -v npm >/dev/null 2>&1; then
  echo "❌ エラー: npmがインストールされていません"
  exit 1
fi
NPM_VERSION=$(npm -v)
echo "✓ npm バージョン: ${NPM_VERSION}"
echo

# 依存関係インストール
echo "[3/4] 依存関係をインストール中..."
if ! npm install --force; then
  echo "❌ エラー: npm install に失敗しました"
  exit 1
fi
echo "✓ 依存関係のインストール完了"
echo

# 画像ディレクトリ作成
IMG_DIR="public/images"
echo "[4/4] 画像ディレクトリを作成中..."
if [ ! -d "${IMG_DIR}" ]; then
  mkdir -p "${IMG_DIR}"
  echo "✓ ${IMG_DIR} ディレクトリを作成しました"
else
  echo "✓ ${IMG_DIR} ディレクトリは既に存在します"
fi
echo

# 画像ダウンロードの案内
echo "画像のダウンロード"
echo
echo "Canvaからエクスポートした画像をダウンロードして、public/images/ に配置してください。"
echo "ファイル名は page-01.png から page-15.png にしてください。"
echo
echo "Linux での自動取得方法(任意):"
echo " 1) PowerShellをお持ちの場合: pwsh -ExecutionPolicy Bypass -File download-images.ps1"
echo " 2) 手動ダウンロード: Canvaから保存して public/images/ に配置してください。"

echo
echo "========================================"
echo " セットアップ完了！"
echo "========================================"
echo
echo "次のステップ："
echo "1. 画像をダウンロード（上記参照）"
echo "2. 開発サーバー起動: npm run dev"
echo "3. ブラウザで開く: http://localhost:3000"
echo
read -p "完了したら Enter を押して終了してください"
