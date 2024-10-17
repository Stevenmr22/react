import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const TaxiRequestForm = () => {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const [empleados, setEmpleados] = useState([]);
    const [tipoServicios] = useState(['Regular', 'VIP', 'Urgente']); // Ejemplo de tipos de servicio

    useEffect(() => {
        const fetchEmpleados = async () => {
            const response = await fetch('/api/empleados'); // Cambia esto por tu endpoint
            const data = await response.json();
            setEmpleados(data);
        };

        fetchEmpleados();
    }, []);

    const buscarEmpleadoPorId = (id) => {
        const empleado = empleados.find(emp => emp.f_id_empleado === id);
        return empleado ? `${empleado.f_nombre} ${empleado.f_apellido}` : '';
    };

    const handleSolicitanteIdChange = (e) => {
        const id = e.target.value;
        setValue('solicitanteNombre', buscarEmpleadoPorId(id));
    };

    const handleFirmaAutorizadaIdChange = (e) => {
        const id = e.target.value;
        setValue('firmaAutorizadaNombre', buscarEmpleadoPorId(id));
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    const removePassenger = (index) => {
        setValue('pasajeros', watch('pasajeros', []).filter((_, i) => i !== index));
    };

    const addPassenger = () => {
        setValue('pasajeros', [...watch('pasajeros', []), { f_nombre: '', f_apellido: '' }]);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
            <h2 className="text-2xl font-semibold mb-6">Solicitud de Taxi</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                    <label className="block text-gray-700">Fecha de Creación:</label>
                    <input type="date" {...register('fechaCreacion', { required: true })} className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                    {errors.fechaCreacion && <span className="text-red-500">Este campo es requerido</span>}
                </div>
                <div>
                    <label className="block text-gray-700">Fecha de Registro:</label>
                    <input type="date" {...register('fechaRegistro', { required: true })} className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                    {errors.fechaRegistro && <span className="text-red-500">Este campo es requerido</span>}
                </div>
                <div>
                    <label className="block text-gray-700">Ruta:</label>
                    <input type="text" {...register('ruta', { required: true })} className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                    {errors.ruta && <span className="text-red-500">Este campo es requerido</span>}
                </div>
                <div>
                    <label className="block text-gray-700">Tipo de Servicio:</label>
                    <select {...register('tipoServicio', { required: true })} className="mt-1 block w-full p-2 border border-gray-300 rounded">
                        <option value="">Seleccione un tipo</option>
                        {tipoServicios.map((tipo, index) => (
                            <option key={index} value={tipo}>{tipo}</option>
                        ))}
                    </select>
                    {errors.tipoServicio && <span className="text-red-500">Este campo es requerido</span>}
                </div>
                <div>
                    <label className="block text-gray-700">Unidad:</label>
                    <input type="text" {...register('unidad', { required: true })} className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                    {errors.unidad && <span className="text-red-500">Este campo es requerido</span>}
                </div>
                <div>
                    <label className="block text-gray-700">Solicitante ID:</label>
                    <input type="text" {...register('solicitanteId', { required: true, onChange: handleSolicitanteIdChange })} className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                    {errors.solicitanteId && <span className="text-red-500">Este campo es requerido</span>}
                    <p className="mt-1 text-gray-600">{watch('solicitanteNombre')}</p>
                </div>
                <div>
                    <label className="block text-gray-700">Total de Personas:</label>
                    <input type="number" {...register('totalPersonas', { required: true, min: 1 })} className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                    {errors.totalPersonas && <span className="text-red-500">Debe ser mayor que 0</span>}
                </div>
                <div>
                    <label className="block text-gray-700">Hora de Inicio:</label>
                    <input type="time" {...register('horaInicio', { required: true })} className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                    {errors.horaInicio && <span className="text-red-500">Este campo es requerido</span>}
                </div>
                <div>
                    <label className="block text-gray-700">Hora de Término:</label>
                    <input type="time" {...register('horaTermina', { required: true })} className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                    {errors.horaTermina && <span className="text-red-500">Este campo es requerido</span>}
                </div>
                <div>
                    <label className="block text-gray-700">Hora de Llegada:</label>
                    <input type="time" {...register('horaLlegada')} className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                    <label className="block text-gray-700">Total:</label>
                    <input type="number" step="0.01" {...register('total', { required: true, min: 0 })} className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                    {errors.total && <span className="text-red-500">Debe ser mayor o igual a 0</span>}
                </div>
                <div>
                    <label className="block text-gray-700">Firma del Taxista:</label>
                    <input type="text" {...register('firmaTaxista')} className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                    <label className="block text-gray-700">Firma Autorizada ID:</label>
                    <input type="text" {...register('firmaAutorizadaId', { required: true, onChange: handleFirmaAutorizadaIdChange })} className="mt-1 block w-full p-2 border border-gray-300 rounded" />
                    {errors.firmaAutorizadaId && <span className="text-red-500">Este campo es requerido</span>}
                    <p className="mt-1 text-gray-600">{watch('firmaAutorizadaNombre')}</p>
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Pasajeros:</label>
                {watch('pasajeros', []).map((pasajero, index) => (
                    <div key={index} className="flex mb-2">
                        <input
                            type="text"
                            {...register(`pasajeros[${index}].f_nombre`, { required: true })}
                            placeholder="Nombre del pasajero"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded mr-2"
                        />
                        <input
                            type="text"
                            {...register(`pasajeros[${index}].f_apellido`, { required: true })}
                            placeholder="Apellido del pasajero"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                        <button
                            type="button"
                            onClick={() => removePassenger(index)}
                            className="ml-2 bg-red-500 text-white p-2 rounded hover:bg-red-700"
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addPassenger}
                    className="mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition-colors"
                >
                    Agregar Pasajero
                </button>
            </div>

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition-colors"
            >
                Submit
            </button>
        </form>
    );
};

export default TaxiRequestForm;