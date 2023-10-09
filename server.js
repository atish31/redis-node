const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

async function fetchTodos() {
    const apiResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await apiResponse.json();
}

app.get('/todos', (req, res) => {
    fetchTodos().then(response => {
        console.log(response, 'response');
        res.json({
            message: response,
        });
    });
    
});

app.listen(port, () => {
    console.log('listen here...');
});