import { Category } from "@/types/articleType";
import { getCategories } from "../_lib/microcms";
import { use } from "react";
import Link from "next/link";

export default function Page() {
  const { contents } = use(getCategories({ limit: 50 }));
  return (
    <>
      <ul>
        {contents.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
