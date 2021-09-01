import db from './DataBaseConnection';

const createTables = () => {

    db.transaction((tx) => {
        tx.executeSql("CREATE TABLE IF NOT EXISTS categoria(idCategoria INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT);");
    });
    db.transaction((tx) => {
        tx.executeSql("CREATE TABLE IF NOT EXISTS produto(idProduto INTEGER PRIMARY KEY AUTOINCREMENT, codBar INTEGER, nome TEXT, descricao TEXT, peso REAL,quantidade INTEGER , qtMin INTEGER, valor REAL , id_categoria INTEGER, FOREIGN KEY(id_categoria) REFERENCES categoria(idCategoria));");
    });
  
    // db.transaction((tx) => {
    //     tx.executeSql("CREATE TABLE IF NOT EXISTS itemEntrada(idItemEntrada INTEGER PRIMARY KEY AUTOINCREMENT, lote TEXT, quantidade INTEGER, id_categoria INTEGER, FOREIGN KEY(id_categoria) REFERENCES categoria(idCategoria), id_produto INTEGER, FOREIGN KEY(id_produto) REFERENCES produto(idProduto));");
    // });
   
    // db.transaction((tx) => {
    //     tx.executeSql("CREATE TABLE IF NOT EXISTS itemSaida(idItemSaida INTEGER PRIMARY KEY AUTOINCREMENT, lote TEXT, quantidade INTEGER, id_categoria INTEGER, FOREIGN KEY(id_categoria) REFERENCES categoria(idCategoria), id_produto INTEGER, FOREIGN KEY(id_produto) REFERENCES produto(idProduto));");
    // });

    db.transaction((tx) => {
        tx.executeSql("CREATE TABLE IF NOT EXISTS cliente(idCliente INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, endereco TEXT, telefone TEXT, id_produto INTEGER, FOREIGN KEY(id_produto) REFERENCES produto(idProduto));");
    });

    // db.transaction((tx) => {
    //     tx.executeSql("CREATE TABLE IF NOT EXISTS Entrada(idEntrada INTEGER PRIMARY KEY AUTOINCREMENT, quantidade INTEGER, id_entrada INTEGER, FOREIGN KEY(id_entrada) REFERENCES itemEntrada(idITemEntrada), id_cliente INTEGER, FOREIGN KEY(id_cliente) REFERENCES cliente(idCliente));")
    // });

    // db.transaction((tx) => {
    //     tx.executeSql("CREATE TABLE IF NOT EXISTS Saida(idSaida INTEGER PRIMARY KEY AUTOINCREMENT, quantidade INTEGER, id_saida INTEGER, FOREIGN KEY(id_saida) REFERENCES itemSaida(idITemSaida), id_cliente INTEGER, FOREIGN KEY(id_cliente) REFERENCES cliente(idCliente));");
    // });

    console.log('tabelas criadas!!!!')
}


const dropTables = () => {
    db.transaction((tx) => {
        tx.executeSql("DROP TABLE Categoria;");
    });

    db.transaction((tx) => {
        tx.executeSql("DROP TABLE Produto;");
    })
    
    db.transaction((tx) => {
        tx.executeSql("DROP TABLE itemEntrada;");
    })
    db.transaction((tx) => {
        tx.executeSql("DROP TABLE itemSaida;");
    })
    db.transaction((tx) => {
        tx.executeSql("DROP TABLE Cliente;");
    })
    db.transaction((tx) => {
        tx.executeSql("DROP TABLE Entrada;");
    })
    db.transaction((tx) => {
        tx.executeSql("DROP TABLE Saida;");
    })
        
    console.log('tabelas excluidas!!!!')
    
}


export default {
    createTables,
    dropTables
}