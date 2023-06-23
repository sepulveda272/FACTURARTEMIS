import getConnection from "../db/database.js";

const getCategorias = async (req, res) => {
    const connection = await getConnection();
    const result = await connection.query("SELECT CategoriaID,CategoriaNombre,Descripcion,Imagen FROM categorias");
    console.log(result);
    res.json(result)
}

export const methodsHTTP = {
    getCategorias
}