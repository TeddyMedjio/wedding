import { Bell } from "lucide-react";
import Container from "./Container";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="my-30">
      <Container>
        <h1 className="text-center text-9xl uppercase font-libre-caslon-text">
          Noah & Sabrina
        </h1>
        <div className="flex items-center justify-center my-10">
          <p className=" text-2xl uppercase">Bafoussam</p>
          <hr className="w-32 mx-3" />
          <p className="flex items-center gap-1 text-2xl uppercase">
            <Bell />
            Samedi, 06 Dec.
          </p>
        </div>
      </Container>
      <div className="relative w-full h-[600px]">
        <Image
          src="/church.png"
          fill={true}
          alt="image des maries"
          className="absolute inset-0 m-auto object-cover"
        />
      </div>
    </section>
  );
};
