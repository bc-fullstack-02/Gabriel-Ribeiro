const path = require('path')
const fs = require('fs')
const express = require('express')
const { Client } = require('pg')
const app = express()
 
const router = express.Router();
 
app.use(express.json())
// app.use(express.static(path.join(__dirname, 'public')))
 
let db = [
    { id: '04684059-776c-41ce-8c38-940830c0b651', title: 'hello1', body: 'hello1 world body blablabla', create_at: new Date(), update_at: new Date()},
    { id: '04684059-776c-41ce-8c38-940830c0b652', title: 'hello2', body: 'hello2 world body blablabla', create_at: new Date(), update_at: new Date()},
    { id: '04684059-776c-41ce-8c38-940830c0b653', title: 'hello3', body: 'hello3 world body blablabla', create_at: new Date(), update_at: new Date()},
    { id: '04684059-776c-41ce-8c38-940830c0b654', title: 'hello4', body: 'hello4 world body blablabla', create_at: new Date(), update_at: new Date()}
]
 
function conn() {
    const client = new Client({
        connectionString: "postgresql://postgres:postgres@localhost:5432/postgres"
    })
    console.log("conectado");
    return client.connect()
    .then(() => {
        return client
    })
}
 
router
    .route('/posts')
    .all((req, res, next) => {
        console.log(new Date())
        return conn()
        .then((client) => {
            req.db = client
            next()
        })
    })
    .get((req, res) => {
        req.db.query("SELECT id, title, body FROM public.posts;")
        .then(data => {
            res.send(data.rows)
        })
        .catch(e => {
            console.error(e)
            res.status(500).end()
        })
    })
    .post((req, res) => {
        db.push(req.body)
        res.status(201)
        res.end()
    })
 
router
    .param('id', (req, res, next, id) => {
        console.log(new Date())
        return conn()
            .then((client) => {
                req.db = client
                next()
            })
    })
    .route('/posts/:id')
    .get((req, res) => {
        const ret = db.find((e) => e.id === req.params.id)
        if (ret) {
            res.send(ret)
        } else {
            res.status(404).end()
        }
    })    
    .put((req, res) => {
        const ret = db.find((e) => e.id === req.params.id)
        if (ret) {
            db = db.map((e) => {
                if (e.id === req.params.id) {
                    return req.body
                } else {
                    return e
                }
            })
            res.status(202)
            res.end()
        } else {
            res.status(404).end()
        }
    })
    .delete((req, res) => {
        const ret = db.find((e) => e.id === req.params.id)
        if (ret) {
            db = db.filter((e) => e.id !== req.params.id)
            res.status(204)
            res.end()
        } else {
            res.status(404).end()
        }
    })
 
app.use('/v1', router)
 
app.listen(3000,()=>{
    console.log("server on");
})