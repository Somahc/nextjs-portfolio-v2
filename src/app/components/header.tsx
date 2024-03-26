import Link from "next/link";
import ThemeSwitch from "./theme-switch";

export default function Header() {
  return (
    <header className="border-b mb-8 border-muted">
      <div className="container mx-auto flex flex-wrap py-3 md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center mb-0"
        >
          <span
            className="text-xl"
            style={{ fontWeight: "800", fontFamily: "Noto Sans JP" }}
          >
            Somahc
          </span>
        </Link>
        <nav className="mr-auto ml-4 py-1 pl-4 border-l border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="/about" className="mr-5 hover:text-gray-300">
            About
          </Link>
          <Link href="/blog" className="mr-5 hover:text-gray-300">
            Blog
          </Link>
        </nav>
        <ThemeSwitch />
      </div>
    </header>
  );
}
