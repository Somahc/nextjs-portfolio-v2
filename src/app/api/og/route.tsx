import { ImageResponse } from "@vercel/og";
import { getArticlesDetail } from "@/app/_lib/microcms";
import { Article } from "@/types/articleType";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");

    if (!id) {
      return new Response("パラメータidは必須です", { status: 400 });
    }

    const article = await getArticlesDetail(id);

    return new ImageResponse(<div>{article.title}</div>);
  } catch (e: any) {
    return new Response("OG画像の生成に失敗しました", { status: 500 });
  }
}
