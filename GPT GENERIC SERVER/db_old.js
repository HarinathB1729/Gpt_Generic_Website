import mysql from "mysql";


const db_config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "website",
  port: 3306
};

let connection = {};


function handleDisconnect() {
  connection = mysql.createConnection(db_config); 
                                                  

  connection.connect(function(err) {              
    if(err) {                                    
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 5000); 
    }
                           
  });                                     
                                          
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                        
    } 
    else if(err.code === 'ECONNRESET') { 
      console.log('Connection was forcibly closed. Reconnecting...');
      handleDisconnect();                        
    } else {                                    
      throw err;                                  
    }
  });
}

handleDisconnect();


export const db = connection ;