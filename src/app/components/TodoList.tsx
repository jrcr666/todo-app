'use client';
// Vendor
import { FC, useState } from 'react';

type Task = {
  id: number;
  text: string;
};

const TodoList: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      const newTask: Task = {
        id: Date.now(),
        text: newTaskText,
      };
      setTasks((currentTasks) => [...currentTasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TodoList };
