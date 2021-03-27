// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("idade");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["18 - 30", "31 - 35", "36 - 40", "acima de 40"],
    datasets: [{
      data: [500, 896, 232, 89],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
      
    }],
  },
  
    options: {
        Animation: {
          animateRotate: true,
          animateScale: true

        }
    },
    
});
