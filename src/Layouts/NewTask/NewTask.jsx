import { useContext, useRef, useState } from "react";
import { taskContext } from "../../components/Context/Context";
import { v4 as uuidv4 } from 'uuid';
import './NewTask.css';

export const NewTask = () => {

    const context = useContext(taskContext);

    const [titleTask, setTitleTask] = useState('');
    const [descriptionTask, setDescriptionTask] = useState('');

    const txtTitle = useRef('');
    const txtDescription = useRef('');

    const handleTitleTask = (event) => setTitleTask(event.target.value);
    const handleDescriptionTask = (event) => setDescriptionTask(event.target.value);

    const handleCreateTask = (event) => {
        event.preventDefault();  // Prevenir comportamiento predeterminado del formulario

        const newTask = {
            id: uuidv4(),
            title: titleTask,
            description: descriptionTask,
            status: false
        };

        // Actualización correcta de las tareas
        context.setTasks([...context.tasks, newTask]);
        context.setFilteredTasks([...context.tasks, newTask]);

        // Limpiar los campos del formulario
        txtTitle.current.value = '';
        txtDescription.current.value = '';

        // Resetear los valores de los estados
        setTitleTask('');
        setDescriptionTask('');
    };

    return (
        <form className="frm-task">
            <fieldset>
                <label>Titulo de la tarea</label>
                <input
                    ref={txtTitle}
                    onChange={handleTitleTask}
                    id="txt-title"
                    placeholder="Ej: Aseo ambiente"
                    type="text"
                    value={titleTask}
                />
            </fieldset>
            <fieldset>
                <label>Descripcion de la tarea</label>
                <input
                    ref={txtDescription}
                    onChange={handleDescriptionTask}
                    id="txt-description"
                    placeholder="Ej: Realizar aseo del ambiente"
                    maxLength={100}
                    value={descriptionTask}
                />
            </fieldset>
            <button onClick={handleCreateTask} className="btn-new-task">
                Crear nueva Tarea
            </button>
        </form>
    );
};
