import Image from "next/image";
import Container from "./Container";
import { Carousel } from "./Carousel";
import FadeInBlur from "./FadeInBlur";

export const About = () => {
  return (
    <section id="about" className="w-full">
      <Container>
        <div className="grid place-items-center text-center">
          <div className="relative size-56">
            <Image
              src="/logo.png"
              width={70}
              height={70}
              alt="logo des maries"
              className="absolute inset-0 m-auto object-cover object-center"
            />
            <Image
              src="/palmiers.png"
              fill={true}
              alt="logo des maries"
              className="absolute inset-0 m-auto object-cover object-center"
            />
          </div>
          <div className="mt-5 mb-10 md:mb-20 md:space-y-2">
            <FadeInBlur delay={0.6} duration={0.9}>
              <p className="text-xl">
                Nous sommes ravis de vous avoir à nos côtés pour cette journée
                si spéciale,
              </p>
            </FadeInBlur>
            <FadeInBlur delay={0.7} duration={0.9}>
              <p className="text-xl">
                et nous sommes honnorés que vous ayez fait le déplacement pour
                être ici avec nous.
              </p>
            </FadeInBlur>
          </div>
          <div className="space-y-3">
            <FadeInBlur delay={0.8} duration={0.9}>
              <p className="text-xl">Avec amour,</p>
            </FadeInBlur>
            <FadeInBlur delay={0.9} duration={0.9}>
              <p className="text-2xl font-libre-caslon-text">Noe & Sandrine</p>
            </FadeInBlur>
          </div>
        </div>
      </Container>
      <Carousel />
      <div className="bg-white py-20 md:py-40">
        <Container>
          <FadeInBlur delay={0.4} duration={0.9}>
            <p className="font-libre-caslon-text text-3xl md:text-4xl">
              Une rencontre hasardeuse.
            </p>
          </FadeInBlur>
          <FadeInBlur delay={0.5} duration={0.9}>
            <p className="font-libre-caslon-text text-3xl md:text-4xl pl-10 md:pl-0 md:text-center my-10 md:my-20 w-70 md:w-full">
              Nous sommes restés par choix.
            </p>
          </FadeInBlur>
          <FadeInBlur delay={0.6} duration={0.9}>
            <p className="font-libre-caslon-text text-3xl md:text-4xl pl-20 md:pl-0 md:text-end ">
              Nous nous aimons pour la vie.
            </p>
          </FadeInBlur>
          <div className="flex flex-col-reverse md:flex-row items-center gap-7 w-full mt-20 md:mt-30">
            <FadeInBlur delay={0.7} duration={0.9}>
              <p className="text-xl leading-7 shrink max-w-[400px] h-[500px]">
                Noe et Sandrine se sont rencontrés lors d&rsquo;un voyage
                improvisé à Barcelone, et depuis, leur vie est une joyeuse
                aventure. Entre la découverte de nouvelles saveurs et de
                nouveaux sentiers de randonnée, et les flâneries délicieuses
                dans une minuscule librairie du Quartier Gothique, nous avons
                toujours su que nous étions faits l&rsquo;un pour l&rsquo;autre.{" "}
                <br /> <br /> Noe a fait sa demande en mariage sous la douce
                lumière de la fontaine de Montjuïc, lors d&rsquo;un pique-nique
                surprise et d&rsquo;une sérénade. <br /> <br /> Nous sommes
                ravis de célébrer ce nouveau chapitre avec vous tous !
              </p>
            </FadeInBlur>
            <div className="md:flex-1 relative w-full md:w-fit h-[200px] md:h-[500px] bg-red-100">
              <Image
                src="/plage.jpg"
                fill={true}
                alt="image des maries a la plage"
                className="absolute inset-0 m-auto object-cover"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
