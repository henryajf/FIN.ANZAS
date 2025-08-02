let totalIncome = 0;
let totalExpenses = 0;

function addIncome() {
    const description = document.getElementById('incomeDescription').value;
    const amount = parseFloat(document.getElementById('incomeAmount').value);
    
    if (description && !isNaN(amount)) {
        totalIncome += amount;
        updateSummary();
        updateChart();
        clearInputs('incomeDescription', 'incomeAmount');
    } else {
        alert("Por favor, ingresa una descripción y un monto válido.");
    }
}

function addExpense() {
    const description = document.getElementById('expenseDescription').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    
    if (description && !isNaN(amount)) {
        totalExpenses += amount;
        updateSummary();
        updateChart();
        clearInputs('expenseDescription', 'expenseAmount');
    } else {
        alert("Por favor, ingresa una descripción y un monto válido.");
    }
}

function updateSummary() {
    document.getElementById('totalIncome').innerText = totalIncome.toFixed(2);
    document.getElementById('totalExpenses').innerText = totalExpenses.toFixed(2);
    document.getElementById('balance').innerText = (totalIncome - totalExpenses).toFixed(2);
}

let chart;
function updateChart() {
    const ctx = document.getElementById('incomeExpenseChart').getContext('2d');
    if (chart) {
        chart.destroy();
    }
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Ingresos', 'Pagos'],
            datasets: [{
                label: 'Monto',
                data: [totalIncome, totalExpenses],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.6)',
                    'rgba(231, 76, 60, 0.6)'
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(231, 76, 60, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        });
}

function clearInputs(...ids) {
    ids.forEach(id => {
        document.getElementById(id).value = '';
    });
}
