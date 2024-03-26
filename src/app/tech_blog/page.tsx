import { FaExternalLinkAlt } from "react-icons/fa";

type ZennItem = {
  id: string;
  title: string;
  slug: string;
  emoji: string;
  published_at: string;
  path: string;
};

type BlogZennProps = {
  articles?: ZennItem[];
};

const ZENN_API = "https://zenn.dev/";

async function getZennArticles() {
  const res = await fetch(
    `${ZENN_API}api/articles?username=somahc&order=latest&count=10`,
    {
      next: { revalidate: 60 },
    },
  );
  const data: BlogZennProps = await res.json();
  return data;
}

function formatDate(apiDateString: string) {
  const date = new Date(apiDateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth()は0から始まるため、1を足す
  const day = date.getDate();

  return `${year}/${month}/${day}`;
}

export default async function Blog() {
  const data = await getZennArticles();
  const articles = data.articles || [];
  return (
    <div className="lg:mx-40">
      <h1
        className="text-4xl"
        style={{ fontWeight: "800", fontFamily: "Noto Sans JP" }}
      >
        Tech Blog
      </h1>
      <div className="py-7">
        主に技術系の内容のアウトプット・備忘録として、Zennに記事を投稿するようにしています。
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-10 gap-y-5 md:gap-y-1">
        {articles.map((article: ZennItem) => (
          <div className="mb-10" key={article.slug}>
            <a href={`${ZENN_API}/${article.path}`}>
              <div className="min-h-[280px] border border-muted rounded-2xl hover:scale-105 duration-150">
                <div className="text-7xl py-10 text-center border-b border-b-muted">
                  {article.emoji}
                </div>
                <div className="mx-auto max-w-max">
                  <div
                    className="px-5 pt-7"
                    style={{ fontWeight: "800", fontFamily: "Noto Sans JP" }}
                  >
                    {article.title}
                  </div>
                  <div className="text-center text-gray-400 text-sm mt-2 mb-1">
                    {formatDate(article.published_at)}
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <a href="https://zenn.dev/somahc" className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <span className="flex items-center">
            他の記事も見てみる
            <FaExternalLinkAlt className="ml-1" />
          </span>
        </button>
      </a>
    </div>
  );
}
