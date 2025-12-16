import { useState, useEffect } from "react";
import styles from "./app.module.css";
import WorksTodo from "./components/WorksTodo";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [newWorks, setNewworks] = useState("");
  const [worksList, setWorksList] = useState([]);
  const [status, setStatus] = useState(["active", "done", "pending", "all"]);
  const [filteredWorksList, setFilteredWorksList] = useState([]);
  const [error, setError] = useState(""); 

  useEffect(() => {
    const savedTasks = localStorage.getItem("worksList");
    if (savedTasks) {
      setWorksList(JSON.parse(savedTasks));
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem("worksList", JSON.stringify(worksList));
  }, [worksList]);

  const addWorklistHandler = () => {
    if (newWorks.trim() === "") {
      setError("لطفاً کار جدید را وارد کنید"); 
      return;
    }

    setWorksList([
      ...worksList,
      { id: Date.now(), text: newWorks, checked: false, status: "pending" },
    ]);

    setNewworks("");
    setError("");
  };

  const changeStatus = (id, newStatus) => {
    setWorksList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>لیست کارهای من</h3>
      </div>

      <div className={styles.addworks}>
        <input
          type="text"
          placeholder="کار جدید رو وارد کنید"
          value={newWorks}
          onChange={(e) => setNewworks(e.target.value)}
        />
        <button onClick={addWorklistHandler}>+</button>
      </div>


      {error && <div className={styles.errorMsg}>{error}</div>}

      <WorksTodo
        worksList={worksList}
        setWorksList={setWorksList}
        status={status}
        setStatus={setStatus}
        changeStatus={changeStatus}
      />

      <FilterButtons
        setFilteredWorksList={setFilteredWorksList}
        setStatus={setStatus}
        worksList={worksList}
      />
    </div>
  );
}

export default App;
