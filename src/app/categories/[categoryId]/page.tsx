import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { getArticles, getCategoryDetail } from "@/app/_lib/microcms";
import { Metadata } from "next";

type Props = {
  params: { categoryId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const id = props.params.categoryId;
  const category = await getCategoryDetail(id);
  return {
    title: `Sample Blog | ${category.name}のカテゴリーの記事一覧`,
  };
}

export default function CategoryArticleList(props: Props) {
  const { contents } = use(
    getArticles({
      filters: `categories[contains]${props.params.categoryId}`,
    }),
  );

  const category = use(getCategoryDetail(props.params.categoryId));

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

  return (
    <div className="lg:mx-40">
      <h1 className="text-4xl mb-10" style={{ fontWeight: "800" }}>
        "{category.name}" の記事一覧
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contents.map((article) => (
          <article
            className="flex flex-col border border-muted rounded-2xl hover:scale-105 duration-150 p-4"
            key={article.id}
          >
            <Link
              href={`/note/${article.id}`}
              className="flex flex-col items-center"
            >
              <div className="text-6xl">{article.emoji}</div>
              <h2 className="text-lg font-bold mt-2">{article.title}</h2>
              <p className="text-sm mt-2 text-gray-500">
                {formatDate(article.publishedAt)}
              </p>

              {/* カテゴリー */}
              <div className="flex flex-wrap gap-2 px-4 mt-3">
                {article.categories.map((category) => (
                  <p
                    className="text-sm bg-muted rounded-full px-2"
                    key={`${article.id}-${category.id}`}
                  >
                    {category.name}
                  </p>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
