let stateList = [
    ['Acre', 'AC'],
    ['Alagoas', 'AL'],
    ['Amapá', 'AP'],
    ['Amazonas', 'AM'],
    ['Bahia', 'BA'],
    ['Ceará', 'CE'],
    ['Distrito Federal', 'DF'],
    ['Espírito Santo', 'ES'],
    ['Goiás', 'GO'],
    ['Maranhão', 'MA'],
    ['Mato Grosso', 'MT'],
    ['Mato Grosso do Sul', 'MS'],
    ['Minas Gerais', 'MG'],
    ['Pará', 'PA'],
    ['Paraíba', 'PB'],
    ['Paraná', 'PR'],
    ['Pernambuco', 'PE'],
    ['Piauí', 'PI'],
    ['Rio de Janeiro', 'RJ'],
    ['Rio Grande do Norte', 'RN'],
    ['Rio Grande do Sul', 'RS'],
    ['Rondônia', 'RO'],
    ['Roraima', 'RR'],
    ['Santa Catarina', 'SC'],
    ['São Paulo', 'SP'],
    ['Sergipe', 'SE'],
    ['Tocantins', 'TO']
  ];

  for(let i =0; i < stateList.length; i++){
      let select = document.querySelector("#estado");
      let options = document.createElement('option');
      options.value = stateList[i][1];
      options.innerHTML = stateList[i][0];
      select.appendChild(options);
  }