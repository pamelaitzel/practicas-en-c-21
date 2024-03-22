document.addEventListener("DOMContentLoaded",()=>{
    const valorDeseadoInput = document.getElementById("valor")
    const unidadesSelect= document.getElementById("unidades")
    const resultado = document.getElementById("resultado")
    const formulario = document.getElementById("unidadesDeMedida")
    formulario.addEventListener("submit",(e)=>{
        e.preventDefault()
        var valor = parseFloat(valorDeseadoInput.value);
        var unidades =unidadesSelect.value;
        var respuesta ="";
    
    
        switch(unidades){
            case"milimetros":
             respuesta=valor/1000;
             break;
            case"metros":
             respuesta=valor/100;
             break;
            case"kilometros":
             respuesta=valor/0.001;
             break;
            case"pulgadas":
             respuesta=valor/39.3701;
             break;
            case"pies":
             respuesta=valor/3.28084;
             break;
            case"yardas":
             respuesta=valor/1.09361;
             break;
            default:
                alert("Operacion no valida");
    
        }
    
    
    resultado.textContent= "Resultados = " + respuesta;
    
    })

})