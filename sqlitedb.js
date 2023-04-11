var sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "expensedb.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
   if (err) {
      console.error(err.message)
      throw err
   }else{
      console.log('Connected to the SQLite database.')
      db.run(`CREATE TABLE expense (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         item text, 
         amount real, 
         category text, 
         location text, 
         spendOn text, 
         createdOn text 
         )`,
            (err) => {
               if (err) {
                  console.log(err);
               }else{
                  var insert = 'INSERT INTO expense (item, amount, category, location, spendOn, createdOn) VALUES (?,?,?,?,?,?)'

                  db.run(insert, ['Pizza', 10, 'Food', 'Pizza Hut', '2022-05-26 10:10', '2023-05-26 10:10'])
                  db.run(insert, ['Pasta', 9, 'Food', 'Mcdonald', '2023-05-28 11:10', '2023-05-28 11:10'])
                  db.run(insert, ['Biriyani', 12, 'Food', 'Paradise', '2023-05-29 09:22', '2023-05-29 09:22'])
                  db.run(insert, ['Burgers', 15, 'Food', 'BurgerKing', '2023-06-06 16:18', '2023-06-06 16:18'])
                  db.run(insert, ['Starters', 14, 'Food', 'KFC', '2023-06-01 18:14', '2023-05-01 18:14'])
               }
            }
      );  
   }
});

module.exports = db