import style from "./Header.module.css";
function Header() {
  return (
    <div style={style}>
      <header className={style.title}>
        <h2 className={style.name}>Villaciraptors 9076</h2>
        <nav>
          <a href="http://127.0.0.1:5173/">
            <h2 className={style.navButton}>Home</h2>
          </a>
          <a href="http://127.0.0.1:5173/about-us">
            <h2 className={style.navButton}>About Us</h2>
          </a>
          <a href="http://127.0.0.1:5173/awards">
            <h2 className={style.navButton}>Awards</h2>
          </a>
          <a href="http://127.0.0.1:5173/events">
            <h2 className={style.navButton}>Events</h2>
          </a>
          <a href="http://127.0.0.1:5173/Sponsorship">
            <h2 className={style.navButton}>Sponsorship</h2>
          </a>
          <a href="http://127.0.0.1:5173/contact">
            <h2 className={style.navButton}>Contact</h2>
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
