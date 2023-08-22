const data = {
  labels: [20, "", 25, "", 30, "", 35, "", 40, "", 60, "", 65],
  datasets: [
    {
      label: "Employer: K 73,500",
      backgroundColor: "#0800a3",
      data: [5, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
      barThickness: 12,
      borderColor: "transparent",
      borderWidth: 0,
      fill: true,
    },
    {
      label: "Employee: K 52,500",
      backgroundColor: "#4935ff",
      data: [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32],
      barThickness: 12,
    },
    {
      label: "Total Interest: K 244,313",
      backgroundColor: "#85afff",
      data: [15, 22, 28, 35, 45, 50, 55, 60, 65, 70, 75, 80, 88],
      barThickness: 12,
    },
  ],
};
const customXLabels = ["0$", "100$", "200$", "300$"];

const config = {
  type: "bar",
  data: data,
  options: {
    layout: {
      padding: {
        top: 30,
      },
    },
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
          drawBorder: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },

        ticks: {
          callback: (value, index, values) => {
            return customXLabels[index] || value;
          },
          stepSize: 50,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  },
};

const ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, config);




// Dark Mode

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode')
})





