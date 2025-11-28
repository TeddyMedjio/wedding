import Image from "next/image";
import Container from "./Container";
import FadeInBlur from "./FadeInBlur";

export const Program = () => {
  return (
    <section id="programme" className="mb-20">
      <Container>
        <div className="grid place-items-center md:relative">
          {/* programme un */}
          <FadeInBlur delay={0.5} duration={0.9}>
            <p className="text-4xl text-center font-libre-caslon-text my-14 md:my-20 leading-12">
              Programme de Mariage
            </p>
          </FadeInBlur>
          <div className="bg-white flex flex-col-reverse md:flex-row items-center md:h-[550px] w-full flex-wrap md:sticky md:top-60">
            {/* textes */}
            <div className=" max-w-[500px] p-5 md:p-10 h-full">
              <p className="text-2xl font-libre-caslon-text mb-5">
                Réunion Pré-Mariage
              </p>
              <p className="text-lg font-light">
                Avant le début des festivités, nous serions ravis
                d&rsquo;accueillir nos invités pour une soirée conviviale et
                détendue en ville. Ce sera l&rsquo;occasion idéale de se
                retrouver et de profiter de l&rsquo;ambiance barcelonaise.
              </p>
              <div className="mt-10">
                <p className=" text-lg font-light flex flex-col md:flex-row md:items-center justify-between border-t border-gray-200 py-5">
                  Date{" "}
                  <span className="font-libre-caslon-text">
                    Vendredi, 26 Septembre 2026
                  </span>
                </p>
                <p className=" text-lg font-light flex flex-col md:flex-row md:items-center justify-between border-t border-gray-200 py-5">
                  Heure{" "}
                  <span className="font-libre-caslon-text">
                    19h:00 - 22h:00
                  </span>
                </p>
                <p className=" text-lg font-light flex flex-col md:flex-row md:items-center justify-between border-t border-gray-200 py-5">
                  Localisation{" "}
                  <span className="font-libre-caslon-text">
                    Bar del Pla in El Born
                  </span>
                </p>
                <p className=" text-lg font-light flex flex-col md:flex-row md:items-center justify-between border-t border-gray-200 py-5">
                  Dress Code{" "}
                  <span className="font-libre-caslon-text">
                    Décontracté Chic
                  </span>
                </p>
              </div>
            </div>
            {/* image */}
            <div className="block relative md:flex-1 h-[400px] w-full md:w-fit md:h-full">
              <Image
                src="/restaurant.jpg"
                fill={true}
                alt="Bar del Pla à Barcelone pour la réunion pré-mariage"
                className="absolute inset-0 m-auto object-cover"
              />
            </div>
          </div>

          {/* programme deux */}
          <div className="md:sticky md:top-80 mt-20 md:mt-60 bg-white flex flex-col-reverse md:flex-row-reverse items-center md:h-[550px] w-full flex-wrap">
            {/* textes */}
            <div className=" max-w-[500px] p-5 md:p-10 h-full">
              <p className="text-2xl font-libre-caslon-text mb-5">
                Célébration de Mariage
              </p>
              <p className="text-lg font-light">
                Notre célébration se déroule au Castell de Sant Marçal, un
                château historique du XIe siècle avec des jardins, un lac et une
                architecture qui allie grandeur et élégance.
              </p>
              <div className="mt-10">
                <p className=" text-lg font-light flex flex-col md:flex-row md:items-center justify-between border-t border-gray-200 py-5">
                  Date{" "}
                  <span className="font-libre-caslon-text">
                    Samedi, 27 Septembre 2026
                  </span>
                </p>
                <p className=" text-lg font-light flex flex-col md:flex-row md:items-center justify-between border-t border-gray-200 py-5">
                  Heure{" "}
                  <span className="font-libre-caslon-text">
                    17h:00 (Début des cérémonies)
                  </span>
                </p>
                <p className=" text-lg font-light flex flex-col md:flex-row md:items-center justify-between border-t border-gray-200 py-5">
                  Localisation{" "}
                  <span className="font-libre-caslon-text">
                    Castell de Sant Marçal
                  </span>
                </p>
                <p className=" text-lg font-light flex flex-col md:flex-row md:items-center justify-between border-t border-gray-200 py-5">
                  Dress Code{" "}
                  <span className="font-libre-caslon-text">
                    Tenue semi-formelle / de cocktail
                  </span>
                </p>
              </div>
            </div>
            {/* image */}
            <div className="block relative md:flex-1 h-[400px] w-full md:w-fit md:h-full">
              <Image
                src="/mairie.jpg"
                fill={true}
                alt="Castell de Sant Marçal - Lieu de célébration du mariage"
                className="absolute inset-0 m-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
