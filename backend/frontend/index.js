import { obtainCategories } from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
    mostrarLista()
});

/* LISTAR CATEGORIAS  - CRUD (R) */

async function mostrarLista(){
    const categorias = await obtainCategories();
    const tablaCategoria = document.querySelector("#categories");
    categorias.forEach(element => {
        const {CategoriaID,CategoriaNombre,Descripcion,Imagen} = element
        tablaCategoria.innerHTML+=`
        <tr>
            <td>${CategoriaID}</td>
            <td>${CategoriaNombre}</td>
            <td>${Descripcion}</td>
            <td>${Imagen}</td>
            <th><button class="btn btn-success editar">EDITAR</button></th>
            <th><button class="btn btn-danger delete">ELIMINAR</button></th>
            <th><button class="btn btn-primary datalle">DETALLE</button></th>
          </tr>
        `
    })
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */



/* ELIMINAR CATEGORIA  - CRUD (D) */



//EDITAR CATEGORIA - CRUD (U)


