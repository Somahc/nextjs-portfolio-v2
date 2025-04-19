import Link from 'next/link'
import { MdOutlineArticle } from 'react-icons/md'

export default function Home() {
  return (
    <>
      <div className='h-[90vh]'>
        <div className='grid h-full place-items-center'>
          <div className='mb-8 flex flex-col items-center justify-center'>
            <h2 className=' text-7xl' style={{ fontWeight: '800' }}>
              Hello there! 👋
            </h2>
            <p className='break-keep pt-3 text-gray-500'>
              Somahcのポートフォリオ兼ブログサイト。
              <wbr />
              猫派です。
            </p>
            <div className='mt-20 flex flex-col'>
              <Link
                href='/tech_blog'
                className='mb-5 inline-flex rounded-md bg-indigo-600 px-5 py-5 text-4xl text-white hover:bg-indigo-700'
              >
                <MdOutlineArticle size={45} className='mr-1' />
                ブログ一覧へ
              </Link>
              <Link
                href='/about'
                className='inline-flex justify-center rounded-md border border-muted px-2 py-4 text-xl hover:bg-muted/50'
              >
                About me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
