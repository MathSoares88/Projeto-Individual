app.post('/api/savePatronus', (req, res) => {
    const { userId, patronoNome, patronoImagem } = req.body;
    const query = 'INSERT INTO patronos (usuarioId, patronoNome, patronoImagem) VALUES (?, ?, ?)';
    db.query(query, [userId, patronoNome, patronoImagem], (err, results) => {
        if (err) {
            console.error('Erro ao salvar o patrono:', err);
            res.status(500).send('Erro ao salvar o patrono');
        } else {
            res.status(200).send('Patrono salvo com sucesso');
        }
    });
});
