import style from "./Header.module.css";
function Header() {
  return (
    <div style={style}>
      <header>
        <h1>Welcome to the Villaciraptors Robotics Team</h1>
      </header>

      <nav>
        <a href="http://127.0.0.1:8000">Home</a>
        <a href="http://127.0.0.1:8000/about">About Us</a>
        <a href="http://127.0.0.1:8000/awards">Awards</a>
        <a href="http://127.0.0.1:8000/events">Events</a>
        <a href="http://127.0.0.1:8000/sponsor">sponsorship</a>
        <a href="http://127.0.0.1:8000/contact">Contact</a>
      </nav>
    </div>
  );
}

export default Header;
