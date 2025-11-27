# Canvaエクスポート画像ダウンロードスクリプト
# PowerShell 7.0以上推奨

# 画像URL配列
$imageUrls = @(
    "https://export-download.canva.com/egFd8/DAG52VegFd8/-1/0/0001-1475414695150198509.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T042421Z&X-Amz-Expires=81222&X-Amz-Signature=787dcef8a2cf631d304c796ec10bb162dde59c5e0f2958147910f2ecf2df7283&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Thu%2C%2027%20Nov%202025%2002%3A58%3A03%20GMT",
    "https://export-download.canva.com/egFd8/DAG52VegFd8/-1/0/0002-1475414695150198509.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T122711Z&X-Amz-Expires=54676&X-Amz-Signature=663b6aa6b8244ef599ea32b34b2635f30cb8b2319df8f8af88e353f57fd21648&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Thu%2C%2027%20Nov%202025%2003%3A38%3A27%20GMT",
    "https://export-download.canva.com/egFd8/DAG52VegFd8/-1/0/0003-1475414695150198509.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T122115Z&X-Amz-Expires=54058&X-Amz-Signature=352dc93bbd7cda53bc189e384c7e515a96cda9566211cbf5d5bc3382a503f3d8&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Thu%2C%2027%20Nov%202025%2003%3A22%3A13%20GMT",
    "https://export-download.canva.com/egFd8/DAG52VegFd8/-1/0/0004-1475414695150198509.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T223139Z&X-Amz-Expires=17497&X-Amz-Signature=cf639437cdb075380d60079e1c0aceff96f6e997fdab044cd10edbfa0da9559c&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Thu%2C%2027%20Nov%202025%2003%3A23%3A16%20GMT",
    "https://export-download.canva.com/egFd8/DAG52VegFd8/-1/0/0005-1475414695150198509.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T190329Z&X-Amz-Expires=30814&X-Amz-Signature=f69bcb726f15b1d069b530f99bc575c4e6cd48264d4cadd4bb4427537eae895d&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Thu%2C%2027%20Nov%202025%2003%3A37%3A03%20GMT",
    "https://export-download.canva.com/egFd8/DAG52VegFd8/-1/0/0006-1475414695150198509.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T075118Z&X-Amz-Expires=70913&X-Amz-Signature=d8132d8bbac49983c80601ecd3daeff69c0bc6e83401a95d126392523f25ea30&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Thu%2C%2027%20Nov%202025%2003%3A33%3A11%20GMT",
    "https://export-download.canva.com/egFd8/DAG52VegFd8/-1/0/0007-1475414695150198509.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T161809Z&X-Amz-Expires=38513&X-Amz-Signature=0de6f0dba2a7fee3610e70e256f940939a7f191e3f0df4fce1ea5e65e9dc6ae0&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Thu%2C%2027%20Nov%202025%2003%3A00%3A02%20GMT",
    "https://export-download.canva.com/egFd8/DAG52VegFd8/-1/0/0008-1475414695150198509.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T070059Z&X-Amz-Expires=73313&X-Amz-Signature=76d215f88dff9b31b7033b9a6559d1207e8eefd104fdb86243f3f6c70b0769b6&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Thu%2C%2027%20Nov%202025%2003%3A22%3A52%20GMT",
    "https://export-download.canva.com/egFd8/DAG52VegFd8/-1/0/0009-1475414695150198509.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T211814Z&X-Amz-Expires=20337&X-Amz-Signature=b20b01bebee5d8f0e75de50c0b58316e245ac50bee627bf5d02afba772c5b7bc&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Thu%2C%2027%20Nov%202025%2002%3A57%3A11%20GMT",
    "https://export-download.canva.com/egFd8/DAG52VegFd8/-1/0/0010-1475414695150198509.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T224046Z&X-Amz-Expires=15237&X-Amz-Signature=73d5c289c1246c00752703cc14618aee12214fb88cb1ff9d4cccfdb6e3247207&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Thu%2C%2027%20Nov%202025%2002%3A54%3A43%20GMT",
    "https://export-download.canva.com/egFd8/DAG52VegFd8/-1/0/0011-1475414695150198509.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T041146Z&X-Amz-Expires=82269&X-Amz-Signature=a4c7fdacf9518059046845f0f00296558fbb038aa8396099c9bdf150aa7121c7&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Thu%2C%2027%20Nov%202025%2003%3A02%3A55%20GMT",
    "https://export-download.canva.com/egFd8/DAG52VegFd8/-1/0/0012-1475414695150198509.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T112822Z&X-Amz-Expires=57146&X-Amz-Signature=97ca715b300564575971d4b09b3df29d6c6e89532fced9e42c35f002bc6e0ae2&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Thu%2C%2027%20Nov%202025%2003%3A20%3A48%20GMT",
    "https://export-download.canva.com/egFd8/DAG52VegFd8/-1/0/0013-1475414695150198509.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20251127%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251127T014543Z&X-Amz-Expires=4989&X-Amz-Signature=bcd772fc23d5c0af2090d0f39e1bb19f9c0ccb6f1d134858cb11b9d4ffd34b9a&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Thu%2C%2027%20Nov%202025%2003%3A08%3A52%20GMT",
    "https://export-download.canva.com/egFd8/DAG52VegFd8/-1/0/0014-1475414695150198509.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T082657Z&X-Amz-Expires=67811&X-Amz-Signature=d431e32e1fe4a7c000a872f15540e21f428e8d7e7a3f3dcd02ad4d27fce440e6&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Thu%2C%2027%20Nov%202025%2003%3A17%3A08%20GMT",
    "https://export-download.canva.com/egFd8/DAG52VegFd8/-1/0/0015-1475414695150198509.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T211913Z&X-Amz-Expires=22721&X-Amz-Signature=58cc87a1f5f38a3001d0389e37899d3f148392af9796a66d446b047a1678aae9&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Thu%2C%2027%20Nov%202025%2003%3A37%3A54%20GMT"
)

