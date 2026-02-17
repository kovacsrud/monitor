const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const sqlite3 = require('sqlite3').verbose();

// Adatbázis inicializálása
const db = new sqlite3.Database(':memory:'); // Memóriában tárolt adatbázis, vagy fájlban: './database.db'

// Tábla létrehozása, ha még nem létezik
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS kutyak (
      Id INTEGER PRIMARY KEY AUTOINCREMENT,
      Kutyanev TEXT NOT NULL
    )
  `);
});

// GraphQL schema definiálása
const schema = buildSchema(`
  type Kutya {
    id: Int!
    kutyanev: String!
  }

  type Query {
    kutyak: [Kutya]
    kutya(id: Int!): Kutya
  }

  type Mutation {
    createKutya(kutyanev: String!): Kutya
    updateKutya(id: Int!, kutyanev: String!): Kutya
    deleteKutya(id: Int!): Boolean
  }
`);

// Resolvers definiálása
const root = {
  // Read: Összes kutya lekérdezése
  kutyak: () => {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM kutyak', (err, rows) => {
        if (err) reject(err);
        resolve(rows.map(row => ({ id: row.Id, kutyanev: row.Kutyanev })));
      });
    });
  },

  // Read: Egyetlen kutya lekérdezése ID alapján
  kutya: ({ id }) => {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM kutyak WHERE Id = ?', [id], (err, row) => {
        if (err) reject(err);
        if (!row) resolve(null);
        resolve({ id: row.Id, kutyanev: row.Kutyanev });
      });
    });
  },

  // Create: Új kutya hozzáadása
  createKutya: ({ kutyanev }) => {
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO kutyak (Kutyanev) VALUES (?)', [kutyanev], function(err) {
        if (err) reject(err);
        resolve({ id: this.lastID, kutyanev });
      });
    });
  },

  // Update: Kutya frissítése ID alapján
  updateKutya: ({ id, kutyanev }) => {
    return new Promise((resolve, reject) => {
      db.run('UPDATE kutyak SET Kutyanev = ? WHERE Id = ?', [kutyanev, id], function(err) {
        if (err) reject(err);
        if (this.changes === 0) resolve(null); // Nem létezik az ID
        resolve({ id, kutyanev });
      });
    });
  },

  // Delete: Kutya törlése ID alapján
  deleteKutya: ({ id }) => {
    return new Promise((resolve, reject) => {
      db.run('DELETE FROM kutyak WHERE Id = ?', [id], function(err) {
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