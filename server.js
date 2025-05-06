import express from "express"
import mysql from "mysql"
import cors from "cors"

const app=express()
app.use(express.json())
app.use(cors())

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"cargo",
})
db.connect((err)=>{
    if(err){
        console.log("fail")
    }
    else{
        console.log("connect success")
    }
})

app.get('/select',(req,res)=>{
const sql="SELECT * FROM manager"
db.query(sql,(err,result)=>{
    if(err) return res.status(500).json("fail")
        return res.status(200).json(result)
})
})

app.get('/select/:id',(req,res)=>{
    const {id}=req.params;
    const sql="SELECT * FROM manager where id=?"
    db.query(sql,[id],(err,result)=>{
        if(err) return res.status(500).json("fail")
            return res.status(200).json(result)
    })
    })
app.post('/insert',(req,res)=>{
    const{name,password}=req.body
    const sql="INSERT INTO manager(name,password)VALUES(?,?)"
    db.query(sql,[name,password],(err,result)=>{
        if(err) return res.status(500).json("fail")
            return res.status(200).json(result)
    })
})
app.delete('/delete/:id',(req,res)=>{
    const{id}=req.params
    const sql="DELETE FROM manager WHERE id=?"
    db.query(sql,[id],(err,result)=>{
        if(err) return res.status(500).json("fail")
            return res.status(200).json(result) 
    })
})

app.put('/update/:id',(req,res)=>{
    const{id}=req.params
    const{name,password}=req.body
    const sql="UPDATE manager SET name=?,password=? WHERE id=?"
    db.query(sql,[name,password,id],(err,result)=>{
        if(err) return res.status(500).json("fail")
            return res.status(200).json(result)  
    })
})


app.listen(2000,()=>{
    console.log("http://localhost:2000")
})