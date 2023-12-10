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

      <div className={style.titleDiv}>
        <h2 className={style.title}>Welcome to</h2>
        <h1 className={style.title}>Villaciraptors 90676</h1>
        <p>
          Team 9076 Villaciraptors, is a Montreal-based high school robotics
          team representing Villa Maria High School. The team actively engages
          in multiple robotics competitions, including FIRST Robotics
          Competition and BetaBots.
        </p>
        <a href="http://127.0.0.1:5173/about-us">
          <button className={style.button}>Learn more</button>
        </a>
      </div>
      <br />
      <div>
        <h2 className={style.subTitle}>Our Story</h2>
        <p className={style.ourStoryP}>
          Villaciraptors 9076, a Montreal-based First Robotics team, embarked on
          its rookie journey just last year. Our humble beginnings featured a
          handful of enthusiastic students and mentors. Over time, we've
          transformed, growing to a dedicated team of 40 members spanning grades
          7 to 11. Each year, we eagerly embrace the FIRST Robotics Competition,
          a global contest designed for high school students. Through our
          experiences and challenges, we continue to evolve and learn, striving
          for excellence.
        </p>
        <img src="src/assets/pics/2022-Team.bmp" alt="" />
      </div>
      <Footer />
    </>
  );
}

export default Home;
