import react from "react"
import reactdom from "react-dom"
function ProjectCard(props)
{
    const img=require(props.image);
    return <div>
        <img className="pcard" src={props.image}></img>
    </div>
}
export default ProjectCard