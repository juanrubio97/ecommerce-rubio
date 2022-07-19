const productos = [
    {
        "id":"1",
        "nombre": "Pera",
        "precio":100,
        "stock": 10,
        "categoria": "frutas",
        "descripcion": "Precio por Kg.",
        "img":  "http://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/26.jpg"
    },
    {
        "id":"2",
        "nombre": "Manzana",
        "precio":250,
        "stock": 5,
        "categoria": "frutas",
        "descripcion": "Precio por Kg.",
        "img": "https://todofruver.com/wp-content/uploads/2021/08/Todofruver-manzana.jpg"
    },
    {
        "id":"3",
        "nombre": "Naranja",
        "precio":200,
        "stock": 15,
        "categoria": "frutas",
        "descripcion": "Precio por Kg.",
        "img": "http://www.frutas-hortalizas.com/img/fruites_verdures/22i.jpg"
    },
    {
        "id":"4",
        "nombre": "Lechuga",
        "precio":70,
        "stock": 6,
        "categoria": "verduras",
        "descripcion": "Precio por 1/2Kg.",
        "img": "https://i1.wp.com/unbocadolocuratodo.com/wp-content/uploads/2021/01/lechugaromana.jpg?fit=640%2C426"
    },
    {
        "id":"5",
        "nombre": "Tomate",
        "precio":115,
        "stock": 7,
        "categoria": "verduras",
        "descripcion": "Precio por Kg.",
        "img": "https://laopinion.com/wp-content/uploads/sites/3/2015/08/im_20150215_salud_302149999.jpg?quality=60&strip=all&w=640"
    },
    {
        "id":"6",
        "nombre": "Zanahoria",
        "precio":60,
        "stock": 3,
        "categoria": "verduras",
        "descripcion": "Precio por Kg.",
        "img": "https://www.solococina.es/wp-content/uploads/2015/02/zanahoria-pelada1-640x4261.gif"
    }
]

export const getFetch = (id) =>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(id){
            resolve(productos.find(p => p.id === id));
        }else{
            resolve(productos)
        }
      }, 2000);
    })
}



