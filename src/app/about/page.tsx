import React from "react";
import profilePic from "../../../public/profile_pic.png";
import Image from "next/image";
import { PiButterflyFill } from "react-icons/pi";
import { SiZenn } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiDuolingo } from "react-icons/si";

export default function Page() {
  return (
    <main>
      {/* <h1 className="text-6xl font-bold border-b border-muted pb-3">About</h1> */}
      <Image
        className="mx-auto rounded-full py-5"
        style={{ borderRadius: "50%" }}
        src={profilePic}
        alt="プロフィール写真"
        width={200}
        height={200}
      />
      <p className="text-center text-3xl font-semibold pb-2">Somahc</p>
      <p className="text-center text-xs text-gray-400 pb-2">
        エンジニア志望の学生
      </p>
      <div className="flex justify-center text-2xl pb-4">
        <a href="https://bsky.app/profile/s1greni.bsky.social">
          <PiButterflyFill
            className="mr-2 hover:fill-blue-400 duration-300"
            size={40}
            color={"#696969"}
          />
        </a>
        <a href="https://zenn.dev/somahc">
          <SiZenn
            className="mr-2 hover:fill-blue-400 duration-300"
            size={40}
            color={"#696969"}
          />
        </a>
        <a href="https://github.com/Somahc">
          <FaGithub
            className="mr-2 hover:fill-blue-400 duration-300"
            size={40}
            color={"#696969"}
          />
        </a>
        <a href="https://www.duolingo.com/profile/VKX4266449">
          <SiDuolingo
            className="mr-2 hover:fill-green-400 duration-300"
            size={40}
            color={"#696969"}
          />
        </a>
      </div>
      <p className="pb-5 mb-10">
        Web系エンジニアを目指して勉強中の学生です。小学生の時に父のお下がりのノートパソコンで遊ばせてもらったことからIT系の仕事に興味を持つようになり、大学入学後のプログラミングの授業も楽しく受けていて自信もあったのですが、3年次に配属されたゼミの同期や参加したインターンで同世代のレベルの高さに圧倒されました。そんな彼らに追いつくべく、フロントエンドを中心にバックエンドやモバイルアプリ開発、競プロなど様々なことにチャレンジ中です。
      </p>

      <h2
        className="text-4xl border-b border-muted pb-3 mb-4"
        style={{ fontWeight: "800", fontFamily: "Noto Sans JP" }}
      >
        Skill
      </h2>
      <h3
        className="text-2xl mb-3"
        style={{ fontWeight: "800", fontFamily: "Noto Sans JP" }}
      >
        よく使う技術
      </h3>
      <ul className="list-disc mb-8">
        <li className="ml-5 mb-2">HTML/CSS(Tailwind CSS)</li>
        <li className="ml-5 mb-2">
          JavaScript, TypeScript(Vue, React, Next.js)
        </li>
        <li className="ml-5 mb-2">C++</li>
        <li className="ml-5 mb-2">Unity</li>
        <li className="ml-5 mb-2">Git/GitHub</li>
      </ul>
      <h3
        className="text-2xl font-semibold mb-3"
        style={{ fontWeight: "800", fontFamily: "Noto Sans JP" }}
      >
        その他勉強中の技術
      </h3>
      <ul className="list-disc mb-8">
        <li className="ml-5 mb-2">Python</li>
        <li className="ml-5 mb-2">Dart(Flutter)</li>
        <li className="ml-5 mb-2">MySQL, PostgreSQL</li>
        <li className="ml-5 mb-2">PHP(Laravel)</li>
        <li className="ml-5 mb-2">NestJS</li>
      </ul>
      <h3
        className="text-2xl font-semibold mb-3"
        style={{ fontWeight: "800", fontFamily: "Noto Sans JP" }}
      >
        資格
      </h3>
      <ul className="list-disc mb-10">
        <li className="ml-5 mb-2">英検準一級</li>
        <li className="ml-5 mb-2">TOEIC IP 930点</li>
        <li className="ml-5 mb-2">IELTS Academic OA 6.5点</li>
        <li className="ml-5 mb-2">普通自動車免許</li>
      </ul>

      <h2
        className="text-4xl border-b border-muted pb-3 mb-4"
        style={{ fontWeight: "800", fontFamily: "Noto Sans JP" }}
      >
        Career
      </h2>
      <ul className="list-disc mb-10">
        <li className="ml-5 mb-2">青山学院大学 社会情報学部入学 (2021.4)</li>
        <li className="ml-5 mb-2">英語学習スタート(2022.1)</li>
        <li className="ml-5 mb-2">
          ゼミ配属・株式会社ハウコレにてVueフロントエンドエンジニアとして長期インターン開始(2023.4)
        </li>
        <li className="ml-5 mb-2">
          DMM Group、Sansan株式会社にて短期インターン参加(2023.8)
        </li>
        <li className="ml-5 mb-2">
          カナダ・トロントのヨーク大学へ8ヶ月の交換留学(2023.8 - 2024.4)
        </li>
      </ul>

      <h2
        className="text-4xl border-b border-muted pb-3 mb-4"
        style={{ fontWeight: "800", fontFamily: "Noto Sans JP" }}
      >
        好きなこと
      </h2>
      <p className="mb-8">
        昔からガジェット関連は好きで、今度自作キーボードに挑戦してみようと企んでいます。趣味としてエレキギターと自然言語学習（もちろんプログラミング言語も！）を楽しんでいます。言語学習は英語を中心に勉強してきましたが、最近は韓国語の勉強にもチャレンジしています。マイブームは少し前に買った一眼レフです。
      </p>
    </main>
  );
}
