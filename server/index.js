// dependances
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// routes
import postRoutes from './routes/posts.js';

const app = express();

// si on est sur /post, on exécute postRoutes
app.use('/posts', postRoutes);

// use est un moyen d'enregistrer un middleware ou une chaîne de middlewares (ou plusieurs middlewares) avant d'exécuter une logique de route finale
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNEXION_URL =
    'mongodb+srv://Jeff:admin@cluster0.lauwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNEXION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));
