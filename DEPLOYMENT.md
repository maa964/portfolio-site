# Deployment Guide

このポートフォリオサイトは GitHub Actions + Cloudflare Pages で自動デプロイされます。

## アーキテクチャ

```
┌─────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   GitHub    │────▶│  GitHub Actions  │────▶│ Cloudflare Pages│
│ Repository  │     │    (CI/CD)       │     │   (Hosting)     │
└─────────────┘     └──────────────────┘     └─────────────────┘
       │                    │
       │                    ▼
       │            ┌──────────────┐
       └───────────▶│   Preview    │
         (PR)       │ Deployment   │
                    └──────────────┘
```

## 初期セットアップ

### 1. Cloudflare の設定

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) にログイン
2. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. GitHub リポジトリを連携
4. プロジェクト名を設定（例: `maa-portfolio`）

### 2. API Token の作成

1. Cloudflare Dashboard → **My Profile** → **API Tokens**
2. **Create Token** → **Custom token**
3. 以下の権限を設定:
   - **Account** → **Cloudflare Pages** → **Edit**
   - **Account** → **Account Settings** → **Read**
   - **Zone** → **Zone** → **Read** (カスタムドメイン使用時)

### 3. GitHub Secrets の設定

リポジトリの **Settings** → **Secrets and variables** → **Actions** で以下を設定:

| Secret 名 | 説明 | 取得方法 |
|-----------|------|----------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token | 上記で作成したトークン |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account ID | Dashboard URL の `account/` 以降の部分 |

### 4. Variables の設定 (オプション)

| Variable 名 | 説明 | デフォルト値 |
|-------------|------|--------------|
| `CLOUDFLARE_PROJECT_NAME` | Cloudflare Pages プロジェクト名 | `maa-portfolio` |

## CI/CD フロー

### メインブランチへのプッシュ時

```
main へ push
    ↓
GitHub Actions 起動
    ↓
npm ci → type-check → lint → build
    ↓
Cloudflare Pages へデプロイ
    ↓
本番環境に反映
```

### Pull Request 時

```
PR 作成/更新
    ↓
GitHub Actions 起動
    ↓
npm ci → type-check → lint → build
    ↓
プレビュー環境にデプロイ
    ↓
PR にプレビュー URL をコメント
```

## 運用ワークフロー

### コンテンツ更新の流れ

1. **Issue 作成**: Update Request テンプレートを使用
2. **ブランチ作成**: `feature/update-xxx` または `content/xxx`
3. **変更 & PR**: 変更を加えて PR を作成
4. **プレビュー確認**: 自動生成されるプレビュー URL で確認
5. **マージ**: レビュー後にマージ
6. **自動デプロイ**: main へのマージで本番環境に反映

### 緊急時の対応

```bash
# 直前のデプロイにロールバック
# Cloudflare Dashboard → Workers & Pages → プロジェクト → Deployments
# 任意のデプロイを選択 → "Rollback to this deployment"
```

## 監視・死活監視

### Uptime Kuma のセットアップ (推奨)

1. [Uptime Kuma](https://github.com/louislam/uptime-kuma) をセルフホストまたは使用
2. 以下のモニターを設定:

```yaml
monitors:
  - name: Portfolio Site
    type: http
    url: https://your-domain.com
    interval: 60  # 60秒間隔
    retryInterval: 30
    maxretries: 3

  - name: SSL Certificate
    type: http
    url: https://your-domain.com
    interval: 86400  # 1日1回
    method: GET
    expectedStatus: 200
```

### Cloudflare Analytics

- Cloudflare Dashboard でアクセス解析を確認可能
- Web Analytics も無料で利用可能

## SSL/証明書

Cloudflare Pages では SSL 証明書が自動管理されます:

- **発行**: 自動
- **更新**: 自動（期限 15 日前に自動更新）
- **種類**: Universal SSL (無料)

カスタムドメイン使用時は Cloudflare DNS 経由で設定してください。

## トラブルシューティング

### ビルドが失敗する場合

```bash
# ローカルでビルドテスト
npm run build

# 型エラーの確認
npm run type-check

# Lint エラーの確認
npm run lint
```

### デプロイが失敗する場合

1. GitHub Actions のログを確認
2. Secrets が正しく設定されているか確認
3. Cloudflare API Token の権限を確認

### プレビューが表示されない場合

1. PR のコメントを確認
2. Cloudflare Dashboard で Deployments を確認
3. ブランチ名に特殊文字が含まれていないか確認

## ファイル構成

```
.github/
├── workflows/
│   ├── deploy.yml          # メインデプロイ
│   └── preview.yml         # PRプレビュー
├── ISSUE_TEMPLATE/
│   ├── bug_report.yml      # バグ報告
│   ├── feature_request.yml # 機能要望
│   └── update_request.yml  # 更新依頼
├── pull_request_template.md
└── dependabot.yml          # 自動依存関係更新
```

## 参考リンク

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
