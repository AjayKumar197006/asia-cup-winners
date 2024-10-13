const express=require("express")
const cors=require("cors")
const db=require("./db.js")

const app=express()

app.use(express.json())
app.use(cors())


app.listen(8000,()=>
{
    console.log("server started")
})

app.get('/get-winners',(req,res)=>
    {
        db.getWinners()
        .then((data)=>
        {
            res.send(data)
        })
        .catch((err)=>
        {
            res.send(err)
        })
    })
app.get('/get-winner/:time',(req,res)=>
        {
            const id=req.params.time
            db.getWinnersTime(id)
            .then((data)=>
            {
                res.send(data)
            })
            .catch((err)=>
            {
                res.send(err)
            })
        })
app.post('/add-data',(req,res)=>
{
    db.addData(req.body.Time,req.body.Year,req.body.Winner,req.body.Place)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })
})

app.put('/update-winners/:time',(req,res)=>
{
    const id=req.params.time
    db.updateData(req.body.Time,req.body.Year,req.body.Winner,req.body.Place,id)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })
})

app.delete('/delete/:time',(req,res)=>
{
    const id=req.params.time
    db.deleteData(id)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })
})