import  * as mysql from 'mysql';

import dbConfig from "./db.config";

let connection = mysql.createConnection(dbConfig);

connection.connect();


connection.query('select * from  user', (e, d) => {
    if (e) {
        console.log(e);
        return;
    }

    console.log(d);

});


