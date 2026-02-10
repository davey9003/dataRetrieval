const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const PORT = 3006;

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'small_shop'
})

app.get('/customers',(req,res)=>{
    const sql = "SELECT * FROM customers";
    db.query(sql,(err,data)=>{
        if(err) return err;
        return res.send(data);
    })
})

app.get('/',(req,res)=>{
    res.send('oh yeah!')
})

app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`)
})