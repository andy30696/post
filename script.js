document.addEventListener('DOMContentLoaded', function () {

    const formulario = document.getElementById('form');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const date = document.getElementById('date').value;

        const data = {
            name,
            surname,
            date,
        };

        
    fetch('https://jsonplaceholder.typicode.com/users',{ 
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
    })

    .then (response => response.json())
    .then (data => console.log("Datos enviados",data))
    .catch (error => console.log("Error al obtener los datos",error));

    formulario.reset();

});
})