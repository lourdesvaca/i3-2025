import { Router } from "express";

const route = Router()

route.get("/products", (req, res) => {
    res.send("Productos. (GET)")
})

route.post("/products", (req,res) =>  {
    res.send("Products. (POST)")
})

route.delete("/products", (req, res) => {
    res.send("Products. (DELETE)")
})

route.put("/products", (req, res) => {
    res.send("Products. (PUT)")
})




export { route }
