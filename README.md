# Next.jsポートフォリオ
デプロイ先: https://somahc.dev

![alt text](<スクリーンショット 2024-04-18 11.54.52.png>)

Next.jsで作成したポートフォリオサイトです。こちらのREADMEにも簡単に情報を書きますが、詳しくは以下のZenn記事にまとめましたので、そちらをご覧ください。

[Zenn記事](https://zenn.dev/somahc/articles/ff68ec033947de)

## 概要・実装した機能
- 私がZennに投稿した記事の最新10件の表示
  ![alt text](<スクリーンショット 2024-04-18 11.55.40.png>)
- microCMSを利用したオリジナルブログ
  ![alt text](<スクリーンショット 2024-04-18 11.56.13.png>)
- ページネーション機能
- ブログ記事の情報に基づく動的OG画像
  ![alt text](<スクリーンショット 2024-04-18 11.57.31.png>)
- 全ページレスポンシブ対応
- ライト・ダークモード
- ページ遷移時のアニメーション

## その他
- 基本的にSSG（Static Site Generation）方式でページをレンダリングしています。Zenn記事の取得やNoteの記事一覧、記事表示の部分ではISR（Incremental Static Regeneration）方式を採用し、前回のキャッシュ生成から1時間立っていた場合は新たにキャッシュを再生成・配信するようにしています。
- Noteの情報取得にはmicroCMS JavaScript SDKを利用しています。
## 技術スタック
- Next.js 14.1.4 (App Router)
- TailwindCSS
- TypeScript
- microCMS
- Vercel
- ESLint, Perttier, Git, GitHub