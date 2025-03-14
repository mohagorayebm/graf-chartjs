document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myChart');
  
    // Si ya existe una instancia del gráfico, destrúyela
    if (window.myChart instanceof Chart) {
      window.myChart.destroy();
    }
    
    const ctx = canvas.getContext('2d');
  
    // Crea el gráfico y lo asigna a una variable global
    window.myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          '2009','2010','2011','2012','2013','2014','2015',
          '2016','2017','2018','2019','2020','2021','2022','2023','2024'
        ],
        datasets: [
          {
            label: 'Sostenible',
            data: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 55, 60, 65, 70, 75, 80],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            fill: true,
            tension: 0.3
          },
          {
            label: 'No sostenible',
            data: [80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 45, 40, 35, 30, 25, 20],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: true,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          title: {
            display: true,
            text: 'Evolución de cartera sostenible'
          },
          legend: {
            position: 'top'
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || '';
                let value = context.parsed.y;
                return `${label}: ${value}`;
              }
            }
          }
        },
        scales: {
          x: {
            stacked: true
          },
          y: {
            stacked: true,
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  });
  