app.post('/api/saveMessage', (req, res) => {
    const { userId, mensagem } = req.body;
    const query = 'INSERT INTO mensagens (usuarioId, mensagem) VALUES (?, ?)';
    db.query(query, [userId, mensagem], (err, results) => {
        if (err) {
            console.error('Erro ao salvar a mensagem:', err);
            res.status(500).send('Erro ao salvar a mensagem');
        } else {
            res.status(200).send('Mensagem salva com sucesso');
        }
    });
});
