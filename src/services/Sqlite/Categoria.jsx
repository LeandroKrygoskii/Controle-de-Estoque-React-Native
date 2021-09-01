import db from './DataBaseConnection';



const createCategoria = (categoria) => {

  
  return new Promise((resolve, reject) =>{

   db.transaction((tx) => {
       tx.executeSql(
         "INSERT INTO categoria (nome) values (?)",
         [categoria],
         (_, { rowsAffected, insertId }) => {
           if (rowsAffected > 0) resolve(rowsAffected,insertId);
           else reject("Error inserting categoria: " + JSON.stringify(categoria)); // insert falhou
         },
         (_, error) => reject(error) // erro interno em tx.executeSql
       );
   });

  });  
};

const selectAll = () => {
  return new Promise ((resolve, reject) => {
      db.transaction((tx) => {
          tx.executeSql("SELECT idCategoria,nome FROM categoria" ,[],
              (_, { rows }) => resolve(rows._array),
              (_, error) => reject(error) // erro interno em tx.executeSql
          );
      });
  });
};



export default {
  createCategoria,
  selectAll
}