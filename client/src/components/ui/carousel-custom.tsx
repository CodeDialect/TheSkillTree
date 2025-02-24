import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CustomCarousel = ({ images }: { images: string[] }) => {
  if (!images || images.length === 0) {
    return <p className="text-center text-muted-foreground">No images available</p>;
  }

  return (
    <div className="w-full max-w-full mx-auto">
      <Carousel
        infiniteLoop
        autoPlay
        interval={3000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        className="shadow-lg"
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex justify-center items-center overflow-hidden">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
