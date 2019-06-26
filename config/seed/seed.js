/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

const User = require('../../server/models/User');
const bcrypt = require('bcrypt-nodejs');


//export default function seedDatabaseIfNeeded() {
module.exports = (seedDatabaseIfNeeded) => {
    //if (config.seedDB) {
    User.find({}).remove()
        .then(() => {
            User.create({
                name: 'Test User',
                email: 'test@example.com',
                password: bcrypt.hashSync('test', bcrypt.genSaltSync(8), null)
            }, {
                    name: 'Admin',
                    email: 'admin@example.com',
                    password: bcrypt.hashSync('admin', bcrypt.genSaltSync(8), null)
                })
                .then(() => console.log('finished populating users'))
                .catch(err => console.log('error populating users', err));
        });
    // }
}
