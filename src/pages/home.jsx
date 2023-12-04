import Header from "../components/header/header";
import Footer from "../components/footer/footer";
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
      <div className="container">
        <div className="section">
          <h2>About Us</h2>
          <p>
            Welcome to the Villaciraptors Robotics Team! We are a dedicated
            group of high school students passionate about robotics and
            innovation. Our team is committed to fostering STEAM education and
            participating in exciting robotics competitions.
          </p>
        </div>

        <div className="section">
          <h2>Latest Projects</h2>
          <p>
            Explore our recent projects and see the incredible things we've been
            working on.
          </p>
        </div>

        <div className="section">
          <h2>Upcoming Events</h2>
          <p>
            Stay tuned for information on our upcoming events and competitions.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
