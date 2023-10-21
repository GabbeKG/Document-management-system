import mysql from 'mysql2/promise';

export async function dbQuery({ sql, values }) {
    const con = await mysql.createConnection({
        host: process.env.NEXTPUBLIC_DB_HOST,
        port: process.env.NEXTPUBLIC_DB_PORT,
        database: process.env.NEXTPUBLIC_DB_NAME,
        user: process.env.NEXTPUBLIC_DB_USER,
        password:process.env.NEXTPUBLIC_DB_PASSWORD,
    })
    try {
        const [data] = await con.query(sql, values);
        con.end()
        return (data)
        
    } catch (error) {
        console.log(error)
    }
}