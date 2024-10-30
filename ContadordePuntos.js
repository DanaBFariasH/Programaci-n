var equipo1 = {
    punto: 0
};
var equipo2 = {
    punto: 0
};
var handball_tr = document.getElementById('handball_Tr');
var resistencia_tr = document.getElementById('resistencia_Tr');
var ajedrez_tr = document.getElementById('ajedrez_tr');
var handball_tn = document.getElementById('handball_TN ');
var resistencia_tn = document.getElementById('esistencia_TN');
var ajedrez_tn = document.getElementById('ajedrez_TN ');
var Puntosequipo1 = document.getElementById('PuntosTribuRoja');
var PuntosTribuNegra = document.getElementById('PuntosTribuNegra');
var TribuGanadora = document.getElementById('TribuGanadora');
function AgregarPuntos(tribu) {
    if (tribu == "equipo1") {
        var valor_A_Ingresado_Handball = parseInt(handball_tr.value, 10);
        var valor_A_Ingresado_Resistencia = parseInt(resistencia_tr.value, 10);
        var valor_A_Ingresado_Ajedrez = parseInt(ajedrez_tr.value, 10);
        equipo1.punto += valor_A_Ingresado_Handball + valor_A_Ingresado_Resistencia + valor_A_Ingresado_Ajedrez;
        Puntosequipo1.innerText += equipo1.punto.toString() + '-';
    }
    if (tribu == "equipo2") {
        var valor_B_Ingresado_Handball = parseInt(handball_tn.value, 10);
        var valor_B_Ingresado_Resistencia = parseInt(resistencia_tn.value, 10);
        var valor_B_Ingresado_Ajedrez = parseInt(ajedrez_tn.value, 10);
        equipo2.punto += valor_B_Ingresado_Handball + valor_B_Ingresado_Resistencia + valor_B_Ingresado_Ajedrez;
        PuntosTribuNegra.innerText += equipo2.punto.toString() + '-';
    }
}
function MostrarResultados(tribu) {
    var resultado = '';
    if (tribu == "equipo2") {
        equipo2.punto -= equipo2.punto;
        PuntosTribuNegra.innerText = '';
    }
}
