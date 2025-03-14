document.addEventListener('DOMContentLoaded', () => {
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
            'rgb(114,9,183)',  // Color para empresas lideradas por mujeres
            'rgb(67,97,238)'     // Color para empresas lideradas por hombres
          ],
          borderColor: [
            'rgb(114,9,183)',
            'rgb(67,97,238)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Porcentaje de Empleo Femenino en Empresas'
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
          // Configuración del plugin de DataLabels para mostrar los porcentajes sobre las barras
          datalabels: {
            anchor: 'end',    // Ancla en el extremo final de la barra (parte superior en barras verticales)
            align: 'end',     // Alinea el texto al final de la barra
            formatter: function(value, context) {
              return value + '%';
            },
            font: {
              weight: 'bold'
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
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
  