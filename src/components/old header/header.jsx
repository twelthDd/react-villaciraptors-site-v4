import style from "./Header.module.css";
function Header() {
  return (
    <div style={style}>
      <header>
        <h1>Welcome to the Villaciraptors Robotics Team</h1>
      </header>

      <nav>
        <a href="http://127.0.0.1:5173/">Home</a>
        <a href="http://127.0.0.1:5173/about-us">About Us</a>
        <a href="http://127.0.0.1:5173/awards">Awards</a>
        <a href="http://127.0.0.1:5173/events">Events</a>
        <a href="http://127.0.0.1:5173/Sponsorship">sponsorship</a>
        <a href="http://127.0.0.1:5173/contact">Contact</a>
      </nav>
    </div>
  );
}

export default Header;
