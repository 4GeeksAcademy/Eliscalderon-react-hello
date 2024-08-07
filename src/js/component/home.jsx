
// import React, { useRef, useState } from "react";

// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";


// function Todolist () {

// 	const [tareas,setTareas] = useState (["Hacer las compras"]);
// 	const nuevaTareaRef = useRef (null);


// //create your first component
// const Home = () => {

// return (

// 	<div className="text-center">
// 			<h1 className="text-center mt-5">Hello Rigo!</h1>
// 			<p>
// 				<img src={rigoImage} />
// 			</p>
// 			<a href="#" className="btn btn-success">
// 				If you see this green button... bootstrap is working...
// 			</a>
// 			<p>
// 				Made by{" "}
// 				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
// 				love!
// 			</p>
// 			</div>

// const agregarTarea =(e)=> { 
// 	if (e.key === "Enter"){
// 		const nuevaTarea = nuevaTareaRef.current.value.trim();
// 		if (nuevaTarea !== ""){
// 			setTareas([...tareas, nuevaTarea]);
// 			nuevaTareaRef.current.value = "";
// 		}
// 	}
// }
// const borrarTarea = (index) => {
// 	const actualizarTareas = [...tareas];
// 	actualizarTareas.splice(index, 1);
// 	setTareas(actualizarTareas);
// }
// return (
// 	<div className="container">
// 		<h1 className="text-center">Mi Lista de Tareas</h1>
// 		<input type="text" ref={nuevaTareaRef} placeholder="Introducir nueva tarea" onKeyDown={agregarTarea}/>
// 		{tareas.length === 0 ? (
// 		<p>No hay tareas, añadir tareas</p>
// 	) : (
// 		<ul>
// 			{tareas.map((tarea,index)=>(
// 						<div className="text-center" key={index}>
// 							<li>{tarea}<button onClick={()=>borrarTarea(index)}><i class="fa-solid fa-trash-can"></i></button></li>
// 						</div>
// 					))}
// 				</ul>
// 			)}
// 				<div>1 tasks</div>
// 			</div>
// 	);
// }
// export default Home;
// export default TodoList;
import React, { useRef, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";

function Todolist() {
  const [tareas, setTareas] = useState(["Hacer las compras"]);
  const nuevaTareaRef = useRef(null);

  const agregarTarea = (e) => {
    if (e.key === "Enter") {
      const nuevaTarea = nuevaTareaRef.current.value.trim();
      if (nuevaTarea !== "") {
        setTareas([...tareas, nuevaTarea]);
        nuevaTareaRef.current.value = "";
      }
    }
  };

  const borrarTarea = (index) => {
    const actualizarTareas = [...tareas];
    actualizarTareas.splice(index, 1);
    setTareas(actualizarTareas);
  };

  const Home = () => {
    return (
      <div className="text-center">
        <h1 className="text-center mt-5">Hello Rigo!</h1>
        <p>
          <img src={rigoImage} alt="Rigo" />
        </p>
        <a href="#" className="btn btn-success">
          If you see this green button... bootstrap is working...
        </a>
        <p>
          Made by{" "}
          <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!
        </p>
      </div>
    );
  };

  return (
    <div className="container">
      <h1 className="text-center">Mi Lista de Tareas</h1>
      <input
        type="text"
        ref={nuevaTareaRef}
        placeholder="Introducir nueva tarea"
        onKeyDown={agregarTarea}
      />
      {tareas.length === 0 ? (
        <p>No hay tareas, añadir tareas</p>
      ) : (
        <ul>
          {tareas.map((tarea, index) => (
            <div className="text-center" key={index}>
              <li>
                {tarea}
                <button onClick={() => borrarTarea(index)}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </li>
            </div>
          ))}
        </ul>
      )}
      <div>{tareas.length} tasks</div>
      <Home />
    </div>
  );
}

export default Todolist;