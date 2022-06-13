const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'Mavzik',
    host: "localhost",
    port: 5432,
    database: "test_task_table"
})

module.exports = pool