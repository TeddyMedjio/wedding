import { Bell } from "lucide-react";
import Container from "./Container";
import Image from "next/image";
import FadeInBlur from "./FadeInBlur";

export const Hero = () => {
  return (
    <section className=" my-20 md:my-30">
      <Container>
        <FadeInBlur delay={0} duration={0.9}>
          <h1 className="text-center text-6xl md:text-9xl uppercase font-libre-caslon-text">
            Noe & Sandrine
          </h1>
        </FadeInBlur>

        <div className="flex flex-col md:flex-row items-center justify-center my-10 space-y-5 md:space-y-0">
          <FadeInBlur delay={0.4} duration={0.9}>
            <p className=" md:text-2xl uppercase">Barcelone</p>
          </FadeInBlur>
          <hr className=" w-5 rotate-90 md:rotate-none md:w-32 mx-3" />
          <FadeInBlur delay={0.5} duration={0.9}>
            <p className="flex flex-col md:flex-row items-center gap-1 md:text-2xl uppercase">
              <Bell className="size-4 md:size-6" />
              Samedi, 27 Sep.
            </p>
          </FadeInBlur>
        </div>
      </Container>
      <div className="relative w-full h-[350px] md:h-[600px]">
        <Image
          src="/church.png"
          fill={true}
          alt="image des maries"
          className="absolute inset-0 m-auto object-cover "
        />
      </div>
    </section>
  );
};
