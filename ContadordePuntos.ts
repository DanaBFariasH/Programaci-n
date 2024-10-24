interface puntos {
    punto : number;
}
let tr: puntos = {
    punto : 0
 };
 let tn: puntos = {
    punto : 0
 };


const handball_tr = document.getElementById('Handball_input_Tribu_Roja') as HTMLInputElement;
const resistencia_tr = document.getElementById('Resistencia_input_Tribu_Roja') as HTMLInputElement;
const ajedrez_tr = document.getElementById('Ajedrez_input_Tribu_Roja') as HTMLInputElement;

const handball_tn = document.getElementById('Handball_input_Tribu_Negra') as HTMLInputElement;
const resistencia_tn = document.getElementById('Resistencia_input_Tribu_Negra') as HTMLInputElement;
const ajedrez_tn = document.getElementById('Ajedrez_input_Tribu_Negra') as HTMLInputElement;

const OutputPuntosTribuRoja = document.getElementById('PuntosTribuRoja') as HTMLElement;
const OutputPuntosTribuNegra = document.getElementById('PuntosTribuNegra') as HTMLElement;

const TribuGanadora = document.getElementById('TribuGanadora') as HTMLElement;


function contar(tribu : string): void {

    if(tribu == "equipo1"){
        let valor_A_Ingresado_Handball : number = parseInt(handball_tr.value, 10);
        let valor_A_Ingresado_Resistencia : number = parseInt(resistencia_tr.value,10);
        let valor_A_Ingresado_Ajedrez : number = parseInt(ajedrez_tr.value,10);
        tr.punto += valor_A_Ingresado_Handball + valor_A_Ingresado_Resistencia + valor_A_Ingresado_Ajedrez
        puntostr.innerText += tr.punto.toString() +'-';
    }
    if(tribu == "equipo2"){
        let valor_B_Ingresado_Handball : number = parseInt(handball_tn.value,10);
        let valor_B_Ingresado_Resistencia : number = parseInt(resistencia_tn.value,10);
        let valor_B_Ingresado_Ajedrez : number = parseInt(ajedrez_tn.value,10);
        tn.punto += valor_B_Ingresado_Handball + valor_B_Ingresado_Resistencia + valor_B_Ingresado_Ajedrez
        Puntostn.innerText += tn.punto.toString() +'-';

    }
}
function Bpuntajefinal(tribu : string): void {
    let resultado= '';
    if(tribu == "equipo2"){
        equipo2.punto -= equipo2.punto;
        Puntostn.innerText ='';
        }
}


