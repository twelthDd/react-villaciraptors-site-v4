import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import style from "./aboutUs.module.css";

function AboutUs() {
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
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        molestiae saepe obcaecati quisquam ratione a laudantium iusto animi, at
        nihil voluptatem. Commodi doloribus illum eaque quas natus cum, eveniet
        ea!
      </p>
      <img src="/src/assets/pics/2022-Team.bmp" alt="" />
      <Footer />
    </>
  );
}
export default AboutUs;
