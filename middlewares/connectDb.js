const mongoose = require('mongoose')
const connectDb = async function(){
    const {DATABASE_URI}  = process.env
    if(!DATABASE_URI){
        console.log('Não foi informada nenhuma string de conexão ao banco') 
    }

    await mongoose.connect(DATABASE_URI)
    mongoose.connection.on('connected', ()=>console.log('Conectado ao DB'))
    mongoose.connection.on('error', error => console.log('Ocorreu erro ao conectar no DB' + error));
    
}

module.exports = connectDb