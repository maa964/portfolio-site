@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

echo ========================================
<<<<<<< HEAD
echo  Masahiro Portfolio Site セットアップ
=======
echo  maa Portfolio Site セットアップ
>>>>>>> da2908009e80022e658511bcccf22b887253ef31
echo ========================================
echo.

REM Node.jsバージョンチェック
echo [1/4] Node.js バージョン確認中...
node --version > nul 2>&1
if errorlevel 1 (
    echo ❌ エラー: Node.jsがインストールされていません
    echo https://nodejs.org/ からダウンロードしてください
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✓ Node.js バージョン: %NODE_VERSION%
echo.

REM npmバージョンチェック
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✓ npm バージョン: %NPM_VERSION%
echo.

REM 依存関係インストール
echo [2/4] 依存関係をインストール中...
call npm install --force
if errorlevel 1 (
    echo ❌ エラー: npm install に失敗しました
    pause
    exit /b 1
)
echo ✓ 依存関係のインストール完了
echo.

REM 画像ディレクトリ作成
echo [3/4] 画像ディレクトリを作成中...
if not exist "public\images" (
    mkdir "public\images"
    echo ✓ public\images ディレクトリを作成しました
) else (
    echo ✓ public\images ディレクトリは既に存在します
)
echo.

REM 画像ダウンロードの案内
echo [4/4] 画像のダウンロード
echo.
echo 次のコマンドを実行して、Canvaからエクスポートした画像をダウンロードしてください：
echo.
echo   PowerShell -ExecutionPolicy Bypass -File download-images.ps1
echo.
echo または、手動で以下のURLから画像をダウンロードして public\images\ に配置してください。
echo ファイル名は page-01.png から page-15.png にしてください。
echo.

echo ========================================
echo  セットアップ完了！
echo ========================================
echo.
echo 次のステップ：
echo 1. 画像をダウンロード（上記参照）
echo 2. 開発サーバー起動: npm run dev
echo 3. ブラウザで開く: http://localhost:3000
echo.
pause
