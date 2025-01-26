import React from 'react'
import profilePic from '../../../public/profile_pic.png'
import Image from 'next/image'
import { RiTwitterXFill } from 'react-icons/ri'
import { SiZenn } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { SiScrapbox } from 'react-icons/si'
import ExternalLink from '../components/external-link'

export default function Page() {
  return (
    <main>
      <section className='mx-auto mb-10 w-full text-center'>
        <Image
          className='inline-block rounded-full py-5'
          style={{ borderRadius: '50%' }}
          src={profilePic}
          alt='プロフィール写真'
          width={200}
          height={200}
        />
        <p className='pb-2 text-3xl font-semibold'>Somahc</p>
        <p className='pb-2 text-xs text-gray-400'>エンジニア志望の学生</p>
        <div className='flex justify-center pb-4 text-2xl'>
          <a href='https://x.com/somahack'>
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
          <a href='https://scrapbox.io/sigreni'>
            <SiScrapbox
              className='mr-2 duration-300 hover:fill-blue-400'
              size={40}
              color={'#696969'}
            />
          </a>
        </div>
        <p className='break-keep text-sm md:text-base'>
          生活がもっと楽しくなるような
          <wbr />
          モノが作れるエンジニアを目指しています。
        </p>
      </section>

      <section className='mb-10'>
        <h2
          className='mb-4 border-b border-muted pb-3 text-4xl'
          style={{ fontWeight: '800' }}
        >
          Skill
        </h2>
        <h3 className='mb-3 text-2xl' style={{ fontWeight: '800' }}>
          勉強中の技術、ソフトウェア
        </h3>
        <ul className='mb-8 list-disc'>
          <li className='mb-2 ml-5'>HTML/CSS(Tailwind CSS, SCSS)</li>
          <li className='mb-2 ml-5'>JavaScript, TypeScript(Vue, React, Next.js)</li>
          <li className='mb-2 ml-5'>C++</li>
          <li className='mb-2 ml-5'>Unity</li>
          <li className='mb-2 ml-5'>Blender, Substance Painter 3D</li>
          <li className='mb-2 ml-5'>Git/GitHub</li>
          <li className='mb-2 ml-5'>Python</li>
          <li className='mb-2 ml-5'>Dart(Flutter)</li>
          <li className='mb-2 ml-5'>MySQL, PostgreSQL</li>
          <li className='mb-2 ml-5'>PHP(Laravel)</li>
          <li className='mb-2 ml-5'>NestJS</li>
        </ul>
        <h3 className='mb-3 text-2xl font-semibold' style={{ fontWeight: '800' }}>
          資格・賞
        </h3>
        <ul className='mb-8 list-disc'>
          <li className='mb-2 ml-5'>TOEIC 公開テスト 870点</li>
          <li className='mb-2 ml-5'>IELTS Academic OA 6.5点</li>
          <li className='mb-2 ml-5'>2022年度 学部成績最優秀賞</li>
          <li className='mb-2 ml-5'>英検準一級</li>
          <li className='mb-2 ml-5'>普通自動車免許</li>
        </ul>
      </section>

      <section className='mb-10'>
        <h2
          className='mb-4 border-b border-muted pb-3 text-4xl'
          style={{ fontWeight: '800' }}
        >
          Career
        </h2>
        <ul className='list-disc'>
          <li className='mb-2 ml-5'>
            技育博 vol.5 「
            <ExternalLink href='https://github.com/balckowl/learning-path'>
              Tech Path
            </ExternalLink>
            」 出場(2024.12)
          </li>
          <li className='mb-2 ml-5'>
            Open Hack U 2024 Tokyo Vol.3 「
            <ExternalLink href='https://github.com/balckowl/ai-manga'>
              4koma!!!
            </ExternalLink>
            」 出場(2024.11)
          </li>
          <li className='mb-2 ml-5'>
            Progateハッカソン powered by Supabase 「
            <ExternalLink href='https://github.com/balckowl/learning-path'>
              Tech Path
            </ExternalLink>
            」 スタディスト賞(2024.9)
          </li>
          <li className='mb-2 ml-5'>
            RSS Hackathon 2024 Beyond 「
            <ExternalLink href='https://github.com/Somahc/TeamTuner'>
              Team Tuner
            </ExternalLink>
            」審査員特別賞(2024.6)
          </li>
          <li className='mb-2 ml-5'>
            フロントエンドエンジニアとして長期インターン@株式会社ジュニ(2024.6 - now)
          </li>
          <li className='mb-2 ml-5'>
            カナダ・トロントのヨーク大学へ8ヶ月の交換留学(2023.8 - 2024.4)
          </li>
          <li className='mb-2 ml-5'>
            DMM Group、Sansan株式会社にて短期インターン参加(2023.8)
          </li>
          <li className='mb-2 ml-5'>
            ゼミ配属・フロントエンドエンジニアとして長期インターン@株式会社ハウコレ(2023.4
            - 2023.8)
          </li>
          <li className='mb-2 ml-5'>英語学習スタート(2022.1)</li>
          <li className='mb-2 ml-5'>青山学院大学 社会情報学部入学 (2021.4)</li>
        </ul>
      </section>

      <section className='mb-10'>
        <h2
          className='mb-4 border-b border-muted pb-3 text-4xl'
          style={{ fontWeight: '800' }}
        >
          好きなこと
        </h2>
        <p>
          Web開発、VRChat向けアバターギミック作り、自作キーボード、カメラ、言語学習などなど。最近は3DCGにハマり、BlenderやSubstance
          Painter 3Dと格闘しています。
        </p>
      </section>
    </main>
  )
}
