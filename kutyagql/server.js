// server.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const sqlite3 = require('sqlite3').verbose();

// Adatbázis inicializálása
//const db = new sqlite3.Database(':memory:'); // Memóriában tárolt adatbázis, vagy fájlban: './database.db'
const db=new sqlite3.Database('./kutyak_good_unique.db');



// GraphQL schema definiálása
const schema = buildSchema(`
  type Kutyanev {
    Id: Int!
    kutyanev: String!
  }

  type Query {
    kutyanevek: [Kutyanev]
    kutyanev(id: Int!): Kutyanev
  }

  type Mutation {
    createKutya(kutyanev: String!): Kutyanev
    updateKutya(id: Int!, kutyanev: String!): Kutyanev
    deleteKutya(id: Int!): Boolean
  }
`);

// Resolvers definiálása
const root = {
  // Read: Összes kutya lekérdezése
  kutyanevek: () => {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM kutyanevek', (err, rows) => {
        if (err) reject(err);
        //resolve(rows.map(row => ({ id: row.Id, kutyanev: row.kutyanev })));
        //Ha stimmelnek a nevek, akkor nem kell map
        resolve(rows);
      });
    });
  },

  // Read: Egyetlen kutya lekérdezése ID alapján
  kutyanev: ({ id }) => {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM kutyanevek WHERE Id = ?', [id], (err, row) => {
        if (err) reject(err);
        if (!row) resolve(null);
        resolve({ id: row.Id, kutyanev: row.kutyanev });
      });
    });
  },

  // Create: Új kutya hozzáadása
  createKutya: ({ kutyanev }) => {
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO kutyanevek (Kutyanev) VALUES (?)', [kutyanev], function(err) {
        if (err) reject(err);
        resolve({ id: this.lastID, kutyanev });
      });
    });
  },

  // Update: Kutya frissítése ID alapján
  updateKutya: ({ id, kutyanev }) => {
    return new Promise((resolve, reject) => {
      db.run('UPDATE kutyanevek SET Kutyanev = ? WHERE Id = ?', [kutyanev, id], function(err) {
        if (err) reject(err);
        if (this.changes === 0) resolve(null); // Nem létezik az ID
        resolve({ id, kutyanev });
      });
    });
  },

  // Delete: Kutya törlése ID alapján
  deleteKutya: ({ id }) => {
    return new Promise((resolve, reject) => {
      db.run('DELETE FROM kutyanevek WHERE Id = ?', [id], function(err) {
        if (err) reject(err);
        resolve(this.changes > 0);
      });
    });
  }
};

// Express szerver létrehozása
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true // Fejlesztői felület engedélyezése
}));

// Szerver indítása
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`GraphQL szerver fut a http://localhost:${PORT}/graphql címen`);
});