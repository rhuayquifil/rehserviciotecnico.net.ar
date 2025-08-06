import Card from "react-bootstrap/Card";
import "./Cards.css";
import Image from "react-bootstrap/Image";

export const Cards = () => {
  return (
    <>
      <div className="cards-title">
        <h2>¿Que necesitas reparar?</h2>
      </div>

      <div className="cards-container">
        <Card className="card">
          <Image
            src="images/phoneCardsHome.png"
            rounded
            className="card-image"
          />
          <Card.Body>
            <Card.Title>Celular</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Image
            src="images/computerCardsHome.png"
            rounded
            className="card-image"
          />
          <Card.Body>
            <Card.Title>PC / Notebook</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Image
            src="images/consoleCardsHome.png"
            rounded
            className="card-image"
          />
          <Card.Body>
            <Card.Title>Consola</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Image
            src="images/printerCardsHome.png"
            rounded
            className="card-image"
          />
          <Card.Body>
            <Card.Title>Impresora</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
 /*
 function Cards() {
  return (
    <div className="cards-container">
      <Card>
        <Card.Img variant="top" src="/images/ejemplo1.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text...
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
  }

export default Cards;  */
