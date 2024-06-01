const sendMessage = (messageText) => {
    fetch('/api/saveMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: sessionStorage.ID_USUARIO,
            mensagem: messageText
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Mensagem salva com sucesso:', data);
    })
    .catch(error => {
        console.error('Erro ao salvar a mensagem:', error);
    });
};
