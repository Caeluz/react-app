import React, { useState } from "react";
import Sidebar from "../components/test/Sidebar";
import TaskList from "../components/test/TaskList";

const ToDoList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
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
