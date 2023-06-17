const  CrudRepository  = require('./crud-repository');
const { Client } = require ('../models');
class ClientRepository extends CrudRepository {
    constructor() {
        super(Client);
    }
}

module.exports = ClientRepository;