const Paciente = () => {
    return (
        <div className="m-5 my-10 bg-white shadow-md px-5 py-10 rounded-lg">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">Hook</span>
            </p>
            
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">José</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {''}
                <span className="font-normal normal-case">10 Diciembre 2022</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: {''}
                <span className="font-normal normal-case">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio odio quaerat quibusdam! Quis facilis ipsum voluptate saepe enim atque voluptatum quam, voluptates repellendus? Itaque repellat consequatur optio et nisi consequuntur.</span>
            </p>

        </div>
    )
}

export default Paciente
