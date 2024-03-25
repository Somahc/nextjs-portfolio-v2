import Link from "next/link";
import ThemeSwitch from "./theme-switch";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap py-5 md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-0"
        >
          <span className="dark:text-white text-xl font-bold">Somahc</span>
        </Link>
        <nav className="mr-auto ml-4 py-1 pl-4 border-l border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="/about" className="mr-5 hover:text-gray-300">
            About
          </Link>
          <Link href="/posts" className="mr-5 hover:text-gray-300">
            Blogs
          </Link>
        </nav>
        <ThemeSwitch />
      </div>
    </header>
  );
}
