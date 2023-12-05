import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import style from "./aboutUs.module.css";

function AboutUs() {
  return (
    <>
      <Header />
      <div className="aboutUs" style={style}>
        <h1 className="opener">About us</h1>
      </div>
      <Footer />
    </>
  );
}
export default AboutUs;
