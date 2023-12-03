import style from "./footer.module.css";
function Footer() {
  return (
    <footer style={style}>
      <p>&copy; {new Date().getFullYear()} Villaciraptors Robotics Team</p>
    </footer>
  );
}
export default Footer;
