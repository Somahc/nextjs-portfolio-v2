import { Article } from '@/types/articleType'
import Link from 'next/link'

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

export default function NotePreview({ articles }: { articles: Article[] }) {
  return (
    <>
      {articles.map((article) => (
        <article
          className='flex h-full flex-col rounded-2xl border border-muted p-4 duration-150 hover:scale-[1.02]'
          key={article.id}
        >
          <Link
            href={`/note/${article.id}`}
            className='flex h-full flex-col items-center justify-between'
          >
            <div className='flex flex-col items-center'>
              <div className='text-6xl'>{article.emoji}</div>
            </div>

            {/* カテゴリー */}
            <div className=''>
              <h2 className='mt-2 line-clamp-2 text-lg font-bold'>{article.title}</h2>
              <div className='flex flex-col items-center'>
                <time
                  dateTime={article.publishedAt || ''}
                  className='text-sm text-gray-500'
                >
                  {article.publishedAt ? formatDate(article.publishedAt) : 'Unknown date'}
                </time>
              </div>
              <div className='flex flex-wrap justify-center gap-2'>
                {article.categories.map((category) => (
                  <p
                    className='rounded-full bg-muted px-2 text-sm'
                    key={`${article.id}-${category.id}`}
                  >
                    {category.name}
                  </p>
                ))}
              </div>
            </div>
          </Link>
        </article>
      ))}
    </>
  )
}
