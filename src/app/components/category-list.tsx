import { getArticles, getCategories } from "../_lib/microcms";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function CategoryList() {
  const { contents } = use(getCategories({ limit: 50 }));

  return (
    <div className="flex flex-wrap gap-2 px-4 pb-4">
      {contents.map((category) => (
        <p
          key={category.id}
          className="text-sm bg-muted rounded-full px-2 py-1 hover:underline"
        >
          <Link href={`/categories/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </div>
  );
}
