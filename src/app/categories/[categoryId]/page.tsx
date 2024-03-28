import { use } from 'react'
import { getArticles, getCategoryDetail } from '@/app/_lib/microcms'
import { Metadata } from 'next'
import NotePreview from '@/app/components/note-preview'
import NotePagination from '@/app/components/note-pagination'

type Props = {
  params: { categoryId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const perPage = 10

export async function generateMetadata(props: Props): Promise<Metadata> {
  const id = props.params.categoryId
  const category = await getCategoryDetail(id)
  return {
    title: `Sample Blog | ${category.name}のカテゴリーの記事一覧`,
  }
}

export default function CategoryArticleList(props: Props) {
  const page = Number(props.searchParams.page ?? '1')
  const { contents, totalCount } = use(
    getArticles({
      filters: `categories[contains]${props.params.categoryId}`,
      offset: page * perPage - perPage,
      limit: perPage,
    }),
  )

  const category = use(getCategoryDetail(props.params.categoryId))

  return (
    <div className='lg:mx-40'>
      <h1 className='mb-10 text-4xl' style={{ fontWeight: '800' }}>
        "{category.name}" の記事一覧
      </h1>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <NotePreview articles={contents} />
      </div>
      <NotePagination
        total={Math.ceil(totalCount / perPage)}
        initialPage={page}
        isCompact
        showControls
      />
    </div>
  )
}
