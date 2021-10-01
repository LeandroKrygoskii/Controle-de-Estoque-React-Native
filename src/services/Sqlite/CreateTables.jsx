import db from './DataBaseConnection';

const createTables = () => {

    db.transaction((tx) => {
        tx.executeSql("CREATE TABLE IF NOT EXISTS categoria(idCategoria INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, barColor TEXT);");
    });
    db.transaction((tx) => {
        tx.executeSql("CREATE TABLE IF NOT EXISTS produto(idProduto INTEGER PRIMARY KEY AUTOINCREMENT, codBar INTEGER, nome TEXT, descricao TEXT, peso REAL,quantidade INTEGER , qtMin INTEGER, valor REAL , id_categoria INTEGER, FOREIGN KEY(id_categoria) REFERENCES categoria(idCategoria));");
    });
  
    

    console.log('tabelas criadas!!!!')
}


const dropTables = () => {
    db.transaction((tx) => {
        tx.executeSql("DROP TABLE Categoria;");
    });

    db.transaction((tx) => {
        tx.executeSql("DROP TABLE Produto;");
    })
    
        
    console.log('tabelas excluidas!!!!')
    
}


export default {
    createTables,
    dropTables
}