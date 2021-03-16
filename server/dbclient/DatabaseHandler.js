class DatabaseHandler {
    mongoose = require('mongoose')
    static databases = 0;

    constructor(connectionString){
        this.url = connectionString
        this.databases++;
    }

    async #connect(){
        console.log('yo')
    }

    async createUser(payload){
        const connection = await this.#connect()
    }
}

module.exports = DatabaseHandler;