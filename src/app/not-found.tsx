import Link from 'next/link'
import { RiArrowGoBackFill } from 'react-icons/ri'

export default function NotFound() {
  return (
    <div className='container flex flex-col items-center justify-center'>
      <h2 className='mt-20 text-4xl font-bold sm:text-6xl'>404 Not Found</h2>
      <p className='mt-4 text-lg'>
        指定されたページが見つかりませんでした。お探しのページは削除されたか、URLが変更されている可能性があります。
      </p>
      <Link href='/' className='mt-8 inline-flex justify-center'>
        <button className='rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-700'>
          <span className='inline-flex items-center px-1 py-1 text-2xl'>
            ホームに戻る
            <RiArrowGoBackFill size={20} className='ml-1' />
          </span>
        </button>
      </Link>
    </div>
  )
}
