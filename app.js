//Declarar Url para GET
const URLGET = "https://rickandmortyapi.com/api/character"

//Agregar Boton con jQuery
$(".contenedor").prepend('<button id="btn1">GET</button>');

//Escuchar evento click y crear iteración 
$('#btn1').click(()=> {
    $.get(URLGET, function (respuesta, estado) {
        if(estado === "success"){
            let misDatos = respuesta;
            for(const dato of misDatos){
                $(".contenedor").prepend(
                    `
                    <div>
                        <h3>${dato.id}</h3>
                        <p>${dato.name}</p>
                    </div>
                    `
                );
            }
        }
    })
})


