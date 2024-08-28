import axios from "axios";
import express from "express"
import mycart from "../models/databse.js";
const router = express.Router();
  const sampledatalist ="https://api.escuelajs.co/api/v1/products"

  
router.get('/',(req,res)=>{
    res.sendFile("/home/rohit/Desktop/Work/new-mern-porject/ecommerce/back-ecommerce/public/index.html")
})

router.get("/home",async(req,res)=>{
    const response = await axios.get(sampledatalist);
    res.send(response.data)
})

router.get('/item/:id',async(req,res)=>{
    console.log(req.params.id)
    const response = await axios.get(sampledatalist);
    response.data.map((item)=>{
        if(item.id==req.params.id){
            res.send(item)
        }
    })
})
router.get('/cart/:id',async(req,res)=>{
    // console.log(req.params.id)
    const response = await axios.get(sampledatalist);
    const getbyid = await response.data.forEach(item => {
        if(item.id==req.params.id){
            // console.log("response : "+ item.title)
            mycart.setCart(item)
            console.log(mycart.getCart())
            res.send(item);
            return;
        }
    });
})
router.get('/getCart/:id',async(req,res)=>{
            const cartresult = await mycart.getCart(req.params.id);
            // console.log()
            res.send(cartresult);

})


router.get("/test",async(req,res)=>{
    res.send("this is testing")
})






router.get('/*',(req,res)=>{
    res.send("page not found")
})

export default router;