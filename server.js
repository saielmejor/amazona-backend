import express from "express";
import data from "./data.js ";

const app=express(); 

app.get('/api/products',(req,res)=>{ 
    res.send(data.products); 
})
app.get('/api/products/slug/:slug',(req,res)=>{ 
    //define product and use the find to look for the slug 
    const product=data.products.find(x=>x.slug === req.params.slug) 

    if(product){ 
        res.send(product);
    }else{ 
        res.status(404).send({message:'Product not found'})
    }

    res.send(data.products); 
})

const port=process.env.PORT || 3080; 

app.listen(port, ()=>{ 
    console.log(`serve at http://localhost:${port}`)
})