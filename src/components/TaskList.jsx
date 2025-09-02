import TaskCard from "./TaskCard";
function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No Hay Tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
