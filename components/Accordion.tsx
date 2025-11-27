import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import FadeInBlur from "./FadeInBlur";

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem
        className={cn("border-t border-b-0 border-gray-100 py-4")}
        value="item-2"
      >
        <AccordionTrigger
          className={cn(
            "text-xl font-normal hover:no-underline cursor-pointer"
          )}
        >
          Peut-on prendre des photos pendant le mariage?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <FadeInBlur delay={0} duration={0.9}>
            <p className="text-lg font-light text-slate-600">
              Oui, immortalisez votre joie et partagez-la avec notre hashtag
              #NoeSandrineBarcelona.
            </p>
          </FadeInBlur>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        className={cn("border-t border-b-0 border-gray-100 py-4")}
        value="item-3"
      >
        <AccordionTrigger
          className={cn(
            "text-xl font-normal hover:no-underline cursor-pointer"
          )}
        >
          Puis-je amener mes enfants au mariage?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <FadeInBlur delay={0} duration={0.9}>
            <p className="text-lg font-light text-slate-600">
              Afin que tous les invités puissent pleinement profiter de la
              célébration, la cérémonie et la réception de mariage seront
              réservées aux adultes. Les enfants sont les bienvenus au brunch
              d&rsquo;adieu.
            </p>
          </FadeInBlur>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        className={cn("border-t border-b-0 border-gray-100 py-4")}
        value="item-4"
      >
        <AccordionTrigger
          className={cn(
            "text-xl font-normal hover:no-underline cursor-pointer"
          )}
        >
          Comment pouvons-nous vous faire l&rsquo;honneur d&rsquo;un cadeau?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <FadeInBlur delay={0} duration={0.9}>
            <p className="text-lg font-light text-slate-600">
              Oui, immortalisez votre joie et partagez-la avec notre hashtag
              #NoeSandrineBarcelona.
            </p>
          </FadeInBlur>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        className={cn("border-t border-b-0 border-gray-100 py-4")}
        value="item-5"
      >
        <AccordionTrigger
          className={cn(
            "text-xl font-normal hover:no-underline cursor-pointer"
          )}
        >
          Que faire si j&rsquo;ai des restrictions alimentaires ou des
          allergies?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <FadeInBlur delay={0} duration={0.9}>
            <p className="text-lg font-light text-slate-600">
              Veuillez nous informer de toute restriction alimentaire ou
              allergie lors de votre inscription, et nous ferons de notre mieux
              pour en tenir compte.
            </p>
          </FadeInBlur>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        className={cn("border-t border-b-0 border-gray-100 py-4")}
        value="item-6"
      >
        <AccordionTrigger
          className={cn(
            "text-xl font-normal hover:no-underline cursor-pointer"
          )}
        >
          Dois-je apporter une invitation papier?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <FadeInBlur delay={0} duration={0.9}>
            <p className="text-lg font-light text-slate-600">
              Non, une confirmation de votre présence suffit.
            </p>
          </FadeInBlur>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        className={cn("border-t border-b-0 border-gray-100 py-4")}
        value="item-7"
      >
        <AccordionTrigger
          className={cn(
            "text-xl font-normal hover:no-underline cursor-pointer"
          )}
        >
          À qui dois-je m&rsquo;adresser si j&rsquo;ai besoin d'aide?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <FadeInBlur delay={0} duration={0.9}>
            <p className="text-lg font-light text-slate-600">
              Veuillez contacter notre organisatrice de mariage à
              l&rsquo;adresse suivante: support@lovestoryevents.com
            </p>
          </FadeInBlur>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
