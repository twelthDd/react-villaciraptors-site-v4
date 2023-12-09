import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import style from "./Sponsorship.module.css";

function Sponsorship() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <link
          rel="shortcut icon"
          href="/src/assets/pics/9076-Logo.png"
          type="image/x-icon"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Villaciraptors 9076</title>
      </head>
      <Header />
      <h1 className={style.title}>Sponsorship</h1>
      <div>
        <h2 className={style.subTitle}>How can you help?</h2>
        <p>
          Developing exceptional robots entails substantial costs, and it is
          only through the support of generous sponsors like you that we can
          make this possible. Should you choose to make a financial
          contribution, your company will have the option of receiving either a
          tax receipt or the benefits and recognition outlined in our
          sponsorship package.
        </p>
      </div>
      <div>
        <h2 className={style.subTitle}> Sponsorship Tiers</h2>
        <p>add phots of sponsorship tiers and add styling</p>
      </div>
      <div>
        <h2 className={style.subTitle}>Supplies and equipment donations</h2>
        <p>
          Our build team relies on a variety of expensive supplies and equipment
          to construct a new robot each year. If material donations align more
          closely with your company, we warmly welcome them. By opting for this
          option, your company will be entitled to receive full recognition and
          benefits corresponding to our sponsorship levels, determined by the
          total value of the donated goods or supplies.
        </p>
      </div>
      <div>
        <h2 className={style.subTitle}>Informational Package</h2>
        <center>
          <iframe
            className={style.pdf}
            src="/src/assets/pdfs/(NEW) EN - Team 9076 Sponsorship Packet.pdf"
            width="80%"
            height="800px"
            overflow="hidden"
          />
        </center>
        <a href="https://drive.google.com/file/d/1Ng00n6wS9dJtp1tB9FR0pPVAxquJr7qQ/view">
          <button className={style.button}>View PDF</button>
        </a>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}
export default Sponsorship;
