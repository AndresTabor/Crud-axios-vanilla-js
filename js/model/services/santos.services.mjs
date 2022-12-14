export class SantosService {
    getAllSantos = async () => {
        try {
            let result = await axios.get("http://localhost:5555/santos"),
            json = await result.data;
            return json;
        } catch (error) {
            console.log(error.err.statusText);
        }
    }

    createSanto = async (newSanto) => {
        const {nombre, constelacion} = newSanto;
        try {
            let result = await axios("http://localhost:5555/santos",
            {
                method: "POST",
                headers: {
                "Content-type": "application/json; charset=utf-8"
                },
                data: JSON.stringify({
                    nombre: nombre,
                    constelacion: constelacion
                })
            }),
            json = await result.data;
            return json;
        } catch (error) {
            console.log(error.err.statusText);
        }
    }

    updateSanto = async (newSanto, idSanto) => {
        const {nombre, constelacion} = newSanto;
        try {
            let result = await axios(`http://localhost:5555/santos/${idSanto}`,
            {
                method: "PUT",
                headers: {
                "Content-type": "application/json; charset=utf-8"
                },
                data: JSON.stringify({
                    nombre: nombre,
                    constelacion: constelacion
                })
            }),
            json = await result.data;
            return json;
        } catch (error) {
            console.log(error);
        }
    }

    deleteSanto = async (idSanto) => {
        try {
            let result = await axios(`http://localhost:5555/santos/${idSanto}`,
            {
                method: "DELETE",
                headers: {
                "Content-type": "application/json; charset=utf-8"
                }
            }),
            json = await result.data;
            return json;
        } catch (error) {
            console.log(error.err.statusText);
        }
    }    
}