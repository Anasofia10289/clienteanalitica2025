import{ useState, useEffect } from 'react';
import { consulotarUsuarios } from '../../../services/serviciosUsuarios';
export function Api(){

    const [usuarios, setUsuarios] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(function(){
        consulotarUsuarios().then(function(respuesta){
            console.log(respuesta)
            setUsuarios(respuesta)
            setCargando(false)
    })
},[])

    return(

        <>
            <section className="container">
                <section className="row">
                    <section className="col-12">
                        <h3>Control de aistencias: </h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ipsam placeat eum beatae quae est error, illum libero porro nostrum unde quam ab inventore adipisci ipsa nihil magni commodi recusandae.</p>
                        <hr />
                    </section>
                </section>

                <section className="row justify-content-center">
                    <section className="col-12 col-md-8">
                        <form className="p-4 shadow my-3 border rounded">
                            <input type="text" placeholder="estudiante" className="form-control mb-3" />
                            <input type="text" placeholder="curso" className="form-control mb-3" />
                            <input type="date" placeholder="fecha" className="form-control mb-3" />
                            <button className="btn btn-primary">Enviar</button>
                        </form>
                    </section>
                </section>
            </section>
        </>
    )
}