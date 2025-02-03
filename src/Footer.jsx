import { githubUrl } from "./database";
const Footer = ({ email, mobile, githubUrl, intro }) => {
  return (
    <footer>
      <ul>
        <li>
          <a href="">KCH's github</a>
        </li>
        <li>
          <a href="">{githubUrl}</a>
        </li>
        <li>
          <a href="">010 1234 1234</a>
        </li>
      </ul>
      <p>{intro}</p>
    </footer>
  );
};

export default Footer;
