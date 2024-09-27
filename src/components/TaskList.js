import React from 'react';

function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">To-Do List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available. Please add a task.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Assigned To</th>
              <th>Date</th>
              <th>Priority</th>
              <th>Comments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.assignedTo}</td>
                <td>{task.date}</td>
                <td>{task.priority}</td>
                <td>{task.comments}</td>
                <td>
                  <button className="btn btn-warning btn-sm" onClick={() => onEdit(task)}>Edit</button>
                  <button className="btn btn-danger btn-sm ml-2" onClick={() => onDelete(task.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TaskList;
