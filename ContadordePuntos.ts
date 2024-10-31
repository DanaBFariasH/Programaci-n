interface puntos {
    punto : number;
}
let tr: puntos = {
    punto : 0
 };
 let tn: puntos = {
    punto : 0
 };

const handball_tr = document.getElementById('handball_tr') as HTMLInputElement;
const resistencia_tr = document.getElementById('resistencia_tr') as HTMLInputElement;
const ajedrez_tr = document.getElementById('ajedrez_tr') as HTMLInputElement;

const handball_tn = document.getElementById('handball_tn') as HTMLInputElement;
const resistencia_tn = document.getElementById('resistencia_tn') as HTMLInputElement;
const ajedrez_tn = document.getElementById('ajedrez_tn') as HTMLInputElement;

const OutputPuntosTribuRoja = document.getElementById('PuntosTribuRoja') as HTMLElement;
const OutputPuntosTribuNegra = document.getElementById('PuntosTribuNegra') as HTMLElement;

const TribuGanadora = document.getElementById('TribuGanadora') as HTMLElement;


function AgregarPuntos(equipo : string){

    if(equipo === 'equipo1'){
        let valor_A_Ingresado_Handball : number = parseInt(handball_tr.value, 10);
        let valor_A_Ingresado_Resistencia : number = parseInt(resistencia_tr.value,10);
        let valor_A_Ingresado_Ajedrez : number = parseInt(ajedrez_tr.value,10);
        tr.punto += valor_A_Ingresado_Handball + valor_A_Ingresado_Resistencia + valor_A_Ingresado_Ajedrez
        //OutputPuntosTribuRoja.innerText += tr.punto.toString() +'-';
    }
    if(equipo === 'equipo2'){
        let valor_B_Ingresado_Handball : number = parseInt(handball_tn.value,10);
        let valor_B_Ingresado_Resistencia : number = parseInt(resistencia_tn.value,10);
        let valor_B_Ingresado_Ajedrez : number = parseInt(ajedrez_tn.value,10);
        tn.punto += valor_B_Ingresado_Handball + valor_B_Ingresado_Resistencia + valor_B_Ingresado_Ajedrez
        //OutputPuntosTribuNegra.innerText += tn.punto.toString() +'-';

    }
}
//function MostrarResultados(AgregarPuntos){
  //  if(tribu === "Tribu Roja"){
    //    alert("Puntaje actual de la Tribu Roja:" + tr.punto);
    
    //} else if (tribu=== "Tribu Negra"){
      //  alert(" Puntaje actual de la Tribu Negra"+ tn.punto);
    //}
    //TribuGanadora.innerText= 
      
//}
function MostrarResultados(){
  let Resultado = '';
  if (tr.punto > tn.punto){
    Resultado = 'Tribu Roja es el ganador con' + tr.punto + ' puntos';
  } else if   (tr.punto < tn.punto){
      Resultado = 'Tribu Negra es el ganador con' + tn.punto + ' puntos';
  } else{
      Resultado = 'Ambos equipos estan ematados con' + tr.punto + ' puntos';
  }
  TribuGanadora.innerText= Resultado; 
}
