"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { FormEvent, useState } from "react";

type ValidationErrors = {
  nom?: string;
  prenom?: string;
  email?: string;
  nombreInvites?: string;
  preMariage?: string;
};

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateForm = (data: { [key: string]: any }): ValidationErrors => {
    const newErrors: ValidationErrors = {};

    // Validation du nom
    if (!data.nom || (data.nom as string).trim().length < 2) {
      newErrors.nom = "Le nom doit contenir au moins 2 caractères";
    }

    // Validation du prénom
    if (!data.prenom || (data.prenom as string).trim().length < 2) {
      newErrors.prenom = "Le prénom doit contenir au moins 2 caractères";
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email as string)) {
      newErrors.email = "Veuillez entrer une adresse email valide";
    }

    // Validation du nombre d'invités
    if (!data.nombreInvites) {
      newErrors.nombreInvites = "Veuillez sélectionner le nombre d'invités";
    }

    // Validation de la réunion pré-mariage
    if (!data.preMariage) {
      newErrors.preMariage = "Veuillez indiquer votre participation";
    }

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    setErrors({});

    // Sauvegarder la référence du formulaire avant les appels async
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Valider le formulaire
    const validationErrors = validateForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      const responseData = await response.json();
      console.log("Response data:", responseData);

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "✓ Votre réservation a bien été enregistrée ! Merci et à bientôt.",
        });
        setErrors({});
        form.reset();
        // Faire défiler vers le haut pour voir le message
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error(responseData.error || "Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error("Erreur complète:", error);
      setSubmitStatus({
        type: "error",
        message: "Une erreur est survenue. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid place-items-center my-20">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row items-center justify-center max-w-[1200px]">
          <div className="h-[400px] md:flex-auto self-stretch overflow-hidden md:h-auto relative">
            <Image
              src="/maries.jpg"
              fill
              alt="Image des mariés dans les prairies"
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-10 flex-1 px-5"
            noValidate
          >
            <p className="font-libre-caslon-text text-[30px] md:text-[32px] leading-10">
              Réservez votre place. <br /> À bientôt!
            </p>

            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg text-center font-medium ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-900 border-2 border-green-300"
                    : "bg-red-100 text-red-900 border-2 border-red-300"
                }`}
                role="alert"
              >
                {submitStatus.message}
              </div>
            )}

            <div className="flex flex-col md:flex-row md:items-start space-y-5 md:space-y-0 md:space-x-5 w-full">
              {/* Nom */}
              <div className="flex-1 flex flex-col space-y-3">
                <label htmlFor="nom" className="font-light">
                  Nom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nom"
                  id="nom"
                  placeholder="Nom"
                  className={`border-b placeholder:font-light pb-2 outline-none transition-colors ${
                    errors.nom
                      ? "border-red-500 focus:border-red-500"
                      : "border-neutral-400 focus:border-black/50"
                  }`}
                  aria-invalid={errors.nom ? "true" : "false"}
                  aria-describedby={errors.nom ? "nom-error" : undefined}
                />
                {errors.nom && (
                  <p id="nom-error" className="text-red-500 text-sm -mt-1">
                    {errors.nom}
                  </p>
                )}
              </div>

              {/* Prénom */}
              <div className="flex-1 flex flex-col space-y-3">
                <label htmlFor="prenom" className="font-light">
                  Prénom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="prenom"
                  id="prenom"
                  placeholder="Prénom"
                  className={`border-b placeholder:font-light pb-2 outline-none transition-colors ${
                    errors.prenom
                      ? "border-red-500 focus:border-red-500"
                      : "border-neutral-400 focus:border-black/50"
                  }`}
                  aria-invalid={errors.prenom ? "true" : "false"}
                  aria-describedby={errors.prenom ? "prenom-error" : undefined}
                />
                {errors.prenom && (
                  <p id="prenom-error" className="text-red-500 text-sm -mt-1">
                    {errors.prenom}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-3">
              <label htmlFor="email" className="font-light">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="nom@exemple.com"
                className={`border-b placeholder:font-light pb-2 outline-none transition-colors ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-neutral-400 focus:border-black/50"
                }`}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm -mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Nombre d'invités */}
            <div className="flex flex-col space-y-3">
              <label htmlFor="nombreInvites" className="font-light">
                Combien d'invités supplémentaires seront présents?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="nombreInvites"
                name="nombreInvites"
                className={`border-b pb-2 outline-none transition-colors bg-transparent ${
                  errors.nombreInvites
                    ? "border-red-500 focus:border-red-500"
                    : "border-neutral-400 focus:border-black/50"
                }`}
                aria-invalid={errors.nombreInvites ? "true" : "false"}
                aria-describedby={
                  errors.nombreInvites ? "nombreInvites-error" : undefined
                }
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              {errors.nombreInvites && (
                <p
                  id="nombreInvites-error"
                  className="text-red-500 text-sm -mt-1"
                >
                  {errors.nombreInvites}
                </p>
              )}
            </div>

            {/* Préférences alimentaires */}
            <div className="flex flex-col space-y-3">
              <label htmlFor="repas" className="font-light">
                Avez-vous des allergies ou des préférences alimentaires dont
                nous devrions être conscients?
              </label>
              <input
                type="text"
                name="repas"
                id="repas"
                placeholder="Ex: végétarien, vegan, sans gluten, etc."
                className="border-b border-neutral-400 placeholder:font-light pb-2 outline-none focus:border-black/50 transition-colors"
              />
            </div>

            {/* Réunion pré-mariage */}
            <fieldset className="flex flex-col space-y-3">
              <legend className="font-light mb-2">
                Pourrez-vous nous rejoindre pour la réunion pré-mariage le 26
                septembre? <span className="text-red-500">*</span>
              </legend>
              <div className="space-y-2">
                <div>
                  <input
                    type="radio"
                    name="preMariage"
                    id="preMariageOui"
                    value="oui"
                    className="mr-2 accent-black"
                    aria-invalid={errors.preMariage ? "true" : "false"}
                    aria-describedby={
                      errors.preMariage ? "preMariage-error" : undefined
                    }
                  />
                  <label htmlFor="preMariageOui" className="cursor-pointer">
                    Oui, compte sur moi.
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="preMariage"
                    id="preMariageNon"
                    value="non"
                    className="mr-2 accent-black"
                    aria-invalid={errors.preMariage ? "true" : "false"}
                    aria-describedby={
                      errors.preMariage ? "preMariage-error" : undefined
                    }
                  />
                  <label htmlFor="preMariageNon" className="cursor-pointer">
                    Non, je participerai uniquement à la célébration principale.
                  </label>
                </div>
              </div>
              {errors.preMariage && (
                <p id="preMariage-error" className="text-red-500 text-sm -mt-1">
                  {errors.preMariage}
                </p>
              )}
            </fieldset>

            {/* Message */}
            <div className="flex flex-col space-y-3">
              <label htmlFor="message" className="font-light">
                Laissez-nous un message ou un souhait pour notre grand jour!
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="J'aimerais vous dire..."
                rows={4}
                className="border-b border-neutral-400 placeholder:font-light pb-2 outline-none focus:border-black/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-neutral-400 w-full p-3 cursor-pointer hover:text-white hover:bg-black duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
