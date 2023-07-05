const url = "http://localhost:4000/api/categorias";


export const obtainCategories = async () => {
    try {
        const categorias = await fetch(url);
        const datoCategorias = await categorias.json();
        return datoCategorias;
    } catch (error) {
        console.log(error,"no sirve");
    }
};


export const nuevaCategoria = async (categoria) => {
    try {
        await fetch(url,{
            method: "POST",
            body:JSON.stringify(categoria),
            headers:{'Content-Type':'application/json'}
        });
        window.location.href ="index.html"
    } catch (error) {
        console.log(error,"no sirve");
    }
};


export const deleteCategory = async (id) => {
  try {
        await fetch(`${url}/${id}`,{
            method:'DELETE'
        })
        window.location.href ="index.html"
    } catch (error) {
        console.log(error);
    }
};


/* export const obtenerCategory = async (id) => {
    try {
        await fetch(`${url}/${id}`,{
            method:'POST'
        })
    } catch (error) {
        console.log(error);
    }
}; */




export const editarCategory = async (category) => {
    try {
        await fetch(`${url}/${category.categoriaID}`, {
            method: "PUT",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(datos)
        }).then(response => response.json()).then(updatedDatos => {
            console.log('Datos actualizados:', updatedDatos);
        });
        window.location.href ="index.html"
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
};




