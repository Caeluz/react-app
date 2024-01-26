// TaskList.js

import React, { useState } from "react";

interface TaskListProps {
  selectedCategory: string | null;
  tasks: { category: string; task: string }[];
  setTasks: React.Dispatch<
    React.SetStateAction<{ category: string | null; task: string }[]>
  >;
}

interface Task {
  category: string;
  task: string;
}

const TaskList: React.FC<TaskListProps> = ({
  selectedCategory,
  tasks,
  setTasks,
}) => {
  const [newTask, setNewTask] = useState("");


  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { category: selectedCategory, task: newTask }]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (task: Task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  return (
    <div className="task-list">
      <h2>{selectedCategory || "Select a category"}</h2>
      <ul>
        {tasks
          .filter((task) => task.category === selectedCategory)
          .map((task, index) => (
            <li key={index}>
              {task.task}
              <button onClick={() => handleDeleteTask(task)}>Delete</button>
            </li>
          ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskList;
