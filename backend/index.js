const express=require('express')
const cors=require('cors')
const ConnectMongo=require('./db')

const app=express()
ConnectMongo()
const port=5000;

app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./router/auth'))
app.use('/api/note',require('./router/note'))
app.listen(port,()=>{



    app.get((res,req)=>{
   res.json("hello")
    })

console.log(`Express Server Start On Port http://localhost:${port}`);

})
