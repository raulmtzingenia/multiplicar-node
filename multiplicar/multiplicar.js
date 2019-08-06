//requirede
const fs= require('fs');
const colors=require('colors');

console.log('hello'.green);
let crearArchivo=(base)=>{
    return new Promise((resolve,reject) =>{
        if (!Number(base)) {
            reject('la base no es un numerico');
            return;
        }
        let data='';
        for(let i=1; i<=10; i++){
            data+=`${base}* ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });

    });
}
let listarTabla =(base, limite)=>{
    return new Promise((resolve,reject) =>{
        if (!Number(base)) {
            reject('la base no es un numerico');
            return;
        }
        let data='';
        for(let i=1; i<=limite; i++){
            data+=`${base}* ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });

    });
}
module.exports={
    crearArchivo,
    listarTabla
}