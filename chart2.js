document.addEventListener('DOMContentLoaded', () => {
    // Registra el plugin DataLabels para que Chart.js lo reconozca
    Chart.register(ChartDataLabels);
  
    const ctx = document.getElementById('myChart').getContext('2d');
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Empresas lideradas por mujeres',
          'Empresas lideradas por hombres'
        ],
        datasets: [{
          label: 'Porcentaje de empleo femenino',
          data: [54.6, 35.8],
          backgroundColor: [
            'rgb(67,97,238)',
            'rgb(67,97,238)'
          ],
          borderColor: [
            'rgb(67,97,238)',
            'rgb(67,97,238)'
          ],
          borderWidth: 1,
          // Mantiene el ancho actual de las barras
          barPercentage: 0.5,
          categoryPercentage: 0.5
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: ['Porcentaje de Empleo Femenino en Empresas financiadas por Innova Chile',
                'por género del líder del proyecto'
            ],
            font: {
                size: 15
            }
          },
          legend: {
            display: false  // Oculta la leyenda
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || '';
                let value = context.parsed.y;
                return `${label}: ${value}%`;
              }
            }
          },
          datalabels: {
            // Configura el plugin para mostrar el valor encima de cada barra
            anchor: 'end',
            align: 'end',
            offset: 7,
            formatter: function(value) {
              return value + '%';
            },
            font: {
              weight: 'bold'
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false  // Sin líneas de cuadrícula en el eje X
            }
          },
          y: {
            beginAtZero: true,
            max: 100,
            grid: {
              display: false  // Sin líneas de cuadrícula en el eje Y
            },
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }
        }
      }
    });
  });
  