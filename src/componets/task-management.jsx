import './task-management.css';

const TaskManagement = (props) => {
    const task = props.task
    return (
        <div className='taskManagement'>
            <div className='head'>
                <div id='styleStatus' style={{fontWeight:"500",backgroundColor: task.status === "Pending" ? "orange" : "#30fc03"}}>{task.status}</div>
                <div style={{display:"flex", gap: "10px"}}>
                     <div id="btn"><button style={{border:"2px solid green", color:"green"}} onClick={props.onEdit}>Edit</button></div>
                     <div id="btn"><button style={{border:"2px solid red", color:"red"}} onClick={props.onDelete}>Delete</button></div>
                </div>
            </div>
            <div id='mid'>
                 <div id='title'>{task.title}</div>
                 <p>{task.description}</p>
            </div>
            <div id='botm'>
                 <div id='botmImage'><img src={task.image} alt="" /></div>
                 <div>
                    <h5>{task.name}</h5>
                    <p>{task.email}</p>
                 </div>
            </div>
        </div>
    )
}

export default TaskManagement