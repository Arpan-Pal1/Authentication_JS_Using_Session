import {app} from './app.js';
import dbConnection from './src/databse/db.connection.js';

dbConnection().then(()=>{
    app.listen(8000, ()=>{
        console.log('app is running on the port 8000');
    })
})
.catch((err) => {
    console.log(`DB CONNECTION FAILED ${err}`);
})



