const db = require('../db')
class TableController {
    async createRow(req, res){
        const {date_event, name_event, amount, distance} = req.body
        const newRow = await db.query(`INSERT INTO tabletask (date_event, name_event, amount, distance) values ($1, $2, $3, $4) RETURNING *`,
        [date_event, name_event, amount, distance])
        res.header("Access-Control-Allow-Origin", "*")
        res.json(newRow.rows[0])
    }

    async getTable(req, res){
        const table = await db.query('SELECT * FROM tabletask')
        res.header("Access-Control-Allow-Origin", "*")
        res.json(table.rows)
       
    } 

    async getRow(req, res){
        const id = req.params.id
        const row = await db.query('SELECT * FROM tabletask where id = $1', [id])
        res.header("Access-Control-Allow-Origin", "*")
        res.json(row.rows[0])
        
    } 

    async updateRow(req, res){
        const {id, date_event, name_event, amount, distance} = req.body
        const row = await db.query(
        `UPDATE tabletask set date_event = $1, name_event = $2, amount = $3, distance = $4 where id = $5 RETURNING *`,
        [date_event, name_event, amount, distance, id])
        res.header("Access-Control-Allow-Origin", "*")
        res.json(row.rows[0])
    } 

    async deleteRow(req, res){
        const id = req.params.id
        const row = await db.query('DELETE FROM tabletask where id = $1', [id])
        res.header("Access-Control-Allow-Origin", "*")
        res.json(row.rows[0])
    } 
}

module.exports = new TableController()