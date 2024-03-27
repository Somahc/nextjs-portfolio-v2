import { getArticles, getArticlesDetail } from "@/app/_lib/microcms";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import Link from "next/link";
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
      <div className="znc mx-auto max-w-[640px]">
        <div className="text-4xl font-bold text-center">{article.title}</div>
        <p className="text-center text-gray-500">
          {formatDate(article.publishedAt)}
        </p>
        <div className="flex flex-wrap justify-center gap-2 w-full md:px-8">
          {/* カテゴリの表示追加 */}
          {article.categories.map((category) => (
            <Link
              href={`/categories/${category.id}`}
              className="text-sm bg-muted rounded-full px-2"
              key={`${article.id}-${category.id}`}
            >
              {category.name}
            </Link>
          ))}
        </div>
        <div
          className="overflow-hidden rounded-xl"
          style={{
            width: "640px",
            height: "400px",
            position: "relative",
          }}
        >
          <Image
            src={article.eyecatch?.url ?? "/no-image.jpeg"}
            alt="アイキャッチ"
            layout="fill"
            className="rounded-xl object-contain"
          />
        </div>
        {/* <Image
          src={article.eyecatch?.url ?? "/no-image.jpeg"}
          alt="アイキャッチ"
          width={600}
          height={600}
          className="rounded-lg shadow-xl object-cover"
        /> */}

        {parse(article.content)}
      </div>
    </article>
  );
}
