import { PiButterflyFill } from "react-icons/pi";
import Container from "./container";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font border-t py-1 mt-8 border-muted">
      <Container>
        <div className="container mx-auto py-4 flex flex-wrap flex-row">
          <p className="text-gray-500 text-sm sm:text-left">© 2024 Somahc</p>
          <span className="inline-flex ml-auto mt-0 justify-center sm:justify-start">
            <div className="ml-3 text-gray-500">
              <a href="https://bsky.app/profile/s1greni.bsky.social">
                <PiButterflyFill size={20} color={"#696969"} />
              </a>
            </div>
          </span>
        </div>
      </Container>
    </footer>
  );
}
