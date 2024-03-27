import { Article } from "@/types/articleType";
import { MicroCMSQueries, createClient } from "microcms-js-sdk";
import { Category } from "@/types/articleType";

if (!process.env.MICROCMS_SERVICE_DOMAIN)
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
if (!process.env.MICROCMS_API_KEY)
  throw new Error("MICROCMS_API_KEY is required");

// microCMSClientの作成
export const microCMSClient = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// 記事一覧の取得
export async function getArticles(queries?: MicroCMSQueries) {
  const articles = await microCMSClient.getList<Article>({
    customRequestInit: {
      next: {
        revalidate: 43200000,
      },
    },
    endpoint: "articles",
    queries,
  });
  return articles;
}

// 特定の記事を取得
export async function getArticlesDetail(
  contentId: string,
  queries?: MicroCMSQueries,
) {
  const articlesDetail = await microCMSClient.getListDetail<Article>({
    customRequestInit: {
      next: {
        revalidate: 43200000,
      },
    },
    endpoint: "articles",
    contentId,
    queries,
  });
  return articlesDetail;
}

// カテゴリ一覧を取得
export async function getCategories(queries?: MicroCMSQueries) {
  const categories = await microCMSClient.getList<Category>({
    customRequestInit: {
      next: {
        revalidate: 43200000,
      },
    },
    endpoint: "categories",
    queries,
  });
  return categories;
}

// idに該当するカテゴリを取得
export async function getCategoryDetail(
  contentId: string,
  queries?: MicroCMSQueries,
) {
  const categoriesDetail = await microCMSClient.getListDetail<Category>({
    customRequestInit: {
      next: {
        revalidate: 43200000,
      },
    },
    endpoint: "categories",
    contentId,
    queries,
  });
  return categoriesDetail;
}
