import style from "./Header.module.css";
function Header() {
  return (
    <div style={style}>
      <header className={style.title}>
        <a href="http://127.0.0.1:5173/">
          <img src="/src/assets/pics/9076-Logo.png" className={style.icon} />
        </a>
        <h2 className={style.name}>
          <a href="http://127.0.0.1:5173/" className={style.name}>
            Villaciraptors 9076
          </a>
        </h2>
        <nav>
          <a href="http://127.0.0.1:5173/">Home</a>
          <a href="http://127.0.0.1:5173/about-us">About Us</a>
          <a href="http://127.0.0.1:5173/awards">Awards</a>
          {/* <a href="http://127.0.0.1:5173/events">Events</a> */}
          <a href="http://127.0.0.1:5173/Sponsorship">Sponsorship</a>
          <a href="http://127.0.0.1:5173/contact">Contact</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
