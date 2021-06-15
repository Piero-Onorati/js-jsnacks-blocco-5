// ------------------------------ JSnack 1 ---------------------------- //

/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore. */

var bici = [
    {
        nome: 'Wilier 0 SLR',
        peso: 6.5
    },

    {
        nome: 'Cannondale SuperSix',
        peso: 8.0
    },

    {
        nome: 'Trek Emonda',
        peso: 4.65
    }

];

var biciLeggera = bici[0];

for (var i = 1; i< bici.length; i++){
    if(bici[i].peso < biciLeggera.peso){
        biciLeggera = bici[i];
    }
}

// console.log(biciLeggera);

document.getElementById('bici').innerHTML = 'Nome: ' + biciLeggera.nome + '<br>'+ 'Peso: ' + biciLeggera.peso;
