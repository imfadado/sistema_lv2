import * as cadastrar from '../models/CategoriaModel.js';

export const cadastrar = async (req, res) => {
    try {
        const categoria = req.body;

        // Verificar se o corpo da requisição contém os dados necessários
        if (!veiculo || Object.keys(categoria).length === 0) {
            return res.status(400).json({
                success: false,
                status: 400,
                message: 'Dados do categoria não fornecidos'
            });
        }
        // Validar os dados do veículo
        if (!categoria.id || !categoria.tipo || !categoria.icone || !categoria.data_cadastro || !categoria.data_alteracao ) {
            return res.status(400).json({
                success: false,
                status: 400,
                message: 'Dados do categoria incompletos ou inválidos'
            });
        }
        
        const novoCategoria = await categoria.cadastrar(categoria);   
        res.status(201).json({
            success: true,
            status: 201,
            message: 'categoria cadastrado com sucesso',
            categoriaId: novoCategoria
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Erro ao cadastrar categoria',
            error: error.message
        });
    }
};

export const consultar = async (req, res) => {
     res.status(200).json({
            success: true,
            status: 200,
            message: 'Em desenvolvimentosss'
        });
}

export const consultarTodos = async (req, res) => {
    const search = req.query.search || '';
    try {
    const Categoria = await Veiculo.consultarTodos(search);
        // Verificar se foram encontrados veículos
        if (veiculos.length === 0) {
            return res.status(404).json({
                success: false,
                status: 404,
                message: 'Nenhum categoria encontrado',
                data: []
            });
        }
        res.status(200).json({
            success: true,
            status: 200,
            message: 'categorias consultados com sucesso',
            data: veiculos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Erro ao consultar categoria',
            error: error.message
        });
    }
};
