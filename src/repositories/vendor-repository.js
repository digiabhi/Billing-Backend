const  CrudRepository  = require('./crud-repository');
const { Vendor } = require ('../models');
class VendorRepository extends CrudRepository {
    constructor() {
        super(Vendor);
    }
}

module.exports = VendorRepository;