import { useState, useEffect } from "react";

const urlBaseTodos = "https://playground.4geeks.com/todo"


//create your first component
const Home = () => {

	const [todos, setTodos] = useState([]) // asegurar que sea las tareas de db
	const [task, setTask] = useState({
		label: "",
		is_done: false
	})


	const getAllTask = async () => {
		try {
			// hacer fetch
			const response = await fetch("https://playground.4geeks.com/todo/users/deimian")
			const data = await response.json()

			if (response.ok) {
				setTodos(data.todos)
			}
			if (response.status == 404) {
				// crear una funcion que crea el usuario --> en breve
				console.log("Debo agregar este usuario")
				createUser()
			}

		} catch (error) {

		}
	}

	function handleChange({ target }) {
		setTask({
			...task,
			[target.name]: target.value
		})
	}

	async function addNewTask(event) {
		try {
			if (event.key == "Enter") {
				// aquí debemos validar que la tarea este llena
				const response = await fetch(`${urlBaseTodos}/todos/deimian`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
						//en caso de mas headers van acá
					},
					body: JSON.stringify(task)
				}) // finaliza el fetch

				if (response.ok) {
					// consultar las tareas nuevamente
					getAllTask()
				}
			}
		} catch (error) {

		}
	}


	async function createUser() {
		try {
			const response = await fetch(`${urlBaseTodos}/users/deimian`, {
				method: "POST"
			})

			console.log(response)

		} catch (error) {

		}
	}



	async function taskDelete(id) {
		try {
			const response = await fetch(`${urlBaseTodos}/todos/${id}`, {
				method: "DELETE"
			})

			if (response.ok) {
				getAllTask()
			}


		} catch (error) {

		}
	}


	useEffect(() => {
		getAllTask()
	}, [])


	return (

		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-md-6">
					<h1 className="text-center">Todo list</h1>

					<input
						type="text"
						name="label"
						placeholder="Ingresa la tarea"
						className="form-control"
						value={task.label}
						onChange={handleChange}
						onKeyDown={addNewTask}
					/>
				</div>

				<ul>
					{
						todos.length <= 0 ?
							<li>Agrega una tarea</li> :
							<>
								{
									todos.map((item) => {
										return (
											<li
												key={item.id}
												onClick={() => taskDelete(item.id)}
											>{item.label}</li>
										)
									})

								}
							</>
					}
				</ul>
			</div>
		</div >
	);
};

export default Home;