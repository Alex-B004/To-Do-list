import { useState } from 'react'
//import { useEffect } from 'react'
import type { Task } from './types'
import { useLocalStorage } from './hooks/useLocalStorage';
function App(){

	const [input, setInput] = useState('')
	const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
	
	/*
	const [tasks, setTasks] = useState<Task[]>(() => {
		const saved = localStorage.getItem('tasks');
		let valorInicial
		if(saved){
			valorInicial = JSON.parse(saved);
		}else{
			valorInicial = [];
		}
		return valorInicial;
	})

	useEffect(() => {
  		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])
*/


	function addTask (){
		const inputFree = input.trim();
		if ( inputFree === '') return;
		const newTask: Task = {
			id: Date.now(),
			text: inputFree,
			done: false
		}
		setTasks([newTask, ...tasks])
		setInput('')
	}

	const toggleTask = (id: number) => {
		setTasks(tasks.map( t => 
				t.id === id ? {...t, done: !t.done} : t
			)
		)
	}

	const removeTask = (id: number) => {
		setTasks(
			tasks.filter(task => task.id !== id)
		)
	}

	const contadorPendientes = tasks.filter(t => !t.done).length;
	return (
		<div>
			<h1> Todo List </h1>
			<p>Tareas pendientes: {contadorPendientes}</p>
			
			<br/>
			<div>
				<input
					 type="text"
					 placeholder="Nueva tarea..."
					 value={input}
					 onChange={e => setInput(e.target.value)}
				/>
				<button onClick={addTask}> Agregar Tareita </button>
			</div>
			<div>
				<ul className="lista-tareas">
					{tasks.length === 0 && (
						<li> No hay Tareas aún. </li>
					)}
					{tasks.map(task => (
						<li 
							key={task.id}
							className="linea-tarea"
						>
							 <span 
							 	className={task.done ? 'done' : ''}
							 	onClick={ () => toggleTask(task.id) }
							 	title="Marcar como completada"> 
							 	{task.text} 
							 </span>
							 <button
							 	onClick={ () => removeTask(task.id) }
							  	title="Eliminar Tarea"
							 >
							 	x
							 </button>
						</li>
					))}
				</ul>
			</div>

		</div>
	)
}

export default App;