export class SantosService {
    getAllSantos = async () => {
        alert("hola")
        try {
            let result = await axios.get("http://localhost:5555/santos"),
            json = await result.data;
            return json;
        } catch (error) {
            console.log(error.err.statusText);
        }
    }
    
}