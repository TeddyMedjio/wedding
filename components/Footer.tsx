import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-foreground text-white py-20">
      <Container>
        <div className="grid place-items-center md:place-items-start">
          <Link href="/">
            {" "}
            <Image
              src="/logo_blanc.png"
              height={70}
              width={70}
              alt="logo_blanc"
              className="mb-6"
            />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          {/* elements de gauche */}
          <div className="max-w-2xl text-center md:text-left">
            <p className="text-2xl font-libre-caslon-text">Noe & Sandrine</p>
            <p className="text-lg font-light text-gray-300 mt-3">
              Nous sommes tellement heureux de célébrer notre amour avec vous !
              Maintenant, nous entamons un nouveau chapitre de notre vie, main
              dans la main, le cœur rempli de gratitude pour tout l&rsquo;amour
              qui nous entoure.
            </p>
          </div>
          {/* navigation */}
          <ul className="md:w-6xl lg:w-fit text-center md:text-right space-y-2">
            <li>
              <Link href="/#about" className="text-lg uppercase">
                Nous
              </Link>
            </li>
            <li>
              <Link href="/#programme" className="text-lg uppercase">
                programme
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="text-lg uppercase">
                faq
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                target="_blank"
                className="text-lg uppercase"
              >
                rsvp
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
