const Mysqli = require('mysqli');
 
// Pass in json
let conn = new Mysqli({
    host: 'localhost', //  IP/domain name  
    post: 3306, // Port, default 3306  
    user: 'root', // Username  
    passwd: '', // password  
    db: 'mega_shop' //You  can specify the database or not [optional]  
});

let db = conn.emit(false, '')

module.exports = {
    database : db
}