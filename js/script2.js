// ------------------------------ JSnack 2 ---------------------------- //

/* Crea  un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.*/

var zucchine = [
    {
        varieta: 'varietà 1',
        peso : 200,
        lunghezza: 14
    },
    {
        varieta: 'varietà 2',
        peso : 250,
        lunghezza: 13
    },
    {
        varieta: 'varietà 3',
        peso : 240,
        lunghezza: 16
    },
    {
        varieta: 'varietà 4',
        peso : 190,
        lunghezza: 15
    },
    {
        varieta: 'varietà 5',
        peso : 250,
        lunghezza: 10
    },
    {
        varieta: 'varietà 6',
        peso : 210,
        lunghezza: 17
    },
    {
        varieta: 'varietà 7',
        peso : 220,
        lunghezza: 11
    },
    {
        varieta: 'varietà 8',
        peso : 230,
        lunghezza: 18
    },
    {
        varieta: 'varietà 9',
        peso : 200,
        lunghezza: 13
    },
    {
        varieta: 'varietà 10',
        peso : 180,
        lunghezza: 14
    },
];

var pesoTot = 0;

for (var i = 0; i < zucchine.length; i++) {
    pesoTot += zucchine[i].peso;
}

document.getElementById('peso').innerHTML = 'Il peso totale di tutte le zucchine è: ' + pesoTot + ' grammi';
console.log('Il peso Totale è: ' + pesoTot);