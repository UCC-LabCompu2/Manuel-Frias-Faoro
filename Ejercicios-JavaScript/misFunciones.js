/**
 * Conversor de unidades: "metros, pulgadas, yardas y pies"
 * @param{string} id - El id de los inputs
 * @param{number} valor - El valor de los inputs
 * 
 */
function conversor(id, valor){
    if(isNaN(valor)){
        alert("se ingreso un valor invalido");
        document.unidades.unid_metro.value ="";
        document.unidades.unid_pulgada.value = "";
        document.unidades.unid_pie.value = "";
        document.unidades.unid_yarda.value = "";
    }
    else if(id =="metro"){
        document.unidades.unid_pulgada.value = 39.3701*valor;
        document.unidades.unid_pie.value = 3.28*valor;
        document.unidades.unid_yarda.value = 1.0931*valor;
    }
    else if(id == "pulgada"){
        document.unidades.unid_metro.value = 0.0254*valor;
        document.unidades.unid_pie.value = 0.0833*valor;
        document.unidades.unid_yarda.value = 0.0277*valor;
    }
    else if(id == "pie"){
        document.unidades.unid_metro.value = 0.3048*valor;
        document.unidades.unid_pulgada.value = 12*valor;
        document.unidades.unid_yarda.value = 0.3333*valor;
    }
    else if(id == "yarda"){
        document.unidades.unid_metro.value = 0.9144*valor;
        document.unidades.unid_pulgada.value = 36*valor;
        document.unidades.unid_pie.value = 3*valor;
    }
}