import React from 'react'
import profilePic from '../../../public/profile_pic.png'
import Image from 'next/image'
import { RiTwitterXFill } from 'react-icons/ri'
import { SiZenn } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { SiDuolingo } from 'react-icons/si'

export default function Page() {
  return (
    <main>
      {/* <h1 className="text-6xl font-bold border-b border-muted pb-3">About</h1> */}
      <Image
        className='mx-auto rounded-full py-5'
        style={{ borderRadius: '50%' }}
        src={profilePic}
        alt='プロフィール写真'
        width={200}
        height={200}
      />
      <p className='pb-2 text-center text-3xl font-semibold'>Somahc</p>
      <p className='pb-2 text-center text-xs text-gray-400'>エンジニア志望の学生</p>
      <div className='flex justify-center pb-4 text-2xl'>
        <a href='https://bsky.app/profile/s1greni.bsky.social'>
          <RiTwitterXFill
            className='mr-2 duration-300 hover:fill-blue-400'
            size={40}
            color={'#696969'}
          />
        </a>
        <a href='https://zenn.dev/somahc'>
          <SiZenn
            className='mr-2 duration-300 hover:fill-blue-400'
            size={40}
            color={'#696969'}
          />
        </a>
        <a href='https://github.com/Somahc'>
          <FaGithub
            className='mr-2 duration-300 hover:fill-blue-400'
            size={40}
            color={'#696969'}
          />
        </a>
        <a href='https://www.duolingo.com/profile/sigreni'>
          <SiDuolingo
            className='mr-2 duration-300 hover:fill-green-400'
            size={40}
            color={'#696969'}
          />
        </a>
      </div>
      <p className='mb-10 pb-5'>
        生活がもっと楽しくなるようなモノが作れるエンジニアを目指して勉強中の学生です。小学生の時に父のお下がりのノートパソコンで遊ばせてもらったことからIT系の仕事に興味を持つようになりました。3年次に配属されたゼミの同期や参加したインターンで同世代のレベルの高さに圧倒され、フロントエンドを中心にバックエンドやモバイルアプリ開発、競プロなど様々なことにチャレンジ中です。
      </p>

      <h2
        className='mb-4 border-b border-muted pb-3 text-4xl'
        style={{ fontWeight: '800' }}
      >
        Skill
      </h2>
      <h3 className='mb-3 text-2xl' style={{ fontWeight: '800' }}>
        よく使う技術
      </h3>
      <ul className='mb-8 list-disc'>
        <li className='mb-2 ml-5'>HTML/CSS(Tailwind CSS)</li>
        <li className='mb-2 ml-5'>JavaScript, TypeScript(Vue, React, Next.js)</li>
        <li className='mb-2 ml-5'>C++</li>
        <li className='mb-2 ml-5'>Unity</li>
        <li className='mb-2 ml-5'>Git/GitHub</li>
      </ul>
      <h3 className='mb-3 text-2xl font-semibold' style={{ fontWeight: '800' }}>
        その他勉強中の技術
      </h3>
      <ul className='mb-8 list-disc'>
        <li className='mb-2 ml-5'>Python</li>
        <li className='mb-2 ml-5'>Dart(Flutter)</li>
        <li className='mb-2 ml-5'>MySQL, PostgreSQL</li>
        <li className='mb-2 ml-5'>PHP(Laravel)</li>
        <li className='mb-2 ml-5'>NestJS</li>
      </ul>
      <h3 className='mb-3 text-2xl font-semibold' style={{ fontWeight: '800' }}>
        資格
      </h3>
      <ul className='mb-10 list-disc'>
        <li className='mb-2 ml-5'>英検準一級</li>
        <li className='mb-2 ml-5'>TOEIC IP 930点</li>
        <li className='mb-2 ml-5'>IELTS Academic OA 6.5点</li>
        <li className='mb-2 ml-5'>普通自動車免許</li>
      </ul>

      <h2
        className='mb-4 border-b border-muted pb-3 text-4xl'
        style={{ fontWeight: '800' }}
      >
        Career
      </h2>
      <ul className='mb-10 list-disc'>
        <li className='mb-2 ml-5'>青山学院大学 社会情報学部入学 (2021.4)</li>
        <li className='mb-2 ml-5'>英語学習スタート(2022.1)</li>
        <li className='mb-2 ml-5'>
          ゼミ配属・株式会社ハウコレにてVueフロントエンドエンジニアとして長期インターン開始(2023.4)
        </li>
        <li className='mb-2 ml-5'>
          DMM Group、Sansan株式会社にて短期インターン参加(2023.8)
        </li>
        <li className='mb-2 ml-5'>
          カナダ・トロントのヨーク大学へ8ヶ月の交換留学(2023.8 - 2024.4)
        </li>
      </ul>

      <h2
        className='mb-4 border-b border-muted pb-3 text-4xl'
        style={{ fontWeight: '800' }}
      >
        好きなこと
      </h2>
      <p className='mb-8'>
        昔からガジェット関連は好きで、今度自作キーボードに挑戦してみようと企んでいます。趣味としてエレキギターと自然言語学習（もちろんプログラミング言語も！）を楽しんでいます。言語学習は英語を中心に勉強してきましたが、最近は韓国語の勉強にもチャレンジしています。マイブームは少し前に買った一眼レフです。
      </p>
    </main>
  )
}
