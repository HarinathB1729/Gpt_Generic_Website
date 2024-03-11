import mysql from "mysql";


var pool = mysql.createPool({
  connectionLimit:10,
  host: "localhost",
  user: "root",
  password: "",
  database: "website",
  port: 3306
});

pool.getConnection((err,connection)=> {
  if(err)
  throw err;
  console.log('Database connected successfully');
  connection.release();
});

export const db = pool;