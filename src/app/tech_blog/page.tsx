import { FaExternalLinkAlt } from 'react-icons/fa'

type ZennItem = {
  id: string
  title: string
  slug: string
  emoji: string
  published_at: string
  path: string
}

type BlogZennProps = {
  articles?: ZennItem[]
}

const ZENN_API = 'https://zenn.dev/'

async function getZennArticles() {
  const res = await fetch(
    `${ZENN_API}api/articles?username=somahc&order=latest&count=10`,
    {
      next: { revalidate: 3600 },
    },
  )
  const data: BlogZennProps = await res.json()
  return data
}

function formatDate(apiDateString: string) {
  const date = new Date(apiDateString)
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // getMonth()は0から始まるため、1を足す
  const day = date.getDate()

  return `${year}/${month}/${day}`
}

export default async function Blog() {
  const data = await getZennArticles()
  const articles = data.articles || []
  return (
    <div className='lg:mx-40'>
      <h2 className='text-4xl' style={{ fontWeight: '800' }}>
        Tech Blog
      </h2>
      <p className='mb-7 pt-2'>
        主に技術系の内容のアウトプット・備忘録として、Zennに記事を投稿するようにしています。
      </p>
      <div className='mb-10 grid auto-rows-fr grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-10 md:gap-y-6 lg:gap-x-8'>
        {articles.map((article: ZennItem) => (
          <article className='h-full' key={article.slug}>
            <a href={`${ZENN_API}/${article.path}`} className='block h-full'>
              <div className='flex h-full flex-col rounded-2xl border border-muted duration-150 hover:scale-[1.02]'>
                <div className='border-b border-b-muted py-10 text-center text-7xl'>
                  {article.emoji}
                </div>
                <div className='mx-8 flex flex-grow flex-col justify-between'>
                  <p className='mx-auto line-clamp-2 font-bold'>{article.title}</p>
                  <time
                    dateTime={article.published_at}
                    className='mb-1 block text-center text-sm text-gray-400'
                  >
                    {formatDate(article.published_at)}
                  </time>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
      <div className='text-center'>
        <a href='https://zenn.dev/somahc' className='inline-flex'>
          <button className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700'>
            <span className='inline-flex items-center'>
              他の記事も見てみる
              <FaExternalLinkAlt className='ml-1' />
            </span>
          </button>
        </a>
      </div>
    </div>
  )
}