# 出力ディレクトリ作成
$outputDir = "public\images"
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
    Write-Host "ディレクトリ作成: $outputDir" -ForegroundColor Green
}

Write-Host "`n=== Canvaポートフォリオ画像ダウンロード ===" -ForegroundColor Cyan
Write-Host "合計: $($imageUrls.Count) 枚の画像をダウンロードします`n" -ForegroundColor Yellow

$successCount = 0
$failCount = 0

for ($i = 0; $i -lt $imageUrls.Count; $i++) {
    $pageNum = $i + 1
    $fileName = "page-{0:D2}.png" -f $pageNum
    $outputPath = Join-Path $outputDir $fileName
    
    try {
        Write-Host "[$pageNum/$($imageUrls.Count)] ダウンロード中: $fileName" -NoNewline
        
        Invoke-WebRequest -Uri $imageUrls[$i] -OutFile $outputPath -ErrorAction Stop
        
        $fileSize = (Get-Item $outputPath).Length / 1MB
        Write-Host " ✓ 完了 ($([math]::Round($fileSize, 2)) MB)" -ForegroundColor Green
        $successCount++
    }
    catch {
        Write-Host " ✗ 失敗" -ForegroundColor Red
        Write-Host "  エラー: $($_.Exception.Message)" -ForegroundColor Red
        $failCount++
    }
    
    # レート制限対策（少し待機）
    if ($i -lt $imageUrls.Count - 1) {
        Start-Sleep -Milliseconds 500
    }
}

Write-Host "`n=== ダウンロード完了 ===" -ForegroundColor Cyan
Write-Host "成功: $successCount 枚" -ForegroundColor Green
Write-Host "失敗: $failCount 枚" -ForegroundColor $(if ($failCount -eq 0) { "Green" } else { "Red" })
Write-Host "`n画像保存先: $outputDir" -ForegroundColor Yellow

if ($failCount -gt 0) {
    Write-Host "`n注意: URLの有効期限が切れている可能性があります。" -ForegroundColor Yellow
    Write-Host "Canvaから最新のURLを取得して再実行してください。" -ForegroundColor Yellow
}
