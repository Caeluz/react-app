import React, { useState } from "react";
import Sidebar from "../components/test/Sidebar";
import TaskList from "../components/test/TaskList";

const ToDoList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Test</h1>
      <h1>Test</h1>
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <TaskList
        selectedCategory={selectedCategory}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
};

export default ToDoList;
