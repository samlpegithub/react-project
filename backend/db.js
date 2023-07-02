const { default: mongoose } = require('mongoose')
const mognoose=require('mongoose')


const ConnectMongo=async()=>{
let url='mongodb+srv://awaismalik:12345@cluster0.wuqqrnm.mongodb.net/inforamtion'

await mongoose.connect(url)
console.log("Connect Mongo db Successfuly");







}
module.exports=ConnectMongo