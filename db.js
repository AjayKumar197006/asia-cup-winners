const sql=require("mysql2")
require("dotenv").config()

const con=sql.createPool(
    {
        host:process.env.host,
        port:process.env.port,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database

    }
)

function getWinners()
{
    return new Promise(function(success,reject)
{
    con.query(`select * from Asia_Cup_Winners`, function(err,rows)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(rows)
    }
})
})
}

function getWinnersTime(id)
{
    return new Promise(function(success,reject)
{
    con.query(`select * from Asia_Cup_Winners where Time=?`,[id] , function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
}

function addData(ti,ye,wi,pl)
{
    return new Promise(function(success,reject)
{
    con.query(`insert into Asia_Cup_Winners(Time,Year,Winner,Place) values(?,?,?,?)`, [ti,ye,wi,pl] , function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
}

function updateData(ti,ye,wi,pl,id)
{
    return new Promise(function(success,reject)
{
    con.query(`UPDATE Asia_Cup_Winners SET Time=?,Year=?,Winner=?,Place=? where Time=?`,[ti,ye,wi,pl,id], function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
}

function deleteData(id)
{
    return new Promise(function(success,reject)
{
    con.query(`delete from Asia_Cup_Winners where id=?`,[id],function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
}

module.exports={getWinners,getWinnersTime,addData,updateData,deleteData}