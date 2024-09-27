import React, { useState, useEffect } from 'react';

function TaskForm({ currentTask, onSave }) {
  const [task, setTask] = useState({
    title: '',
    assignedTo: '',
    date: '',
    priority: 'Low',
    comments: ''
  });

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask);
    }
  }, [currentTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
    setTask({ title: '', assignedTo: '', date: '', priority: 'Low', comments: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h3>{currentTask ? "Edit Task" : "Add Task"}</h3>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter task title"
          required
        />
      </div>
      <div className="form-group">
        <label>Assigned To</label>
        <input
          type="text"
          name="assignedTo"
          value={task.assignedTo}
          onChange={handleChange}
          className="form-control"
          placeholder="Assigned to"
        />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={task.date}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Priority</label>
        <select name="priority" value={task.priority} onChange={handleChange} className="form-control">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="form-group">
        <label>Comments</label>
        <textarea
          name="comments"
          value={task.comments}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter comments"
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
}

export default TaskForm;
