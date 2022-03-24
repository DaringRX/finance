
if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado !')
    window.location.href = './index.html'
}

  window.onload = function(){
      
  const data = {
    labels: [
      'Refeição',
      'Combustivel',
      'Outros'
    ],
    datasets: [{
      label: 'Gastos Diários',
      data: [50, 150, 120],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true
    }
  };


  
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  
  const data2 = {
    labels: [
      'Refeição',
      'Combustivel',
      'Outros'
    ],
    datasets: [{
      label: 'Gastos Mensais',
      data: [150, 150, 20],
      backgroundColor: [
        'rgb(220,20,60)',
        'rgb(70,130,180)',
        'rgb(255,215,0)'
      ],
      hoverOffset: 4
    }]
  };

  const config2 = {
    type: 'doughnut',
    data: data2,
    options: {
        responsive: true
    }
  };


  
  const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
  );
  }

function btnSair(){
    localStorage.removeItem('token')
    window.location.href = './index.html'
}