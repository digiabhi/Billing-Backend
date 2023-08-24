const  CrudRepository  = require('./crud-repository');
const { Sequelize } = require("sequelize");
const { Invoice,Client,Item } = require ('../models');
class InvoiceRepository extends CrudRepository {
    constructor() {
        super(Invoice);
    }
    async getAllInvoices() {
        const response = await Invoice.findAll({
            include: [
                {
                    model: Item,
                    required: true,
                    as: "itemDetail",
                }
            ],
        });
        return response;
    }
}

module.exports = InvoiceRepository;