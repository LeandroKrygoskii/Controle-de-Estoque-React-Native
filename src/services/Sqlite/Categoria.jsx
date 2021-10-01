import db from './DataBaseConnection';



const createCategoria = (categoria, barColor) => {

  
  return new Promise((resolve, reject) =>{

   db.transaction((tx) => {
       tx.executeSql(
         "INSERT INTO categoria (nome, barColor) values (?,?)",
         [categoria, barColor],
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

const findbyid= (id) =>{
  return new Promise((reject,resolve) => {
     db.transaction((tx) => {
         tx.executeSql("SELECT nome FROM categoria WHERE idCategoria=?;", [id],

          (_, { rows }) => {
              if (rows.length > 0) resolve(rows._array);
              else reject("Obj not found"); // nenhum registro encontrado
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
         );
     });
  });
};


export default {
  createCategoria,
  selectAll,
  findbyid
}