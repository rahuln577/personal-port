import react ,{useState} from "react"
import reactdom from "react-dom"
import Typewriter from 'typewriter-effect'
function Herosection()
{
    return <div id="herosection">
        <div>
    <p id="wel">Welcome to my portfolio</p>
    <h1>Hello I'm Rahul,</h1>
    <h1 id="type">
    <Typewriter
    options={{loop:true,}}
    onInit={(typewriter)=> {typewriter.typeString("MERN Developer").pauseFor(1000).deleteAll().typeString("C++ Coder").start();
}}/></h1>
    <p id="helper">I am a full stack web developer with expertise in MERN stack.
        I have also solved a good amount of dsa problems on various platforms . I am a smart worker who would like to put my best in the work I am given . To know more about me ,click the below link.
    </p>
    <a id="resume" href="https://drive.google.com/file/d/1jJKrkzuKMFpVXLyEqAYlnnXH6MATZGD_/view">Download CV</a></div>
    <img src={require("./../images/dev.png")}></img>
    </div>
}
export default Herosection