let tasks = [];  // Start with an empty array

export const getTasks = () => {
  return [...tasks];  
};

export const addTask = (task) => {
  task.id = tasks.length + 1;  
  tasks.push(task);           
};

export const deleteTask = (id) => {
  tasks = tasks.filter(task => task.id !== id); 
};

export const updateTask = (task) => {
  tasks = tasks.map(t => (t.id === task.id ? task : t));  
};
