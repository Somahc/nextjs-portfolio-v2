import Link from 'next/link'
import ThemeSwitch from './theme-switch'
import Container from './container'

export default function Header() {
  return (
    <header className='mb-8 border-b border-muted'>
      <Container>
        <div className='flex flex-wrap items-center py-3 md:flex-row'>
          <Link href='/' className='title-font mb-0 flex items-center font-medium'>
            <h1 className='mr-1 text-xl font-bold sm:mr-0'>Somahc</h1>
          </Link>
          <nav className='ml-2 mr-auto flex flex-wrap items-center justify-center border-l border-gray-400 py-1 pl-4 text-base sm:ml-4'>
            <Link href='/about' className='mr-2 hover:text-gray-300 sm:mr-5'>
              About
            </Link>
            <Link href='/tech_blog' className='mr-2 hover:text-gray-300 sm:mr-5'>
              Blog
            </Link>
            <Link href='/note' className='mr-2 hover:text-gray-300 sm:mr-5'>
              Note
            </Link>
          </nav>
          <ThemeSwitch />
        </div>
      </Container>
    </header>
  )
}
