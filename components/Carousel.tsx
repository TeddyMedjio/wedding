import Image from "next/image";

export const Carousel = () => {
  return (
    <div className="carousel-container mt-20">
      <div className="carousel-track">
        {/* <!-- Images originales --> */}
        <div className="carousel-item">
          <Image src="/image1.jpg" width={495} height={360} alt="Image 1" />
        </div>
        <div className="carousel-item">
          <Image src="/image2.jpg" width={495} height={360} alt="Image 2" />
        </div>
        <div className="carousel-item">
          <Image src="/image3.jpg" width={495} height={360} alt="Image 3" />
        </div>
        <div className="carousel-item">
          <Image src="/image4.jpg" width={495} height={360} alt="Image 4" />
        </div>
        <div className="carousel-item">
          <Image src="/image5.jpg" width={495} height={360} alt="Image 5" />
        </div>

        {/* <!-- Images dupliquées pour l'effet infini --> */}
        <div className="carousel-item">
          <Image src="/image6.jpg" width={495} height={360} alt="Image 1" />
        </div>
        <div className="carousel-item">
          <Image src="/image1.jpg" width={495} height={360} alt="Image 2" />
        </div>
        <div className="carousel-item">
          <Image src="/image2.jpg" width={495} height={360} alt="Image 3" />
        </div>
        <div className="carousel-item">
          <Image src="/image3.jpg" width={495} height={360} alt="Image 4" />
        </div>
        <div className="carousel-item">
          <Image src="/image4.jpg" width={495} height={360} alt="Image 5" />
        </div>
      </div>
    </div>
  );
};
