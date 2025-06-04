export async function consulotarUsuarios(){

    //1. URL del servicio que quiero consumir(edpoint)

const URL="http://localhost:8080/Users"

    //2. Consfiguración de la petición 
     // - Que metodo http se va a consumir
     // - Qu cabeceras se necesitan
     // - Se aplica que datos van en el body

const PETICION={
    method:"GET"
}

    //3. Utilizar una promesa (FETCH) para consumir el API

let respuestaAPI=await fetch(URL,PETICION)
let usuariosConsultados=await respuestaAPI.json()
return usuariosConsultados

}

export async function agregarUsuario(datosUsuario){

    const URL="http://localhost:8080/Users"
    const PETICION={
    method:"POST",
    headers:{"content-type":"application/json"},
    body: JSON.stringify(datosUsuario)
   }

   let respuestaAPI=await fetch(URL,PETICION)
   let respuestaFinal=await respuestaAPI.json()
    return respuestaFinal
}