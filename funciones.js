function predecir() {
    const largo_sepalo = parseFloat(document.getElementById('largo_sepalo').value);
    const ancho_sepalo = parseFloat(document.getElementById('ancho_sepalo').value);
    const largo_petalo = parseFloat(document.getElementById('largo_petalo').value);
    const ancho_petalo = parseFloat(document.getElementById('ancho_petalo').value);

    const limites = {
        largo_sepalo: { min: 4.3, max: 7.9 },
        ancho_sepalo: { min: 2.0, max: 4.4 },
        largo_petalo: { min: 1.0, max: 6.9 },
        ancho_petalo: { min: 0.1, max: 2.5 }
    };

    if (largo_sepalo < limites.largo_sepalo.min || largo_sepalo > limites.largo_sepalo.max) {
        alert("El largo del sépalo debe estar entre " + limites.largo_sepalo.min + " y " + limites.largo_sepalo.max);
        return;
    }
    if (ancho_sepalo < limites.ancho_sepalo.min || ancho_sepalo > limites.ancho_sepalo.max) {
        alert("El ancho del sépalo debe estar entre " + limites.ancho_sepalo.min + " y " + limites.ancho_sepalo.max);
        return;
    }
    if (largo_petalo < limites.largo_petalo.min || largo_petalo > limites.largo_petalo.max) {
        alert("El largo del pétalo debe estar entre " + limites.largo_petalo.min + " y " + limites.largo_petalo.max);
        return;
    }
    if (ancho_petalo < limites.ancho_petalo.min || ancho_petalo > limites.ancho_petalo.max) {
        alert("El ancho del pétalo debe estar entre " + limites.ancho_petalo.min + " y " + limites.ancho_petalo.max);
        return;
    }

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
