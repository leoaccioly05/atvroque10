document.getElementById('consultar').addEventListener('click', function() {
    var cep = document.getElementById('cep').value;
    fetch('https://viacep.com.br/ws/'+ cep +'/json/')
    .then(response => response.json())
    .then(data => {
        var resultado = 'CEP: ' + data.cep + '<br>';
        resultado += 'Logradouro: ' + data.logradouro + '<br>';
        resultado += 'Bairro: ' + data.bairro + '<br>';
        resultado += 'Cidade: ' + data.localidade + '<br>';
        resultado += 'Estado: ' + data.uf + '<br>';
        document.getElementById('resultado').innerHTML = resultado;
    })
    .catch(error => console.error('Erro:', error));
});
