import { useContext } from "react";
import './FilterTasks.css';
import { taskContext } from "../../components/Context/Context"; 

export const FilterTask = () => {
  const context = useContext(taskContext);

  const handleFilters = (event) => {
    let currentOption = event.target.value.toLowerCase(); // Convertir a minúsculas
    console.log(currentOption);
    if (currentOption === 'pendientes'){
      context.setFilteredTasks(context.tasks.filter(task => !task.status));
    } else if (currentOption === 'realizadas'){
      context.setFilteredTasks(context.tasks.filter(task => task.status));
    } else {
      context.setFilteredTasks(context.tasks);
    }
  };

  return (
    <div className="container-filters">
      <label>Filtrar por </label>
      <select onChange={handleFilters}>
        <option value="todas" className="opt opt1">Todas</option>
        <option value="pendientes" className="opt opt2">Pendientes</option>
        <option value="realizadas" className="opt opt3">Realizadas</option>
      </select>
    </div>
  );
};


