import react from "react"
import reactdom from "react-dom"
function NavBar(props)
{
    return <nav className={props.class}>
        <a href="#">Home</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Contact Me</a>
        </nav>
}
export default NavBar