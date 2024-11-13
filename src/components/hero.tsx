import "../style/hero.css";
import Image from "next/image";

function Hero() {
  return (
    <div className="header-container">
      <div className="header-con" data-aos= "zoom-in-up">
        {/* left */}
        <div>
          <Image src={"/images.jpg"}
           height={200} 
           width={200}
           className="header-pic"
           alt="myimage" data-aos= "zoom-in-down"/>
        </div>
        {/* right */}
        <div className="hero-right">
          <h1 className="title">I'm Humema Israr
             Web Developer</h1>
          <p className="description">
            hey, i'm Humema Israr. I am the student of GIAIC & i hope to secure an
            employement opportunity with a progressive organization, where i can
            utilize my professional skills and knowledge to the maximum at value
            in the growth of the organization
          </p>
          <button className="btn" data-aos= "zoom-in-up">Hire Me</button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
