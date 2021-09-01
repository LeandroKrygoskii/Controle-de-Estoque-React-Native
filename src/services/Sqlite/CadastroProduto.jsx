import db from './DataBaseConnection';

/**
 * CRIAÇÃO DE UM NOVO REGISTRO
 * - Recebe um objeto;
 * - Retorna uma Promise:
 *  - O resultado da Promise é o ID do registro (criado por AUTOINCREMENT)
 *  - Pode retornar erro (reject) caso exista erro no SQL ou nos parâmetros.
 */


const createProduto = (obj) => {
    return new Promise((resolve, reject) =>{
         
        db.transaction((tx) => {
            tx.executeSql("INSERT INTO produto (codBar, nome ,descricao, peso,quantidade,qtMin,valor,id_categoria) values(?, ?, ?, ?, ?, ?, ?, ?);", [obj.codBar, obj.nome ,obj.descricao, obj.peso,obj.quantidade,obj.qtMin,obj.valor,obj.id_categoria],

             (_, { rowsAffected, insertId }) => {
                if (rowsAffected > 0) resolve(rowsAffected);
                else reject("Error inserting obj: " + JSON.stringify(obj)); // insert falhou
              },
              (_, error) => reject(error) // erro interno em tx.executeSql
            
            );
        });
      
    });
};


/**
 * ATUALIZA UM REGISTRO JÁ EXISTENTE
 * - Recebe o ID do registro e um OBJETO com valores atualizados;
 * - Retorna uma Promise:
 *  - O resultado da Promise é a quantidade de registros atualizados;
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
 */



 const update = (id, obj) => {
    return new Promise((resolve, reject) => {
         
        db.transaction((tx) => {
             tx.executeSql("UPDATE music SET autor=? , cifra=?, ritmo=? WHERE id=?;", [obj.autor, obj.cifra, obj.ritmo, id],
             
                (_, { rowsAffected }) => {
                    if (rowsAffected > 0) resolve(rowsAffected);
                    else reject("Error updating obj: id=" + id); // nenhum registro alterado
                },
                (_, error) => reject(error) // erro interno em tx.executeSql
            );
        });

    });
};

const updateQuantity = (id, quantidade) => {
    return new Promise((resolve, reject) => {
         
        db.transaction((tx) => {
             tx.executeSql("UPDATE produto SET quantidade=? WHERE idProduto=?;", [quantidade, id],
             
                (_, { rowsAffected }) => {
                    if (rowsAffected > 0) resolve(rowsAffected);
                    else reject("Error updating obj: id=" + id); // nenhum registro alterado
                },
                (_, error) => reject(error) // erro interno em tx.executeSql
            );
        });

    });
};



/**
 * BUSCA UM REGISTRO POR MEIO DO ID
 * - Recebe o ID do registro;
 * - Retorna uma Promise:
 *  - O resultado da Promise é o objeto (caso exista);
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
 */


const find = (search) =>{
     
    return new Promise((resolve, reject) => {
         
        db.transaction((tx) => {
             
            tx.executeSql("SELECT * FROM produto WHERE idProduto=? OR descricao=? OR codBar=?;", [search,search,search],

            (_, { rows }) => {
                if (rows.length > 0) resolve(rows._array[0]);
                else reject("Obj not found: id="); // nenhum registro encontrado
              },
              (_, error) => reject(error) // erro interno em tx.executeSql
            );              
        });
         
    });
};



/**
 * BUSCA UM REGISTRO POR MEIO DO Nome do Autor (autor)
 * - Recebe o nome do autor;
 * - Retorna uma Promise:
 *  - O resultado da Promise é um array com os objetos encontrados;
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL;
 *  - Pode retornar um array vazio caso nenhum objeto seja encontrado.
 */

const findbyname= (produto) =>{
    return new Promise((reject,resolve) => {
       db.transaction((tx) => {
           tx.executeSql("SELECT * FROM produto WHERE descricao LIKE ?;", [produto],

            (_, { rows }) => {
                if (rows.length > 0) resolve(rows._array);
                else reject("Obj not found"); // nenhum registro encontrado
            },
            (_, error) => reject(error) // erro interno em tx.executeSql
           );
       });
    });
};


/**
 * BUSCA TODOS OS REGISTROS DE UMA DETERMINADA TABELA
 * - Não recebe parâmetros;
 * - Retorna uma Promise:
 *  - O resultado da Promise é uma lista (Array) de objetos;
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL;
 *  - Pode retornar um array vazio caso não existam registros.
 */


const selectAll = () => {
    return new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM produto" ,[],
                (_, { rows }) => resolve(rows._array),
                (_, error) => reject(error) // erro interno em tx.executeSql
            );
        });
    });
};


const selectAllQuantity = () => {
    return new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("SELECT quantidade, nome FROM produto" ,[],
                (_, { rows }) => resolve(rows._array),
                (_, error) => reject(error) // erro interno em tx.executeSql
            );
        });
    });
};

/**
 * REMOVE UM REGISTRO POR MEIO DO ID
 * - Recebe o ID do registro;
 * - Retorna uma Promise:
 *  - O resultado da Promise a quantidade de registros removidos (zero indica que nada foi removido);
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
 */


const deletebyid = (id) => {
    return new Promise((reject, resolve) => {
        db.transaction((tx) => {
            tx.executeSql("DELETE FROM musica WHERE id=?", [id],
            
                (_, { rowsAffected }) => {
                    resolve(rowsAffected);
                },
                (_, error) => reject(error) // erro interno em tx.executeSql
                
            );
        });
    });
};

export default {
    createProduto,
    update,
    find,
    selectAll,
    deletebyid,
    findbyname,
    updateQuantity,
    selectAllQuantity
}
 