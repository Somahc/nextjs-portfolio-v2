import { RiTwitterXFill } from 'react-icons/ri'

import Container from './container'

export default function Footer() {
  return (
    <footer className='body-font mt-8 border-t border-muted py-1 text-gray-600'>
      <Container>
        <div className='container mx-auto flex flex-row flex-wrap py-4'>
          <p className='text-sm text-gray-500 sm:text-left'>&copy; 2024-2025 Somahc</p>
          <span className='ml-auto mt-0 inline-flex justify-center sm:justify-start'>
            <div className='ml-3 text-gray-500'>
              <a href='https://x.com/somahack'>
                <RiTwitterXFill size={20} color={'#696969'} />
              </a>
            </div>
          </span>
        </div>
      </Container>
    </footer>
  )
}
