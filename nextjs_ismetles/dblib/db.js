import sqlite3 from 'sqlite3';

const autodb=new sqlite3.Database('./Car_Database.db');


export function getAllCustomers(){
    return new Promise((resolve,reject)=>{
        autodb.all('select * from Customers',(err,rows)=>{
            if(err) reject(err);
            else resolve(rows);
        })
    })
}