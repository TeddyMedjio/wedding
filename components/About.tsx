import Image from "next/image";
import Container from "./Container";
import { Carousel } from "./Carousel";

export const About = () => {
  return (
    <section className="w-full mb-50">
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
          <div className="mt-5 mb-20 space-y-2">
            <p className="text-xl">
              Nous sommes ravis de vous avoir à nos côtés pour cette journée si
              spéciale,
            </p>
            <p className="text-xl">
              et nous sommes honnorés que vous ayez fait le déplacement pour
              être ici avec nous.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-xl">Avec amour,</p>
            <p className="text-2xl font-libre-caslon-text">Noah & Sabrina</p>
          </div>
        </div>
      </Container>
      <Carousel />
      <div className="bg-white py-40">
        <Container>
          <p className="font-libre-caslon-text text-4xl">
            Une rencontre hasardeuse
          </p>
          <p className="font-libre-caslon-text text-4xl text-center my-20">
            Nous sommes restés par choix
          </p>
          <p className="font-libre-caslon-text text-4xl text-end">
            Nous aimons pour la vie
          </p>
          <div className="flex items-center gap-7 w-full mt-30">
            <p className="text-xl leading-7 shrink max-w-[400px] h-[500px]">
              Noah et Sabrina se sont rencontrés lors d'un voyage improvisé à
              Barcelone, et depuis, leur vie est une joyeuse aventure. Entre la
              découverte de nouvelles saveurs et de nouveaux sentiers de
              randonnée, et les flâneries délicieuses dans une minuscule
              librairie du Quartier Gothique, nous avons toujours su que nous
              étions faits l'un pour l'autre. <br /> <br /> Noah a fait sa
              demande en mariage sous la douce lumière de la fontaine de
              Montjuïc, lors d'un pique-nique surprise et d'une sérénade. <br />{" "}
              <br /> Nous sommes ravis de célébrer ce nouveau chapitre avec vous
              tous !
            </p>
            <div className="flex-1 relative h-[500px] bg-red-100">
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
