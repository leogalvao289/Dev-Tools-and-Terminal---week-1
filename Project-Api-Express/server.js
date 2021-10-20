const express = require('express')
const cors = require('cors')
const { Pool, Client } = require('pg')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'tgaby005',
  database: 'db_migracode',
  port: '5432'
})

const insertUser =
  `INSERT INTO users (name_user , surname_user , email_user , phone_user) VALUES ($2 , $3 , $4, $5)`
const selectUser = `SELECT * FROM users  WHERE name_user = $1`
const updateUser =
  `UPDATE users SET name_user = $2, surname_user = $3 , email_user = $4, phone_user =$5 , WHERE id_user =$1`
const deleteUser = `DELETE FROM users where id_user = $1`
//probo la conexion

pool.connect(function (error) {
  if (error) {
    throw error
  } else {
    console.log('conexion ok ')
  }
})

app.get('/', (req, res) => {
  res.send('Ruta inicio ')
})

// mostrar todo

app.get('/users', function (req, res) {
  pool.connect((err, client, release) => {
    if (err) {
      return console.error(' Error acquiring cliente', err.stack)
    }
    client.query('SELECT * FROM users', (err, result) => {
      release()
      if (err) {
        return console.error('Error executing query ', err.stack)
      }
      res.json(result.rows)
    })
  })
})

app.post('/users/:id_user', (req, res) => {
  let { name_user, surname_user, email_user, phone_user } = req.body
  let value = [name_user, surname_user, email_user, phone_user]
  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiting client ', err.stack)
    }

    client.query(selectUser, [name_user], (err, result) => {
      if (result.rowCount > 0) {
        res.send(`the user ${name_user} already exist`)
      } else {
        client.query(insertUser, value, (err, result) => {
          release()
          res.json('Route ok!!!')
        })
      }
    })
  })
})

app.put('/users/:id_user', function (req, res) {
  let { id_user, name_user, surname_user, email_user, phone_user } = req.body
  let values = [name_user, surname_user, email_user, phone_user, id_user]
  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiting client ', err.stack)
    }
      
    client.query(updateUser, values, (err, result) => {
      if (result.rowCount > 0) {
        res.status(201).send('1 row updated')
      } else {
        res.status(404).send('Bad request')
      }
    })
  })
})

app.delete('/users/:id_user', (req, res) => {
 let idUser = req.params.id_user 
  pool.query(deleteUser, [idUser], (err, result) => {
    if (result.rowCount > 0) {
      res.status(201).send('1 row erased')
    } else {
      res.status(404).send('Bad request')
    }
  })
})

app.listen(4000, () => {
  console.log(`Servidor ok`)
})
