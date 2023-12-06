import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import style from "./Home.module.css";
function Home() {
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

      <div>
        <h1 className={style.title}>Villaciraptors 90676</h1>
      </div>
      <Footer />
    </>
  );
}

export default Home;
