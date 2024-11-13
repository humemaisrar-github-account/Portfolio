import Link from "next/link";
import "../style/header.css";

export default function Header() {
  return (
    <div className="header">
      {/* {left} */}
      <div>
        <h1 className="logo">My Portfolio </h1>
      </div>
      {/* right */}
      <div className="header-right">
        <ul className="header-li">
          <li>
            <Link className="head-link" href={"/"}>Home</Link>
          </li>
          <li>
            <Link className="head-link" href={"/about"}>About</Link>
          </li>
          {/* <li>
            <Link className="head-link" href={" /"}>Services</Link>
          </li> */}
          <li>
            <Link className="head-link" href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
