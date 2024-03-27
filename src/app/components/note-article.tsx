import { Article } from "@/types/articleType";
import Image from "next/image";
import Link from "next/link";

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

export default function NoteArticle(article: Article) {
  return (
    <article
      className="flex flex-col border border-muted rounded-2xl hover:scale-105 duration-150 p-4"
      key={article.id}
    >
      <Link href={`/note/${article.id}`} className="flex flex-col items-center">
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
  );
}
