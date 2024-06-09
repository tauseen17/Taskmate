import { useEffect, useState } from "react";
import "./App.css";
import { DisplayTask } from "./components/DisplayTask";
import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
function App() {
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  const [task, setTask] = useState({});
  return (
    <div className="App">
      <Header />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <DisplayTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
