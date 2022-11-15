import {useState, useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

function TaskForm() {

    const [title, setTitle] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(title,descripcion)
        createTask({
            title,
            descripcion
        })
        setTitle('')
        setDescripcion('')
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-purple-400 p-10 mb-4">
                <h1 className="text-2xl font-bold text-white mb-3">Crear tarea</h1>
                <input className="bg-slate-200 p-3 w-full mb-2"
                type="text" placeholder="Escribe la tarea"
                onChange={function(e){ setTitle(e.target.value)}}
                value={title}
                autoFocus/>
                <textarea className="bg-slate-200 p-3 w-full mb-2"
                placeholder="Escribe la descripcion de la tarea"
                onChange={(e)=> setDescripcion(e.target.value)}
                value={descripcion}/>
                <button className="bg-indigo-600 px-3 py-1 text-white">Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm
