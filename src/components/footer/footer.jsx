import style from "./footer.module.css";
function Footer() {
  return (
    <footer style={style}>
      {/* <img src="/src/assets/pics/banner.bmp" alt="banner photo" /> */}
      <p>&copy; {new Date().getFullYear()} Villaciraptors Robotics Team</p>
    </footer>
  );
}
export default Footer;
