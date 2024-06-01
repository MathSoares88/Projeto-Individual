function getResult(req, res) {
    const { userId } = req.query;

    const instrucaoSql = `
        SELECT casa FROM resultados_quiz WHERE usuarioId = '${userId}' ORDER BY id DESC LIMIT 1;
    `;

    database.executar(instrucaoSql)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(500).json({ error: 'Erro ao obter resultado' });
        });
}

module.exports = {
    saveResult,
    getResult
};
