const db = require('./db')

class Controller {
    async createUser(req, res) {
        const {name, surname} = req.body;
        const newUser = await db.query('INSERT INTO users(name, surname) VALUES ($1, $2) RETURNING *', [name, surname]);
        res.json(newUser.rows[0]);
    }
    async getUser(req, res) {
        const id = req.params.id;
        const user = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        res.json(user.rows[0])
    }
    async updateUser(req, res) {
        const {id, name, surname} = req.body;
        const user = await db.query('UPDATE users SET name = $1, surname = $2 WHERE id = $3 RETURNING *', [name, surname, id]);
        res.json(user.rows[0]);
    }
    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE FROM users WHERE id = $1', [id]);
        res.send('Succesfully deleted');
    }
}

module.exports = new Controller();
