'use client'

import Link from 'next/link'
import { RiArrowGoBackFill } from 'react-icons/ri'

export default function Error() {
  return (
    <div className='container flex flex-col items-center justify-center'>
      <h2 className='mt-20 text-3xl font-bold md:text-5xl'>500 Internal Server Error</h2>
      <p className='mt-4 text-lg'>
        指定されたページを表示できませんでした。サーバー側で問題が発生している可能性があります。時間をおいて再度お試しください。
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
