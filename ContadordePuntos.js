var tr = {
    punto: 0
};
var tn = {
    punto: 0
};
var handball_tr = document.getElementById('handball_tr');
var resistencia_tr = document.getElementById('resistencia_tr');
var ajedrez_tr = document.getElementById('ajedrez_tr');
var handball_tn = document.getElementById('handball_tn');
var resistencia_tn = document.getElementById('resistencia_tn');
var ajedrez_tn = document.getElementById('ajedrez_tn');
var OutputPuntosTribuRoja = document.getElementById('PuntosTribuRoja');
var OutputPuntosTribuNegra = document.getElementById('PuntosTribuNegra');
var TribuGanadora = document.getElementById('TribuGanadora');
 == "equipo1";
{
    var valor_A_Ingresado_Handball = parseInt(handball_tr.value, 10);
    var valor_A_Ingresado_Resistencia = parseInt(resistencia_tr.value, 10);
    var valor_A_Ingresado_Ajedrez = parseInt(ajedrez_tr.value, 10);
    tr.punto += valor_A_Ingresado_Handball + valor_A_Ingresado_Resistencia + valor_A_Ingresado_Ajedrez;
    OutputPuntosTribuRoja.innerText += tr.punto.toString() + '-';
}
if (tribu == "equipo2") {
    var valor_B_Ingresado_Handball = parseInt(handball_tn.value, 10);
    var valor_B_Ingresado_Resistencia = parseInt(resistencia_tn.value, 10);
    var valor_B_Ingresado_Ajedrez = parseInt(ajedrez_tn.value, 10);
    tn.punto += valor_B_Ingresado_Handball + valor_B_Ingresado_Resistencia + valor_B_Ingresado_Ajedrez;
    OutputPuntosTribuNegra.innerText += tn.punto.toString() + '-';
}
var resultado = '';
if (tribu === "Tribu Roja") {
    alert("Puntaje actual de la Tribu Roja:" + tr.punto);
}
else if (tribu === "Tribu Negra") {
    alert("Puntaje actual de la Tribu Negra:" + tn.punto);
}
