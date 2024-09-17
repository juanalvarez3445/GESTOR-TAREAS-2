import React, {useContext,useEffect} from "react";
import './InfoTask.css'
import { taskContext
 } from "../../components/Context/Context";

 
 export const InfoTasks = () => {

    const context = useContext(taskContext)

    
    useEffect(()=> {
      
        let pendig = context.tasks.filter(tasks =>tasks.status === false)
        let resolve = context.tasks.filter(tasks =>tasks.status === true)
        
        context.setpendingTasks(pendig.length)
        context.setDoneTasks(resolve.length)
    },[context.tasks])


   return (
     <>
     <h2 className="info-tasks">Usted tiene <span className="task-pendig">{context.pendingTasks}</span> Pendientes Y 
     <hr />
    <span className="task-done">{context.doneTasks}</span> Terminadas</h2>
     <hr />
     </>
   )
 }
 