import Carousel from "react-bootstrap/Carousel";

function ImageCarousel({ text, src  }) {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        backgroundColor: "#777",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
      }}
    >
      {
        <img
          src={src}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      }

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          backgroundColor: "rgba(0, 0, 0, 0.3)", // opcional: oscurece la imagen para mayor contraste
        }}
      >
        {text}
      </div>
    </div>
  );
}

export const CarouselSlide = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <ImageCarousel
          text="Diagnostico Gratuito"
          src="images\slideCotizadorOnline.png"
        />
        <Carousel.Caption>
          <h3>Obten tu presupuesto al instante.</h3>
          <p>Es simple y gratuito. Click aqui.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

/*
<Carousel.Item>
        <ImageCarousel
          text="Cotizador Online"
          src="images\slideCotizadorOnline.png"
        />
        <Carousel.Caption>
          <h3>Obten tu presupuesto al instante.</h3>
          <p>Es simple y gratuito. Click aqui.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ImageCarousel text="" src="images\slideWhatsapp.png" />
        <Carousel.Caption>
          <h3>Nuestro Whatsapp</h3>
          <p>Haz click o escanea el QR.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ImageCarousel
          text="Nuestra Ubicacion"
          src="images\slideUbicacion.png"
        />
        <Carousel.Caption>
          <h3>Saavedra e Italia, Viedma.</h3>
          <p>Haz click para ir a Google Maps.</p>
        </Carousel.Caption>
      </Carousel.Item>
*/
