import Link from "next/link";
import ThemeSwitch from "./theme-switch";
import Container from "./container";

export default function Header() {
  return (
    <header className="border-b mb-8 border-muted">
      <Container>
        <div className="flex flex-wrap py-3 md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center mb-0"
          >
            <span className="mr-1 sm:mr-0 text-xl">Somahc</span>
          </Link>
          <nav className="mr-auto ml-2 sm:ml-4 py-1 pl-4 border-l border-gray-400 flex flex-wrap items-center text-base justify-center">
            <Link href="/about" className="mr-2 sm:mr-5 hover:text-gray-300">
              About
            </Link>
            <Link
              href="/tech_blog"
              className="mr-2 sm:mr-5 hover:text-gray-300"
            >
              Blog
            </Link>
            <Link href="/note" className="mr-2 sm:mr-5 hover:text-gray-300">
              Note
            </Link>
          </nav>
          <ThemeSwitch />
        </div>
      </Container>
    </header>
  );
}
