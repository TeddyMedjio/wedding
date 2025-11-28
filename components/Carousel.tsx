import Image from "next/image";

export const Carousel = () => {
  return (
    <div className="carousel-container mt-20">
      <div className="carousel-track">
        {/* <!-- Images originales --> */}
        <div className="carousel-item">
          <Image src="/image1.jpg" width={495} height={360} alt="Noe et Sandrine - Souvenirs de Barcelone" />
        </div>
        <div className="carousel-item">
          <Image src="/image2.jpg" width={495} height={360} alt="Noe et Sandrine - Moments précieux" />
        </div>
        <div className="carousel-item">
          <Image src="/image3.jpg" width={495} height={360} alt="Noe et Sandrine - Notre histoire d'amour" />
        </div>
        <div className="carousel-item">
          <Image src="/image4.jpg" width={495} height={360} alt="Noe et Sandrine - Aventures ensemble" />
        </div>
        <div className="carousel-item">
          <Image src="/image5.jpg" width={495} height={360} alt="Noe et Sandrine - Moments de complicité" />
        </div>

        {/* <!-- Images dupliquées pour l'effet infini --> */}
        <div className="carousel-item">
          <Image src="/image6.jpg" width={495} height={360} alt="Noe et Sandrine - Découvertes à Barcelone" />
        </div>
        <div className="carousel-item">
          <Image src="/image1.jpg" width={495} height={360} alt="Noe et Sandrine - Souvenirs de Barcelone" />
        </div>
        <div className="carousel-item">
          <Image src="/image2.jpg" width={495} height={360} alt="Noe et Sandrine - Moments précieux" />
        </div>
        <div className="carousel-item">
          <Image src="/image3.jpg" width={495} height={360} alt="Noe et Sandrine - Notre histoire d'amour" />
        </div>
        <div className="carousel-item">
          <Image src="/image4.jpg" width={495} height={360} alt="Noe et Sandrine - Aventures ensemble" />
        </div>

        {/* <!-- Images dupliquées pour l'effet infini --> */}
        <div className="carousel-item hidden md:block">
          <Image src="/image6.jpg" width={495} height={360} alt="Noe et Sandrine - Découvertes à Barcelone" />
        </div>
        <div className="carousel-item">
          <Image src="/image1.jpg" width={495} height={360} alt="Noe et Sandrine - Souvenirs de Barcelone" />
        </div>
        <div className="carousel-item">
          <Image src="/image2.jpg" width={495} height={360} alt="Noe et Sandrine - Moments précieux" />
        </div>
        <div className="carousel-item">
          <Image src="/image3.jpg" width={495} height={360} alt="Noe et Sandrine - Notre histoire d'amour" />
        </div>
        <div className="carousel-item">
          <Image src="/image4.jpg" width={495} height={360} alt="Noe et Sandrine - Aventures ensemble" />
        </div>
      </div>
    </div>
  );
};
