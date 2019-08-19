//使用express构建服务器
const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors")

//引入路由模块
const user=require("./routes/user");
const index=require("./routes/index");
const products=require("./routes/products");
const details=require("./routes/details");
const cart=require("./routes/cart");

var app=express();
app.listen(3000)

//托管静态资源
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
    extended:false
}))
// app.use(bodyParser.json())
app.use(cors({
    origin:["http://127.0.0.1:5501","http://localhost:5501"],
    credentials:true
}))
//使用路由器来管理路由
app.use("/user",user);
app.use("/index",index);
app.use("/products",products);
app.use("/details",details);
app.use("/cart",cart);