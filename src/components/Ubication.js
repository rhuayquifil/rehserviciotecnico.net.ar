import Image from "react-bootstrap/Image";
import "./Ubication.css";

export const Ubication = () => {
  return (
    <>
      <div className="map-container">
        <div className="image-ubication-container">
          <Image
            src="images/locationBackground.png"
            alt="Ubication"
            className="responsive-image-map"
          />

          <div className="text-location">
            <p>Saavedra e Italia <br /> Viedma</p>
          </div>
        </div>
      </div>
    </>
  );
};
