import { getArticles, getCategories } from '../_lib/microcms'
import { use } from 'react'
import CategoryList from '../components/category-list'
import NotePreview from '../components/note-preview'
import NotePagination from '../components/note-pagination'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const perPage = 10

export default function Home(props: Props) {
  const page = Number(props.searchParams.page ?? '1')
  const { contents, totalCount } = use(
    getArticles({ offset: page * perPage - perPage, limit: perPage }),
  )
  return (
    <div className='lg:mx-40'>
      <h1 className='text-4xl' style={{ fontWeight: '800' }}>
        Note
      </h1>
      <div className='pb-7 pt-2'>技術系以外の雑記などなど。</div>
      <h2 className='mb-2 text-xl' style={{ fontWeight: '800' }}>
        カテゴリー
      </h2>
      <CategoryList />
      <div className='mt-7 grid grid-cols-1 gap-6 md:grid-cols-2'>
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
