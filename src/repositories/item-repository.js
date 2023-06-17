const  CrudRepository  = require('./crud-repository');
const { Item } = require ('../models');
class ItemRepository extends CrudRepository {
    constructor() {
        super(Item);
    }
}

module.exports = ItemRepository;