function predecir() {
    const largo_sepalo = parseFloat(document.getElementById('largo_sepalo').value);
    const ancho_sepalo = parseFloat(document.getElementById('ancho_sepalo').value);
    const largo_petalo = parseFloat(document.getElementById('largo_petalo').value);
    const ancho_petalo = parseFloat(document.getElementById('ancho_petalo').value);

    const datos = {
        largo_sepalo: largo_sepalo,
        ancho_sepalo: ancho_sepalo,
        largo_petalo: largo_petalo,
        ancho_petalo: ancho_petalo
    };

    fetch('http://127.0.0.1:5000/predecir', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(resultado => {
        document.getElementById('resultado').innerHTML = `Predicción: ${resultado.prediccion}`;
    })
    .catch(error => console.error('Error:', error));
}