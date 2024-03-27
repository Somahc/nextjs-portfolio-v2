import Link from "next/link";
import { MdOutlineArticle } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-40">
        <h2 className="text-7xl" style={{ fontWeight: "800" }}>
          Hello there! 👋
        </h2>
        <div className="text-gray-500 pt-3">
          Somahcのポートフォリオ兼ブログサイト。猫派です。
        </div>
        <div className="flex flex-col mt-20">
          <Link
            href="/tech_blog"
            className="text-4xl inline-flex py-5 px-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md mb-5"
          >
            <MdOutlineArticle size={45} className="mr-1" />
            ブログ一覧へ
          </Link>
          <Link
            href="/about"
            className="text-xl inline-flex justify-center border border-muted rounded-md py-4 px-2 hover:bg-muted/50"
          >
            About me
          </Link>
        </div>
      </div>
      {/* <div className="flex">
        <Link
          href="/tech_blog"
          className="inline-flex py-2 px-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
        >
          <MdOutlineArticle size={25} className="mr-1" />
          ブログ一覧へ
        </Link>
        <Link
          href="/about"
          className="inline-flex border border-muted rounded-md py-2 px-2 ml-3"
        >
          About me
        </Link>
      </div> */}
    </>
  );
}
