
function getParametroUrl(urlString,nomeParametro)
{
	var url = new URL(urlString);
	return url.searchParams.get(nomeParametro);
}

function adicionaLinha(urlImagem,nomeFilme,dataLancamento,genero,idDoFilme,contaFilme) {
	// primeira linha nome do filme
	htmlTable  = '<tr class="cor-fundo-linha">';
	htmlTable += '<td><h2>';
	htmlTable += contaFilme+' - '+nomeFilme;
	htmlTable += '</h2></td>';
	htmlTable += '</tr>';

	// segunda linha data de lançamento e gênero
	htmlTable += '<tr class="cor-fundo-linha">';
	htmlTable += '<td>';
	htmlTable += 'Data Lançamento: '+dataLancamento+' | Gênero: '+genero+' ';
	htmlTable += '</td>';
	htmlTable += '</tr>';

	// terceira linha imagem
	htmlTable += '<tr class="cor-fundo-linha">';
	htmlTable += '<td>';
	htmlTable += '<img src="'+urlImagem+'" class="img-thumbnail imagem-filme">';
	htmlTable += '</td>';
	htmlTable += '</tr>';

	// quarta linha botão
	htmlTable += '<tr class="cor-fundo-linha">';
	htmlTable += '<td>';
	htmlTable += '<a href="filme-detalhe.html?id='+idDoFilme+'" class="btn btn-success">Ver Detalhes</a>';
	htmlTable += '</td>';
	htmlTable += '</tr>';

	// quinta linha em branco
	htmlTable += '<tr>';
	htmlTable += '<td>';
	htmlTable += '';
	htmlTable += '</td>';
	htmlTable += '</tr>';

	$('#corpo_tabela').append(htmlTable);
}

function getGenero(genero,generosArray)
{
	nomeGenero = '';
	
	for (var i = 0; i < genero.length; i++)
	{
		for(var j=0; j<generosArray.length; j++)
		{
			if (genero[i].id == generosArray[j]){
				nomeGenero += (nomeGenero != '') ? ' - '+genero[i].name : genero[i].name;
			}
			
		}
	}
	
	return nomeGenero;
}

var genero = {
  "genres": [
    {
      "id": 28,
      "name": "Ação"
    },
    {
      "id": 12,
      "name": "Aventura"
    },
    {
      "id": 16,
      "name": "Animação"
    },
    {
      "id": 35,
      "name": "Comédia"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentário"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Família"
    },
    {
      "id": 14,
      "name": "Fantasia"
    },
    {
      "id": 36,
      "name": "História"
    },
    {
      "id": 27,
      "name": "Terror"
    },
    {
      "id": 10402,
      "name": "Música"
    },
    {
      "id": 9648,
      "name": "Mistério"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Ficção científica"
    },
    {
      "id": 10770,
      "name": "Cinema TV"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "Guerra"
    },
    {
      "id": 37,
      "name": "Faroeste"
    }
  ]
};