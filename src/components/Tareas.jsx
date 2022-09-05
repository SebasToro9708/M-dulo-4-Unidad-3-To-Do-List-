const Tareas = ({ tarea, setTarea, eliminarTarea }) => {
  const { titulo, fecha, descripcion, id } = tarea;

  const handleEliminar = () => {
    const respuesta = confirm("¿Desea eliminar está tarea? 🤔");

    if (respuesta) {
      eliminarTarea(id);
    }
  };

  return (
    <div className="bg-white shadow-md px-5 py-10 rounded-lg mt-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Titulo: <span className="font-normal normal-case">{titulo}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Descripción:{" "}
        <span className="font-normal normal-case">{descripcion}</span>
      </p>

      <div>
        <button
          className="mr-8 bg-cyan-600 hover:bg-cyan-800 mt-4 py-2 px-9 rounded-full text-white font-bold"
          type="button"
          onClick={() => setTarea(tarea)}
        >
          Actualizar
        </button>
        <button
          className="bg-red-600 hover:bg-red-800 mt-4 py-2 px-11 rounded-full text-white font-bold"
          type="button"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Tareas;
