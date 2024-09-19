import { useState } from "react";
import './task.css'

const Task = () => {
    const [input , setInput] = useState({
        title: '',
        description: '',
        dueTime: '',
        dueDate: '',
        priority: '',
        taskStatus: false,
        taskCategory: '',
    })

    const [submit , setSubmit] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmit((prev) => [...prev , input])

        setInput({
            title: '',
            description: '',
            dueTime: '',
            dueDate: '',
            taskStatus: false,
            taskCategory: '',
        })
    } 

    const handleChange = (event) => {
        const { name, value , type, checked} = event.target;
        setInput((prevFormData) => ({
          ...prevFormData,
          [name]: type === 'checked'? checked: value
        }));
    } 
    return (
        <div className="task-container">
            <form className="task-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    value={input.title} 
                    onChange={handleChange} 
                    placeholder="Title" 
                    className="form-input"
                />
                <textarea 
                    name="description" 
                    value={input.description} 
                    onChange={handleChange} 
                    placeholder="Description" 
                    className="form-textarea"
                ></textarea>
                <input 
                    type="time" 
                    name="dueTime" 
                    value={input.dueTime} 
                    onChange={handleChange} 
                    className="form-input"
                />
                <input 
                    type="date" 
                    name="dueDate" 
                    value={input.dueDate} 
                    onChange={handleChange} 
                    className="form-input"
                />
                <select 
                    name="priority" 
                    value={input.priority} 
                    onChange={handleChange} 
                    className="form-select"
                >
                    <option value="">Select Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <div className="checkbox-wrapper">
                    <input 
                        type="checkbox" 
                        name="taskStatus" 
                        checked={input.taskStatus} 
                        onChange={handleChange} 
                        className="form-checkbox"
                    />
                    <label htmlFor="taskStatus">Task Status</label>
                </div>
                <button type="submit" className="form-button">Add Task</button>
            </form>

            <div className="task-list">
                <h3>Task List</h3>
                {submit.map((task, idx) => (
                    <div className="task-card" key={idx}>
                        <p><strong>Title:</strong> {task.title}</p>
                        <p><strong>Description:</strong> {task.description}</p>
                        <p><strong>Due Time:</strong> {task.dueTime}</p>
                        <p><strong>Due Date:</strong> {task.dueDate}</p>
                        <p><strong>Priority:</strong> {task.priority}</p>
                        <p><strong>Task Status:</strong> {task.taskStatus ? 'Completed' : 'Pending'}</p>
                    </div>
                ))}
            </div>
        </div>
    )
} 


export default Task;