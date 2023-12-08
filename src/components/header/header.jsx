import style from "./Header.module.css";
function Header() {
  return (
    <div style={style}>
      <header className={style.title}>
        <h2>Villaciraptors 9076</h2>
        <nav>
          <a href="http://127.0.0.1:5173/">Home</a>
          <a href="http://127.0.0.1:5173/about-us">About Us</a>
          <a href="http://127.0.0.1:5173/awards">Awards</a>
          <a href="http://127.0.0.1:5173/events">Events</a>
          <a href="http://127.0.0.1:5173/Sponsorship">sponsorship</a>
          <a href="http://127.0.0.1:5173/contact">Contact</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
