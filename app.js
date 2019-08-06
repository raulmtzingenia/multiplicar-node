const argv=require('./config/yargs').argv;
//console.log(argv);
const { crearArchivo} =require('./multiplicar/multiplicar');
const { listarTabla} =require('./multiplicar/multiplicar');
let colors=require('colors');

let comando =argv._[0];

switch (comando) {
    case 'listar':
            listarTabla(argv.base,argv.limite)
            .then(archivo=> console.log(`tabla del: ${argv.base} hasta el ${argv.limite}` )
                            )
            .catch(e=> console.log(e));
        break;
    case 'crear':
            crearArchivo(argv.base)
            .then(archivo=> console.log(`archivo creado: ${archivo.green}`))
            .catch(e=> console.log(e));
        console.log('crear');
        break;

    default:
        console.log('comando no reconocido');
        break;
}

let argv2 =process.argv;
// let parametro=argv[2];
// console.log(parametro);
//console.log(argv);
//console.log('limite',argv.limite);

// let base=parametro.split('=')[1];
// console.log(base);
 //let base=9;
 //crearArchivo(base).then(archivo=> console.log(`archivo creado: ${archivo}`));
