import { getArticles, getArticlesDetail } from '@/app/_lib/microcms'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import parse from 'html-react-parser'
import Link from 'next/link'
import 'zenn-content-css'
import { RiArrowGoBackFill } from 'react-icons/ri'
type Props = {
  params: { articleId: string }
}

// 各記事詳細ページのメタデータを設定(タイトルタグを設定)
export async function generateMetadata(props: Props): Promise<Metadata> {
  const id = props.params.articleId
  const article = await getArticlesDetail(id)
  //   const url =
  //     `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` || "https://localhost:3000";
  const url = 'https://nextjs-portfolio-v2-one.vercel.app'
  const ogUrl = new URL(`${url}/api/og?id=${id}`)
  return {
    title: article.title,
    openGraph: {
      title: article.title,
      description: article.content.substring(3, 25) + '...',
      type: 'article',
      url: `${url}/note/${id}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  }
}

// urlのパスの値を設定
export async function generateStaticParams() {
  const { contents } = await getArticles()
  const paths = contents.map((article) => {
    return {
      article: article.id,
    }
  })
  return paths
}

function formatDate(originalDate: string | undefined) {
  if (!originalDate) {
    return ''
  }
  const date = new Date(originalDate)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}/${month}/${day}`
}

export default async function Article(props: Props) {
  const article = await getArticlesDetail(props.params.articleId)

  if (!article) {
    notFound()
  }
  return (
    <article>
      <div className='znc mx-auto max-w-[640px]'>
        <div className='mb-4 text-center text-6xl'>{article.emoji}</div>
        <div className='mx-auto max-w-max text-4xl font-bold'>{article.title}</div>
        <p className='text-center text-gray-500'>{formatDate(article.publishedAt)}</p>
        <div className='flex w-full flex-wrap justify-center gap-2 md:px-8'>
          {/* カテゴリの表示追加 */}
          {article.categories.map((category) => (
            <Link
              href={`/categories/${category.id}`}
              className='rounded-full bg-muted px-2 text-sm'
              key={`${article.id}-${category.id}`}
            >
              {category.name}
            </Link>
          ))}
        </div>
        <div className='mt-10'>{parse(article.content)}</div>
        <div className='mt-10 text-center'>
          <Link href='/note' className='inline-flex justify-center'>
            <button className='rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-700'>
              <span className='inline-flex items-center'>
                Note一覧に戻る
                <RiArrowGoBackFill size={20} className='ml-1' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </article>
  )
}
