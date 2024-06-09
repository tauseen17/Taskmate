export const DisplayTask = ({ tasklist, setTasklist, task, setTask }) => {
  const HandleDelete = (id) => {
    const newTasklist = tasklist.filter((todo) => todo.id !== id);
    setTasklist(newTasklist);
  };
  const HandleEdit = (id) => {
    const selectedTask = tasklist.find((todo) => todo.id === id);
    setTask(selectedTask);
  };
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTasklist([])}>
          clear All
        </button>
      </div>
      <ul>
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i
              onClick={() => HandleEdit(todo.id)}
              className="bi bi-pencil-square"
            ></i>
            <i
              onClick={() => HandleDelete(todo.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
