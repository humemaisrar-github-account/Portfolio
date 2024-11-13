 
import "../style/services.css";
import { LiaLaptopCodeSolid } from "react-icons/lia";

function services() {
  return (
    <main className="main">
      <div className="ser-con" data-aos= "zoom-in-down" >
        {/* top */}
        <div className="top">
          <h2 className="title">My Services</h2>
          <p className="para">
            I offer web development services, specializing in creating dynamic,
            user-friendly websites using modern technologies like HTML, CSS,
            TypeScript, and frameworks like Next.js. I am dedicated to
            delivering high-quality, responsive designs and interactive
            applications tailored to client needs. With attention to detail and
            efficient coding, I ensure each project is optimized for performance
            and user experience
          </p>
        </div>
        {/* bottom */}
        <div className="boxes">
          <div className="box" > 
          <LiaLaptopCodeSolid className="icon1" />
          <h3>Web Development</h3>
          <p>Web Design, 
            E-commerce,
          Responsive Design,
          Custom UI/UX Solutions,
          Interactive Interfaces, Creative Design
          </p>
          </div>
        </div>
      </div>
    </main>
  );
}
export default services;
