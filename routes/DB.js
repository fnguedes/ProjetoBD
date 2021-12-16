const { Pool } = require('pg')

let pool=new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '23828',
    port: 5432,
});;

module.exports = {
    pool,
}