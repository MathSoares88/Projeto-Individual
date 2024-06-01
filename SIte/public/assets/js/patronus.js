const savePatronus = (patronusName, patronusImage) => {
    fetch('/api/savePatronus', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: sessionStorage.ID_USUARIO,
            patronoNome: patronusName,
            patronoImagem: patronusImage
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Patrono salvo com sucesso:', data);
    })
    .catch(error => {
        console.error('Erro ao salvar o patrono:', error);
    });
};
