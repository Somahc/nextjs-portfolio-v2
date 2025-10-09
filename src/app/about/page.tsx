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
        <p className='pb-2 text-3xl font-semibold'>Somahc(Sigreni)</p>
        <p className='pb-2 text-xs text-gray-400'>エンジニア志望の学生</p>
        <div className='flex justify-center pb-4 text-2xl'>
          <a href='https://x.com/nimono_vr'>
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
          {/* 生活がもっと楽しくなるような
          <wbr />
          モノが作れるエンジニアを目指しています。 */}
          面白いものが作れるエンジニアを目指しています。
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
          <li className='mb-2 ml-5'>
            JavaScript, TypeScript(Vue, React, Next.js, NestJS)
          </li>
          <li className='mb-2 ml-5'>GLSL/HLSL</li>
          <li className='mb-2 ml-5'>C++</li>
          <li className='mb-2 ml-5'>Python</li>
          <li className='mb-2 ml-5'>Unity</li>
          <li className='mb-2 ml-5'>Houdini</li>
          <li className='mb-2 ml-5'>Blender</li>
          <li className='mb-2 ml-5'>Substance 3D Painter</li>
          <li className='mb-2 ml-5'>TouchDesigner</li>
          <li className='mb-2 ml-5'>Git/GitHub</li>
          <li className='mb-2 ml-5'>MySQL, PostgreSQL</li>
          <li className='mb-2 ml-5'>PHP(Laravel)</li>
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
            フロントエンドエンジニアとして長期インターン@株式会社ジュニ(2024.6 - now)
          </li>
          <li className='mb-2 ml-5'>
            Unityインタラクティブエンジニアとして2週間インターン@チームラボ株式会社(2025.10)
          </li>
          <li className='mb-2 ml-5'>
            Webエンジニアとして2週間インターン@ピクシブ株式会社(2025.9)
          </li>
          <li className='mb-2 ml-5'>青山学院大学大学院 社会情報学研究科入学(2025.4)</li>
          <li className='mb-2 ml-5'>
            カナダ・トロントのヨーク大学へ8ヶ月の交換留学(2023.8 - 2024.4)
          </li>
          <li className='mb-2 ml-5'>
            短期インターン参加@DMM Group、Sansan株式会社(2023.8)
          </li>
          <li className='mb-2 ml-5'>
            ゼミ配属・フロントエンドエンジニアとして長期インターン@株式会社ハウコレ(2023.4
            - 2023.8)
          </li>
          <li className='mb-2 ml-5'>青山学院大学 社会情報学部入学(2021.4)</li>
        </ul>
      </section>

      <section className='mb-10'>
        <h2
          className='mb-4 border-b border-muted pb-3 text-4xl'
          style={{ fontWeight: '800' }}
        >
          Works
        </h2>
        <ul className='list-disc'>
          <h3 className='mb-3 text-2xl font-semibold' style={{ fontWeight: '800' }}>
            2025
          </h3>
          <li className='mb-2 ml-5'>
            自作WebGLエディタ・シェーダー実行環境「
            <ExternalLink href='https://github.com/Somahc/glsl-livecoding-editor-web'>
              Bonsomatic（仮称）
            </ExternalLink>
            」 (2025.9)
          </li>
          <li className='mb-2 ml-5'>
            Windowsアプリ「
            <ExternalLink href='https://sigreni.booth.pm/items/7298984'>
              いつでもマイクミュート切り替えできるやつ for VRChat
            </ExternalLink>
            」 (2025.8)
          </li>
          <li className='mb-2 ml-5'>
            Open Hack U 2025 Tokyo「
            <ExternalLink href='http://somahc.dev/note/us23_c1zpp'>LIFE</ExternalLink>」
            出場(2025.6)
          </li>
          <li className='mb-2 ml-5'>
            VRChatワールド 「
            <ExternalLink href='https://x.com/nimono_vr/status/1911016978380456321'>
              Lakeside Glamping Dome
            </ExternalLink>
            」 (2025.4)
          </li>
          <li className='mb-2 ml-5'>
            Progateハッカソン powered by AWS 「
            <ExternalLink href='https://topaz.dev/projects/3f596eb1f0425e4e342f'>
              Phantom Frame
            </ExternalLink>
            」出場 (2025.3)
          </li>
          <li className='mb-2 ml-5'>
            VRChatアバターギミック 「
            <ExternalLink href='https://sigreni.booth.pm/items/6612290'>
              処理中ヘイロー
            </ExternalLink>
            」 (2025.2)
          </li>
          <li className='mb-2 ml-5'>
            VRChatアバターギミック 「
            <ExternalLink href='https://sigreni.booth.pm/items/6550591'>
              服薬ギミック
            </ExternalLink>
            」 (2025.2)
          </li>
          <li className='mb-2 ml-5'>
            VRChatアバターギミック 「
            <ExternalLink href='https://sigreni.booth.pm/items/6478444'>
              触れたら破裂するガマの穂
            </ExternalLink>
            」 (2025.1)
          </li>
          <li className='mb-2 ml-5'>
            学部卒業論文 「
            <ExternalLink href='https://github.com/Somahc/thesis-bachelor/blob/main/main.pdf'>
              ゲーミフィケーションを適用した英語発音学習支援システム
            </ExternalLink>
            」 (2025.1)
          </li>
          <h3 className='mb-3 text-2xl font-semibold' style={{ fontWeight: '800' }}>
            2024
          </h3>
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
        </ul>

        <p className='mt-5'>その他、Discord Botなど</p>
      </section>

      <section className='mb-10'>
        <h2
          className='mb-4 border-b border-muted pb-3 text-4xl'
          style={{ fontWeight: '800' }}
        >
          好きなこと
        </h2>
        <p>
          Web開発、VRChat向けアバターギミック・ワールド作り、自作キーボード、カメラ、言語学習などなど。最近はリアルタイムレンダリングについて勉強中です。
        </p>
      </section>
    </main>
  )
}
