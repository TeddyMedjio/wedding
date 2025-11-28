import Link from "next/link";
import Container from "./Container";
import { ArrowUpRight } from "lucide-react";
import FadeInBlur from "./FadeInBlur";

export const Rsvp = () => {
  return (
    <section className="my-30">
      <Container>
        <div className="grid place-items-center text-center space-y-10">
          <FadeInBlur delay={0.3} duration={0.8}>
            <p className="font-libre-caslon-text text-4xl md:text-6xl md:leading-20">
              Votre présence nous serait précieuse en ce jour si important pour
              nous.
            </p>
          </FadeInBlur>
          <FadeInBlur delay={0.6} duration={0.8}>
            <p className="text-xl">
              Veuillez répondre avant le <br className="md:hidden" /> 15 juillet
              2026.
            </p>
          </FadeInBlur>
          <Link
            href="/contact"
            className="text-[17px] border border-black hover:bg-black hover:text-white duration-300 ease-in-out p-2.5 flex items-center gap-2"
          >
            RSVP
            <ArrowUpRight className="ml-20 stroke-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
