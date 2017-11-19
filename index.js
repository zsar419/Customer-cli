const mongoose = require('mongoose');
const dbConnection = require('./config/database');
const Customer = require('./models/customer');  // Import model


// Map deprecated promise to global Promise
mongoose.Promise = global.Promise;

// Connect to DB
/** private mlab URI reference here */
const db = mongoose.connect(dbConnection.mongoURI, {
    useMongoClient: true
});

// Add customer
const addCustomer = (customer) => {
    Customer.create(customer)
        .then(customer => {
            console.info('New customer added');
            db.close();
        });
};

// Find customer
const findCustomer = (name) => {
    const search = new RegExp(name, 'i');   // Makes name case-insensitive
    Customer.find({$or: [ { firstName: search }, { lastName: search } ]}) // Search by first or last name
        .then(customer => {
            console.info(customer);
            console.info(`${customer.length} matches`);
            db.close();
        });
};

const listCustomers = () => {
    Customer.find()
        .then(customers => {
            console.info(customers);
            console.info(`${customers.length} customers`);
            db.close();
        });
};

const updateCustomer = (_id, customer) => {
    Customer.update({ _id }, customer)
        .then(customer => {
            console.info('Customer updated');
            db.close();
        });
};

const removeCustomer = (_id) => {
    Customer.remove({ _id })
        .then(customer => {
            console.info('Customer removed');
            db.close();
        });
};

// Export methods
module.exports = {
    addCustomer,
    findCustomer,
    listCustomers,
    updateCustomer,
    removeCustomer
};