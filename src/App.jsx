import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { useContext } from 'react';
import { TaskContext } from './context/TaskContext';


function App() {
  const { tasks } = useContext(TaskContext);
  return (
    <main className='bg-zinc-900 h-screen text-white'>
      <div className='container mx-auto p-10'>
      <TaskForm />
      <TaskList tasks={tasks} />
      </div>
    </main>
  );
}

export default App;
