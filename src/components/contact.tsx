import "../style/contact.css"

function Contact(){
    return(
   
     
        <main className="conmain" data-aos= "zoom-in-down">
            <div className="formcon">
            <h1 className="con1">Contact us</h1>
                <form action="" className="form">
                    <input type="text" placeholder="Enter your Name"/>
                    <input type="email" placeholder="Enter your Email"/>
                    <input className="msg" type="text" placeholder="Message"/>
                </form>
                <button className="btnn">send</button>
            <footer className="end">
            <h3>&copy;2024 My Portfolio All Right Reserved</h3>
            </footer>
            </div>
            </main>
            
    )
}
export default Contact