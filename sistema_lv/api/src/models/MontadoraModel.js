import pool from "../database/data.js";


export const cadastrar = async (montadora) => {    
    // Obter uma conexão do pool
    const cx = await pool.getConnection(); 
    try {
        // Desestruturar o objeto veiculo
        const { 
            id,
            nome,
            logotipo,
            data_cadastro,
            data_alteracao,
           } = montadora; 

        // Query para inserir um novo veículo
        const query = `INSERT INTO categoria (id, nome, logotipo, data_cadastro, data_alteracao) VALUES (?, ?, ?, ?, ?)`;

        // Executar a query com os valores do veículo
        const [result] = await cx.query(query,[id, nome, logotipo, data_cadastro, data_alteracao]);
    
        // Verificar se a inserção foi bem-sucedida
        if (result.affectedRows === 0) {
            throw new Error("Erro ao cadastrar montadora");
        } 
        // Retornar o ID do veículo inserido
        return result.insertId; 
    } catch (error) {
        // Lançar o erro para ser tratado pelo chamador
        throw error; 
    } finally{
        if (cx) {
            cx.release(); // Liberar a conexão de volta ao pool
        }
    }
}

export const consultarTodos = async (search) => {
    // Obter uma conexão do pool
    const cx = await pool.getConnection(); 
    try {
        // Query para consultar todos os veículos
        let query = `SELECT * FROM Montadora`;
        let params = [];

        // Verificar se há um termo de pesquisa
        if (search) {
            query += ` WHERE modelo LIKE ?`;
            params.push(`%${search}%`);
        }

        // Executar a query com os parâmetros
        const [rows] = await cx.query(query, params);
        
        // Retornar os resultados da consulta
        return rows; 
    } catch (error) {
        // Lançar o erro para ser tratado pelo chamador
        throw error; 
    } finally {
        if (cx) {
            cx.release(); // Liberar a conexão de volta ao pool
        }
    }
} 