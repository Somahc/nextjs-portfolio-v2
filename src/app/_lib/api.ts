type ZennItem = {
  id: string;
  title: string;
  slug: string;
  emoji: string;
  published_at: string;
};

type BlogZennProps = {
  articles?: ZennItem[];
};

const ZENN_API = "https://zenn.dev/api/";
