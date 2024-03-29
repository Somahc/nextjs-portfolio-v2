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
          className='flex flex-col rounded-2xl border border-muted p-4 duration-150 hover:scale-[1.02]'
          key={article.id}
        >
          <Link href={`/note/${article.id}`} className='flex flex-col items-center'>
            <div className='text-6xl'>{article.emoji}</div>
            <h2 className='mt-2 text-lg font-bold'>{article.title}</h2>
            <p className='mt-2 text-sm text-gray-500'>
              {formatDate(article.publishedAt)}
            </p>

            {/* カテゴリー */}
            <div className='mt-3 flex flex-wrap gap-2 px-4'>
              {article.categories.map((category) => (
                <p
                  className='rounded-full bg-muted px-2 text-sm'
                  key={`${article.id}-${category.id}`}
                >
                  {category.name}
                </p>
              ))}
            </div>
          </Link>
        </article>
      ))}
    </>
  )
}
