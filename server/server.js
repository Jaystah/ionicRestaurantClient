const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(require('./routes/auth'))


app.listen(PORT,()=>{
    console.log("Server is listening on ", PORT)
});