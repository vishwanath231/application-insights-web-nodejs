import express from 'express';
import ejs from 'ejs';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "css")));
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('/product/:id', (req, res) => {
    res.render('product.ejs', {
        id: req.params.id
    });
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})