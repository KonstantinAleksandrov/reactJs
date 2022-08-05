import '../projectList/style.scss'
const ProjectList = (props) => {

    return (
        <div className='container'>
            {props.projects.map((item) => {
                return (
                    <div className="item" >
                        <img src={item.img} className='img' alt="123" />
                    </div>
                )
            })}
        </div>
    )
}
export default ProjectList;