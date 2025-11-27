import { AccordionDemo } from "./Accordion";
import Container from "./Container";
import FadeInBlur from "./FadeInBlur";

export const Faq = () => {
  return (
    <section id="faq" className="py-30 bg-white grid place-items-center">
      <div className="text-center space-y-4 mb-20">
        <p className="text-xl font-light uppercase">Faq</p>
        <FadeInBlur delay={0.5} duration={0.9}>
          <p className="text-3xl font-libre-caslon-text">
            Tout ce que vous devez savoir
          </p>
        </FadeInBlur>
      </div>
      <Container>
        <AccordionDemo />
      </Container>
    </section>
  );
};
