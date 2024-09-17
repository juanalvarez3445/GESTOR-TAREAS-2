import { Header } from "../../Layouts/Header/Header";
import { Main } from "../../Layouts/Main/Main";
import { ContainerTasks } from '../../Layouts/ContainerTasks/ContainerTasks.jsx';
import { ItemTask } from "../../components/ItemTask/ItemTask.jsx";
import { useContext } from "react"; 
import { taskContext } from "../../components/Context/Context"; 
import { NewTask } from "../../Layouts/NewTask/NewTask.jsx";
import { InfoTasks } from "../../Layouts/InfoTasks/InfoTasks.jsx";
 import {FilterTask} from "../../components/FilterTask/FilterTask.jsx"

export const Home = () => {
    const { filteredTasks } = useContext(taskContext); 

    return (
        <>
            <Header>
                <h1>Gestor de Tareas</h1>
                <NewTask/>
                <InfoTasks/>
                <FilterTask/>
            </Header>
            <Main>
                <ContainerTasks>
                    {filteredTasks.map(task => (
                        <ItemTask 
                            key={task.id} 
                            idTask={task.id} 
                            content={task.description} 
                            titleTask={task.title} 
                        />
                    ))}
                </ContainerTasks> 
            </Main>
        </>
    );
}
