// Definir el TDA para la colección de números
function NumerosCollection(numerosInput) {
    this.numerosArray = numerosInput.split(",").map(Number);
}

NumerosCollection.prototype.filtrarNumeros = function (filtro) {
    return this.numerosArray.filter(filtro);
};

NumerosCollection.prototype.calcularPromedio = function (filtro) {
    var arrayFiltrado = this.filtrarNumeros(filtro);

    if (arrayFiltrado.length === 0) {
        return 0;
    }

    var suma = arrayFiltrado.reduce((total, num) => total + num, 0);
    return suma / arrayFiltrado.length;
};

// Función para manejar el botón de cálculo
function calcularOperaciones() {
    var numerosInput = document.getElementById("numerosInput").value;

    // Crear una instancia de la colección de números
    var numerosCollection = new NumerosCollection(numerosInput);

    // Definir los filtros para las diferentes operaciones
    var filtroPares = num => num % 2 === 0 && num !== 0;
    var filtroImpares = num => num % 2 !== 0 && num !== 0;
    var filtroPositivos = num => num > 0 && num !== 0;
    var filtroNegativos = num => num < 0 && num !== 0;

    // Calcular los promedios utilizando los métodos del TDA
    var promedioPares = numerosCollection.calcularPromedio(filtroPares);
    var promedioImpares = numerosCollection.calcularPromedio(filtroImpares);
    var promedioPositivos = numerosCollection.calcularPromedio(filtroPositivos);
    var promedioNegativos = numerosCollection.calcularPromedio(filtroNegativos);

    // Actualizar el contenido HTML con los resultados
    document.getElementById("promedioPares").textContent = promedioPares.toFixed(2);
    document.getElementById("promedioImpares").textContent = promedioImpares.toFixed(2);
    document.getElementById("promedioPositivos").textContent = promedioPositivos.toFixed(2);
    document.getElementById("promedioNegativos").textContent = promedioNegativos.toFixed(2);
}
