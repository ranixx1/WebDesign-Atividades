document.addEventListener('DOMContentLoaded', () => {
    // Gráfico de Vendas Semanais
    const ctxVendas = document.getElementById('graficoVendas')?.getContext('2d');
    if (ctxVendas) {
      new Chart(ctxVendas, {
        type: 'bar',
        data: {
          labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
          datasets: [{
            label: 'Vendas',
            data: [120, 190, 300, 150, 220],
            backgroundColor: '#8B5CF6',
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 12,
                  family: 'Poppins'
                }
              }
            },
            tooltip: {
              titleFont: { size: 13, family: 'Poppins' },
              bodyFont: { size: 12, family: 'Poppins' }
            }
          },
          scales: {
            x: {
              ticks: {
                font: { size: 12, family: 'Poppins' }
              }
            },
            y: {
              beginAtZero: true,
              ticks: {
                font: { size: 12, family: 'Poppins' }
              }
            }
          }
        }
      });
    }
  
    // Gráfico de Estoque por Produto
    const ctxEstoque = document.getElementById('graficoEstoque')?.getContext('2d');
    if (ctxEstoque) {
      new Chart(ctxEstoque, {
        type: 'doughnut',
        data: {
          labels: ['Regata Branca', 'Camiseta Preta', 'Calça Jeans'],
          datasets: [{
            label: 'Estoque',
            data: [30, 45, 25],
            backgroundColor: ['#8B5CF6', '#C084FC', '#E9D5FF'],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                font: {
                  family: 'Poppins',
                  size: 13
                }
              }
            },
            tooltip: {
              titleFont: { size: 13, family: 'Poppins' },
              bodyFont: { size: 12, family: 'Poppins' }
            }
          }
        }
      });
    }
  });
  