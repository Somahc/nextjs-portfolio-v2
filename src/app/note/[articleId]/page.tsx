import { getArticles, getArticlesDetail } from "@/app/_lib/microcms";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
// import "@/styles/article.css";
import "zenn-content-css";

type Props = {
  params: { articleId: string };
};

// 各記事詳細ページのメタデータを設定(タイトルタグを設定)
export async function generateMetadata(props: Props): Promise<Metadata> {
  const id = props.params.articleId;
  const article = await getArticlesDetail(id);
  return {
    title: article.title,
  };
}

// urlのパスの値を設定
export async function generateStaticParams() {
  const { contents } = await getArticles();
  const paths = contents.map((article) => {
    return {
      article: article.id,
    };
  });
  return paths;
}

function formatDate(originalDate: string | undefined) {
  if (!originalDate) {
    return "";
  }
  const date = new Date(originalDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}/${month}/${day}`;
}

export default async function Article(props: Props) {
  const article = await getArticlesDetail(props.params.articleId);

  if (!article) {
    notFound();
  }
  return (
    <article>
      <h1>{article.title}</h1>
      <p>{formatDate(article.publishedAt)}</p>
      <Image
        src={article.eyecatch?.url ?? "/no-image.jpeg"}
        alt="アイキャッチ"
        width={1400}
        height={1000}
        className="rounded-lg object-cove"
      />
      <div className="flex flex-wrap justify-start gap-2 w-full md:px-8">
        {/* カテゴリの表示追加 */}
        {article.categories.map((category) => (
          <a
            href={`/category/${category.id}`}
            className="bg-slate-700 rounded-full px-2"
            key={`${article.id}-${category.id}`}
          >
            #{category.name}
          </a>
        ))}
      </div>
      <div className="znc container mx-auto md:px-20">
        {parse(article.content)}
      </div>
    </article>
  );
}
