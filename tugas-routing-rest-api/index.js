const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended : true}))

let categories = [
    { id : 1, name: 'Elektronik'},
    { id : 2, name: 'Perabotan'}
];

// get
app.get('/api/categories', (req,res) => {
    res.json(categories);
})

// get by id
app.get('/api/categories/:id', (req,res) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find(c => c.id === categoryId);
    if (category) {
        res.json(category);
    } else {
        res.status(404).json({message: 'Category not found.'});
    }
})

// get by query
app.get('/api/categories/:id/search', (req,res) => {
    const {id, name} = req.params;
    const query = req.query.q;
    res.json({id : id, name: query, category: name});
})

// post
app.post('/api/categories', (req, res) => {
    const newCategory = req.body;
    newCategory.id = categories.length ? categories[categories.length - 1].id + 1 : 1;

    categories.push(newCategory);
    res.status(201).json(newCategory);
})

// put
app.put('/api/categories/:id', (req,res) => {
    const categoryId = parseInt(req.params.id);
    const categoryIndex = categories.findIndex(c => c.id === categoryId);

    if(categoryIndex !== -1) {
        categories[categoryIndex] = {id : categoryId, ...req.body}
        res.json(categories[categoryIndex]);
    } else {
        res.status(404).json({message: "Category not found."});
    }
})  

// delete
app.delete('/api/categories/:id', (req,res)  => {
    const categoryId = parseInt(req.params.id);
    categories = categories.filter(c => c.id !== categoryId);

    res.status(204).send();
})



app.listen(port, () => {
    console.log("Server is listening on http://localhost:3000");
});


