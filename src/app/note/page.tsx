import { getArticles, getCategories } from "../_lib/microcms";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import CategoryList from "../components/category-list";

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

export default function Home() {
  const { contents } = use(getArticles());
  return (
    <div className="lg:mx-40">
      <h1
        className="text-4xl"
        style={{ fontWeight: "800", fontFamily: "Noto Sans JP" }}
      >
        Note
      </h1>
      <div className="py-7">技術系以外の雑記などなど。</div>
      <h2
        className="text-2xl mb-2"
        style={{ fontWeight: "800", fontFamily: "Noto Sans JP" }}
      >
        カテゴリー
      </h2>
      <CategoryList />
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
              <Image
                src={article.eyecatch?.url ?? "/no-image.jpeg"}
                alt="アイキャッチ"
                width={1600}
                height={1200}
                className="rounded-xl object-cover"
              />
              <h2 className="text-2xl font-bold mt-2">{article.title}</h2>
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
