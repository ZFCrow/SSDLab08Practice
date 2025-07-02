import espress from 'express'; 

const app = espress(); 

app.use(espress.static('public')); 

app.listen(3000, () => { 
    console.log('Server is running on http://localhost:3000'); 
}); 