import * as cadastrar from '../models/MontadoraModel.js';

export const montadora = async (req, res) => {
    try {
        const montadora = req.body;

        // Verificar se o corpo da requisição contém os dados necessários
        if (!veiculo || Object.keys(montadora).length === 0) {
            return res.status(400).json({
                success: false,
                status: 400,
                message: 'Dados da montadora não fornecidos'
            });
        }
        // Validar os dados do veículo
        if (!montadora.id || !montadora.nome| !montadora.data_cadastro || !montadora.data_alteracao ) {
            return res.status(400).json({
                success: false,
                status: 400,
                message: 'Dados da montadora incompletos ou inválidos'
            });
        }
        
        const novoMontadora = await montadora.cadastrar(montadora);   
        res.status(201).json({
            success: true,
            status: 201,
            message: 'montadora cadastrado com sucesso',
            montadoraId: novoMontadora
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Erro ao cadastrar montadora',
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
    const Montadora = await Montadora.consultarTodos(search);
        // Verificar se foram encontrados veículos
        if (veiculos.length === 0) {
            return res.status(404).json({
                success: false,
                status: 404,
                message: 'Nenhum Montadora encontrado',
                data: []
            });
        }
        res.status(200).json({
            success: true,
            status: 200,
            message: 'montadoras consultados com sucesso',
            data: Montadora
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Erro ao consultar montadora',
            error: error.message
        });
    }
};
