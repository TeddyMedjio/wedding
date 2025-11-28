import Container from "@/components/Container";
import FadeInBlur from "@/components/FadeInBlur";
import { div } from "framer-motion/client";
import Image from "next/image";

function Contact() {
  return (
    <div className="grid place-items-center my-20">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row items-center justify-center max-w-[1200px]">
          <div className=" h-[400px] md:flex-auto self-stretch overflow-visible md:h-auto relative">
            <Image
              src="/maries.jpg"
              fill={true}
              alt="image des maries dans les prairies"
              className="absolute object-cover object-center inset-0 m-auto"
            />
          </div>
          <form
            action="traitement"
            method="post"
            className="space-y-10 flex-1 px-5"
          >
            <p className="font-libre-caslon-text text-[30px] md:text-[32px] leading-10">
              Réservez votre place. <br /> À bientôt!
            </p>
            <div className="flex flex-col md:flew-rowitems-center space-y-5 md:space-x-5 w-full">
              {/* Nom */}
              <div className="flex-1/2 flex flex-col space-y-3">
                <label htmlFor="nom" className="font-light">
                  Nom
                </label>
                <input
                  type="text"
                  name="nom"
                  id="nom"
                  placeholder="Nom"
                  className="border-b border-neutral-400 placeholder:font-light pb-2 outline-none focus:border-black/50"
                  required
                />
              </div>

              {/* Prenom */}
              <div className="flex-1/2 flex flex-col space-y-3">
                <label htmlFor="prenom" className="font-light">
                  Prenom
                </label>
                <input
                  type="text"
                  name="prenom"
                  id="prenom"
                  placeholder="Prenom"
                  className="border-b border-neutral-400 placeholder:font-light pb-2 outline-none focus:border-black/50"
                  required
                />
              </div>
            </div>

            {/* email */}
            <div className="flex flex-col space-y-3">
              <label htmlFor="email" className="font-light">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="nom@gmail.com"
                className="border-b border-neutral-400 placeholder:font-light pb-2 outline-none focus:border-black/50"
                required
              />
            </div>

            {/* nombre d'invites */}
            <div className="flex flex-col space-y-3">
              <label htmlFor="mySelect" className="font-light">
                Combien d’invités supplémentaires seront présents?
              </label>
              <select
                id="mySelect"
                name="MyOption"
                className="border-b border-neutral-400 placeholder:font-light pb-2 outline-none focus:border-black/50"
                required
              >
                <option value="option1">0</option>
                <option value="option2">1</option>
                <option value="option3">2</option>
                <option value="option4">3</option>
                <option value="option5">4</option>
              </select>
            </div>

            {/* repas */}
            <div className="flex flex-col space-y-3">
              <label htmlFor="repas" className="font-light">
                Avez-vous des allergies ou des préférences alimentaires dont
                nous devrions être conscients ?
              </label>
              <input
                type="text"
                name="repas"
                id="repas"
                placeholder="ex: vegetarien, vegan, sans gluten etc."
                className="border-b border-neutral-400 placeholder:font-light pb-2 outline-none focus:border-black/50"
                required
              />
            </div>

            {/* avant le mariage */}
            <div className="flex flex-col space-y-3">
              <label htmlFor="checkbox" className="font-light">
                Pourrez-vous nous rejoindre pour la réunion pré-mariage le 26
                septembre ?
              </label>
              <div>
                <input
                  type="checkbox"
                  name="oui"
                  id="oui"
                  className=" checked:bg-black"
                />{" "}
                <label htmlFor="oui">Oui, compte sur moi.</label>
              </div>
              <div>
                <input type="checkbox" name="non" id="non" />{" "}
                <label htmlFor="non">
                  Non, je participerai uniquement à la célébration principale.
                </label>
              </div>
            </div>

            {/* body */}
            <div className="flex flex-col space-y-3">
              <label htmlFor="message" className="font-light">
                Laissez-nous un message ou un souhait pour notre grand jour !
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="J'aimerai vous dire..."
                className="border-b border-neutral-400 placeholder:font-light pb-5 outline-none focus:border-black/50"
                required
              />
            </div>

            <input
              type="submit"
              value="Envoyer"
              className=" border border-neutral-400 w-full p-3 cursor-pointer hover:text-white hover:bg-black duration-300 ease-in-out"
            />
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
