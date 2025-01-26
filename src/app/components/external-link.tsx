import { FaExternalLinkAlt } from 'react-icons/fa'

type Props = {
  href: string
  children: React.ReactNode
}

const ExternalLink = (props: Props) => {
  return (
    <>
      <a className='border-blue-400 text-blue-400 hover:border-b-1' href={props.href}>
        {props.children}
        <FaExternalLinkAlt className='mb-1 ml-1 inline' size={12} />
      </a>
    </>
  )
}

export default ExternalLink
