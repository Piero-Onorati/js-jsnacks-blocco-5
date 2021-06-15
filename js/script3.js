// ------------------------------ JSnack 3 ---------------------------- //

/* Crea un array di 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine */

var zucchineCorte =[];

var zucchineLunghe =[];

var pesoTot1 = 0;

var pesoTot2 = 0;


for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza <= 15) {
        zucchineCorte.push(zucchine[i]);
        pesoTot1 += zucchine[i].peso;
        document.getElementById('zucchinecorte').innerHTML += 'varietà : ' + zucchine[i].varieta + ', peso :' + zucchine[i].peso + ' , lunghezza : ' + zucchine[i].lunghezza + '<br>';

    }else{
        zucchineLunghe.push(zucchine[i]);
        pesoTot2 += zucchine[i].peso;
        document.getElementById('zucchinelunghe').innerHTML += 'varietà : ' + zucchine[i].varieta + ', peso :' + zucchine[i].peso + ' , lunghezza : ' + zucchine[i].lunghezza + '<br>';
    }
}

// console.log(zucchineCorte);
// console.log(zucchineLunghe);

// console.log(pesoTot1);
// console.log(pesoTot2);

document.getElementById('pesozucchineCorte').innerHTML = 'Il peso totale di tutte le zucchine corte è: ' + pesoTot1 + ' grammi';
document.getElementById('pesozucchineLunghe').innerHTML = 'Il peso totale di tutte le zucchine lunghe è: ' + pesoTot2 + ' grammi';