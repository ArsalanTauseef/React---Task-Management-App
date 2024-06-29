import { useState } from 'react';
import TaskManagement from './componets/task-management';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!name) {
      alert("Name field cannot be empty.");
      return;
    }
    if (!email) {
      alert("Email field cannot be empty.");
      return;
    }
    if (!description) {
      alert("Description field cannot be empty.");
      return;
    }


    if(id){
      const updated = task.map((task)=>{
        return id == task.id?{
          ...task,
          name: name,
          email: email,
          image: image,
          title: title,
          status: status,
          description: description
        }: task;
      })
      setTask(updated)
        
    }else{
      const details = {
        name: name,
        email: email,
        image: image,
        title: title,
        status: status,
        description: description,
        id: Math.random()*100
      };
      const updated = [...task, details];
      setTask(updated);
    }
    setName("");
    setEmail("");
    setImage("");
    setTitle("");
    setStatus("");
    setDescription("");
    setId(""); 
  };

  const handleEdit = (task)=>{
    setName(task.name)
    setTitle(task.title)
    setImage(task.image)
    setEmail(task.email)
    setStatus(task.status)
    setDescription(task.description)
    setId(task.id)
  }
  const handleDelete = (taskToDelete) => {
    const updatedTasks = task.filter(task => task.id !== taskToDelete.id);
    setTask(updatedTasks);
  };
  return (
    <>
      <div className='container'>
      <h3>Task Management</h3>
        <form className='formContainer' onSubmit={handleSubmit}>
          <div className='divForFields'>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='divForFields'>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='divForFields' id='center'>
          <label>Profile Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
          </div>
          <div className='divForFields'>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className='divForFields'>            
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
          </div>
          <div className='divForFields' id='desc'>
          <label>Description</label>
          <textarea rows={100} value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
          </div>
          <div id='bottom'>
          <button style={{ backgroundColor: "rgb(51, 153, 255)", color: "black" }}>{id?"UPDATE":"CREATE"}</button>
          </div>
        </form>
      </div>
      <div className='box'>
        <h3>Tasks</h3>
        <hr />
          {task.map((task, index) => (
            <TaskManagement key={index} task={task} onEdit={()=> {
              handleEdit(task)
          }} onDelete={()=> {
              handleDelete(task)
            }}/>
          ))}
        </div>
    </>
  );
}

export default App;
