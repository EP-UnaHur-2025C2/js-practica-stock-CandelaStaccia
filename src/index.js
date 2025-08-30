const express = require("express")
const productos = require("../data/productos.json")
const validaciones = require("./filtros/validaciones")

const app = express()
app.use(express.json())


app.post("/productos/filtrar", (req, res) => {
    const filtros = req.body
    const cumpleFiltros = (producto, filtros) => {
        return filtros.every(f => {
            const validacion = validaciones.find(v => v.nombre === f.fn) //busco la validacion
            return validacion ? validacion.fn(producto, f.values) : false //si existe, evalua
        })
    }
    const result = productos.filter(p => cumpleFiltros(p, filtros))
    //filtro los productos que cumplen con todos los filtros enviados en el body.
    //toma un producto, busco la validacion del 1er filtro que mandaron, cumple, evaluo el siguiente filtro, cumple, agrega 
    // ese producto al array de los que cumplen y pasa al siguiente producto para hacer lo mismo

    res.status(201).json(result)
})



app.listen(3001, () => {
    console.log("App iniciada en el puerto 3001")
})
