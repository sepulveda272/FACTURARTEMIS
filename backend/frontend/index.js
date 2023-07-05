import { obtainCategories,nuevaCategoria,deleteCategory, editarCategory } from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
    mostrarLista()

});
const tablaCategoria = document.querySelector("#categories");
tablaCategoria.addEventListener('click', confirmDelete)



/* LISTAR CATEGORIAS  - CRUD (R) */

async function mostrarLista(){
    const categorias = await obtainCategories();
    categorias.forEach(element => {
        const {CategoriaID,CategoriaNombre,Descripcion,Imagen} = element
        tablaCategoria.innerHTML+=`
        <tr>
            <td>${CategoriaID}</td>
            <td>${CategoriaNombre}</td>
            <td>${Descripcion}</td>
            <td>${Imagen}</td>
            <th><a class="btn btn-success editar" data-categoriaEditar="${CategoriaID}" data-bs-toggle="modal" data-bs-target="#updateCategory" data-bs-whatever="@getbootstrap">EDITAR</a></th>
            <th><a data-categoria="${CategoriaID}"  class="btn btn-danger delete">ELIMINAR</a></th>
          </tr>
        `
    })
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formulario = document.querySelector("#formulario")
formulario.addEventListener('submit', validarCategoria)

function validarCategoria(e){
    e.preventDefault();
    const CategoriaNombre = document.querySelector("#CategoriaNombre").value;
    const Descripcion = document.querySelector("#Descripcion").value;
    const Imagen = document.querySelector("#Imagen").value;

    const categoria = {
        CategoriaNombre,
        Descripcion,
        Imagen
    }
    if(validate(categoria)){
        alert ('todos los campos son obligatirios')
        return 
        
    }

    nuevaCategoria (categoria)

}





/* ELIMINAR CATEGORIA  - CRUD (D) */

function confirmDelete(e){
    if(e.target.classList.contains('delete')){
        const categoriaID = parseInt(e.target.dataset.categoria)
        console.log(categoriaID);
        const confirmar = confirm('¿DESEAS ELIMNAR LA CATEGORIA?')
        if(confirmar){
            deleteCategory(categoriaID)
        }   
    }
}





//EDITAR CATEGORIA - CRUD (U)

const formularioEdit = document.querySelector("#formularioUpdate")
formularioEdit.addEventListener('submit', validarEdit)

function validarEdit(e){
    e.preventDefault();
    const CategoriaID = parseInt(e.target.dataset.categoria)
    const CategoriaNombre = document.querySelector("#CategoriaNombreUpdate").value;
    const Descripcion = document.querySelector("#DescripcionUpdate").value;
    const Imagen = document.querySelector("#ImagenUpdate").value;

    const categoria = {
        CategoriaID,
        CategoriaNombre,
        Descripcion,
        Imagen
    }

    console.log(categoria);
    /* if(validate(categoria)){
        alert ('todos los campos son obligatirios')
        nuevaCategoria (categoria)
        
    }
 */

}

 function validate(objeto){
    return !Object.values(objeto).every( element => element !=='');

} 