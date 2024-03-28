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

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: "linear-gradient(to bottom, #dbf4ff, #ffeeff)",
            backgroundSize: "100% 100%",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "left",
            alignItems: "flex-start",
            // justifyContent: "center",
            paddingTop: "70px",
            flexDirection: "column",
            flexWrap: "nowrap",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              fontSize: 70,
              fontStyle: "normal",
              fontWeight: "bold",
              color: "#000",
              padding: "0 120px",
              lineHeight: 1.3,
              marginBottom: "10px",
              wordWrap: "break-word",
            }}
          >
            {article.title}
          </div>
          <div
            style={{
              width: "100%",
              fontSize: 25,
              fontStyle: "normal",
              fontWeight: "bold",
              color: "#000",
              padding: "0 120px",
              lineHeight: 1.3,
              display: "flex",
            }}
          >
            {article.categories.map((category, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#6666FF",
                  padding: "5px 10px",
                  marginRight: "10px",
                  borderRadius: "30px",
                  color: "#fff",
                }}
              >
                {category.name}
              </div>
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              // textAlign: "right",
              bottom: "70px",
              marginLeft: "140px",
              fontSize: 60,
            }}
          >
            Somahc
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    return new Response("OG画像の生成に失敗しました", { status: 500 });
  }
}
