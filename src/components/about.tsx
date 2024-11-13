import "../style/hero.css";
import "../style/about.css";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="header-container" data-aos= "zoom-in-down">
      <div className="header-con">
        {/* left */}
        <div>
          <Image
            src={"/image.jpg"}
            height={200}
            width={200}
            className="header-pic"
            alt="myimage"
          />
          <div className="social"> 
          <Link href={"https://www.linkedin.com/posts/humema-israr-b184342b5_giaic-sir-sir-activity-7247660273153560576-YMKR?utm_source=share&utm_medium=member_android"} >< FaLinkedin className="iconso" /> </Link>
            </div>
        </div>
        {/* right */}
        <div className="hero-right">
          <h1 className="title">About Me</h1>
          <p className="description">
            hey, i'm Humema Israr. I am the student of GIAIC & i hope to secure
            an employement opportunity with a progressive organization, where i
            can utilize my professional skills and knowledge to the maximum at
            value in the growth of the organization.I offer web development services, specializing in dynamic, user-friendly websites using modern technologies like HTML, CSS, TypeScript, and Next.js, covering everything from responsive design to interactive applications. 
          </p>
         
        </div>
      </div>
    </div>
  );
}
export default About;
