export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const HandleSubmit = (e) => {
    if (task.id) {
      e.preventDefault();
      const date = new Date();
      const updateTask = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()}  ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTasklist(updateTask);
      setTask({});
    } else {
      e.preventDefault();
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()}  ${date.toLocaleDateString()}`,
      };
      setTasklist([...tasklist, newTask]);
      setTask({});
    }
  };
  return (
    <section className="addTask">
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="Add Task"
          maxLength={25}
          value={task.name || ""}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
