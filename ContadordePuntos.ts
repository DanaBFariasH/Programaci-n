interface punto{
    punto:number;
}
let equipo1: punto={
    punto:0
}
let equipo2: punto={
    punto:0
}

const handball_tr = document.getElementById('handball_tr') as HTMLInputElement;
const resistencia_tr = document.getElementById('resistencia_Tr') as HTMLInputElement;
const ajedrez_tr = document.getElementById('ajedrez_tr') as HTMLInputElement;

const handball_tn = document.getElementById('handball_tn ') as HTMLInputElement;
const resistencia_tn = document.getElementById('esistencia_tn') as HTMLInputElement;
const ajedrez_tn = document.getElementById('ajedrez_tn ') as HTMLInputElement;

const Puntosequipo1 = document.getElementById('PuntosTribuRoja') as HTMLElement;
const PuntosTribuNegra = document.getElementById('PuntosTribuNegra') as HTMLElement;

const TribuGanadora = document.getElementById('TribuGanadora') as HTMLElement;

function AgregarPuntos(tribu : string): void {

    if(tribu == "equipo1"){
        let valor_A_Ingresado_Handball : number = parseInt(handball_tr.value, 10);
        let valor_A_Ingresado_Resistencia : number = parseInt(resistencia_tr.value,10);
        let valor_A_Ingresado_Ajedrez : number = parseInt(ajedrez_tr.value,10);
        equipo1.punto += valor_A_Ingresado_Handball + valor_A_Ingresado_Resistencia + valor_A_Ingresado_Ajedrez
        Puntosequipo1.innerText += equipo1.punto.toString() +'-';
    }
    if(tribu == "equipo2"){
        let valor_B_Ingresado_Handball : number = parseInt(handball_tn.value,10);
        let valor_B_Ingresado_Resistencia : number = parseInt(resistencia_tn.value,10);
        let valor_B_Ingresado_Ajedrez : number = parseInt(ajedrez_tn.value,10);
        equipo2.punto += valor_B_Ingresado_Handball + valor_B_Ingresado_Resistencia + valor_B_Ingresado_Ajedrez
        PuntosTribuNegra.innerText += equipo2.punto.toString() +'-';

    }
}
function MostrarResultado(): void{
    let Resultado = '';
    if (equipo1.punto > equipo2.punto){
      Resultado = 'La Tribu Roja es gano con' + equipo1.punto + 'puntos';
    } else if   (equipo1.punto < equipo2.punto){
        Resultado = 'La Tribu Negra gano con' + equipo2.punto + 'puntos';
    } else{
        Resultado = 'Ambos equipos estan empatados con' + equipo1.punto + 'puntos';
    }
    Resultado.innerText= Resultado; 
  }

