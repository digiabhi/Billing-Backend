const  CrudRepository  = require('./crud-repository');
const { Invoice } = require ('../models');
class InvoiceRepository extends CrudRepository {
    constructor() {
        super(Invoice);
    }
}

module.exports = InvoiceRepository;