const express = require('express');
const app = express()
 
app.set('port', 7000)
console.log("lololololololol")
 
app.listen(app.get('port'), () => {
    console.log(`Eschuchando en puerto ${app.get('port')}`);
});