import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { getTasks, addTask, deleteTask, updateTask } from './services/TaskService';

function App() {
  const [tasks, setTasks] = useState(getTasks());
  const [currentTask, setCurrentTask] = useState(null);

  const handleSaveTask = (task) => {
    if (task.id) {
      updateTask(task);
    } else {
      addTask(task);
    }
    setTasks(getTasks());
    setCurrentTask(null);
  };

  const handleEditTask = (task) => {
    setCurrentTask(task);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
    setTasks(getTasks());
  };

  return (
    <div className="App">
      <TaskForm currentTask={currentTask} onSave={handleSaveTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} onEdit={handleEditTask} />
    </div>
  );
}

export default App;
