import { useEffect } from "react";
import Tareas from "./Tareas";

const ListaTareas = ({ tareas, setTarea, eliminarTarea }) => {
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">
      {tareas && tareas.length ? (
        <>
          <h2 className="font-black text-3xl text-center mb-10">
            Mis Tareas Pendientes 🤣
          </h2>

          {tareas.map((tarea) => {
            return (
              <Tareas
                key={tarea.id}
                tarea={tarea}
                setTarea={setTarea}
                eliminarTarea={eliminarTarea}
              />
              //<h1>{tarea.titulo}</h1> puedo llamar cualquiera de las variables
            );
          })}
        </>
      ) : (
        <h2 className="font-black text-3xl text-center mb-10">
          No hay tareas pendientes 😆
        </h2>
      )}
    </div>
  );
};

export default ListaTareas;
