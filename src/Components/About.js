import "./About.css"
import Image1 from "../Images/about1.jpg";
import Image2 from "../logo-circle.png"

const About = () => {

    return (
        <div className="About-Container">
            <img src={Image1} className="About1"/>
            <section className="Description-Container">
                <p className="Description-Header">
                The more you know, 
                <br/>the less you itch (hopefully).
            </p>
            <p className="Description-Body">
                Here at No-itch Kitchen, we aim to be a one-stop-shop 
                that provides people with histamine intolerance <em><strong>information 
                on the histamine compatibility of their favourite ingredients</strong></em>, and <em><strong>recipe recommendations</strong></em>.
                All in the hopes that they may be able to make better decisions on food and finally have a peace of mind when it comes to food.
            </p>
            <img src={Image2} className="Logo"/>
            </section>
            
        </div>
    )
}

export default About;