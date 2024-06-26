import pg from 'pg';
import 'dotenv/config'

const client = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "dbBookReviews",
    password: process.env.DB_PASSWORD,
    port: 5432
});

export const connect = async () => {
    return await client.connect()
    .then(() =>{
        console.log("DB connected!");
    })
    .catch((error) => {
        console.log(`DB connection failed: ${error.message}`)
    });
}

export const query = async (query, params, callback) => {
    return client.query(query, params, callback);
}