import React, { useState } from 'react';

// Task Component
const Task = ({ task, toggleComplete, removeTask }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          marginLeft: '8px',
        }}
      >
        {task.text}
      </span>
      <button
        onClick={() => removeTask(task.id)}
        style={{ marginLeft: '8px', color: 'red' }}
      >
        Delete
      </button>
    </div>
  );
};

// Main App Component
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: input, completed: false },
      ]);
      setInput('');
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        style={{ marginRight: '8px' }}
      />
      <button onClick={addTask}>Add Task</button>
      <div style={{ marginTop: '20px' }}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            removeTask={removeTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
