import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';



export const taskContext = createContext();

const tsk = [
    { id: uuidv4(), title: 'Tarea de ejemplo1', description: 'Descripcion pendiente1', status: false },
    { id: uuidv4(), title: 'Tarea de ejemplo2', description: 'Descripcion pendiente2', status: true },
    { id: uuidv4(), title: 'Tarea de ejemplo3', description: 'Descripcion pendiente3', status: false },
    { id: uuidv4(), title: 'Tarea de ejemplo4', description: 'Descripcion pendiente4', status: true }
];


export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState(tsk)
    const [filteredTasks, setFilteredTasks] = useState(tsk)
    const [pendingTasks, setpendingTasks] = useState('0')
    const [doneTasks, setDoneTasks] = useState('0');

    const updateTaskStatus = (taskid, newStatus) =>{
        setTasks(preTasks =>
            preTasks.map(task => task.id === taskid ? { ...task, status: newStatus} : task
        )
     );
}

    return (
        <taskContext.Provider value={{
            tasks,
            setTasks,
            pendingTasks,
            setpendingTasks,
            doneTasks,
            setDoneTasks,
            filteredTasks,
            setFilteredTasks,
            updateTaskStatus
        }}>
            {children}
        </taskContext.Provider>
    )
}
