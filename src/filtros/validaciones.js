const validaciones = [
    {
        nombre: "stock",
        fn: (p, v) => p.stock > v
    },
    {
        nombre: "precio",
        fn: (p, v) => p.precio <= v
    },
    {
        nombre: "nombre",
        fn: (p, v) => p.nombre.length < v
    },
    {
        nombre: "categoria",
        fn: (p, arr) => arr.includes(p.categorias)
    },
    {
        nombre: "precioRango",
        fn: (p, v) => v.min <= p.precio && p.precio <= v.max
    },
    {
        nombre: "stockRango",
        fn: (p, v) => v.min <= p.stock && p.stock <= v.max
    }
]

module.exports = validaciones
