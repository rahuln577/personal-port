import react ,{useState} from "react"
import reactdom from "react-dom"
import NavBar from "./components/NavBar"
import Herosection from "./components/Herosection"
import SkillSection from "./components/SkillSection"
import ProjectCard from "./components/project-card"

function App()
{
    return <div id="main">
     <NavBar class="pc"/>   
    <Herosection/>
    <SkillSection />
    </div>
}
export default App