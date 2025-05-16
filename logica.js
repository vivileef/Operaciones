document.getElementById('calculate').addEventListener('click', function() {
    // Obtener valores y elementos del DOM
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const errorDiv = document.getElementById('error');
    const resultsDiv = document.getElementById('results');
    
    // Limpiar resultados previos
    errorDiv.textContent = '';
    resultsDiv.innerHTML = '';
    
    // Validar entrada
    if (isNaN(num1) || isNaN(num2)) {
        errorDiv.textContent = 'Por favor, ingrese dos números válidos.';
        return;
    }
    
    // Crear encabezado
    resultsDiv.innerHTML = '<h2>Resultados:</h2>';
    
    // Definir operaciones
    const operaciones = ['SUMA', 'RESTA', 'MULTIPLICACIÓN', 'DIVISIÓN', 'RESIDUO'];
    const simbolos = ['+', '-', '×', '÷', '%'];
    
    // Ejecutar 5 iteraciones
    for (let i = 0; i < 5; i++) {
        let resultado;
        
        // Calcular según la iteración
        if (i === 0) resultado = num1 + num2;
        else if (i === 1) resultado = num1 - num2;
        else if (i === 2) resultado = num1 * num2;
        else if (i === 3) {
            resultado = num2 !== 0 ? num1 / num2 : 'Error: División por cero';
        } else {
            resultado = num2 !== 0 ? num1 % num2 : 'Error: Módulo por cero';
        }
        
        // Formatear resultado numérico
        if (typeof resultado === 'number' && !Number.isInteger(resultado)) {
            resultado = resultado.toFixed(2);
        }
        
        // Mostrar resultado
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `<strong>Iteración ${i+1} - ${operaciones[i]}:</strong> ${num1} ${simbolos[i]} ${num2} = ${resultado}`;
        resultsDiv.appendChild(resultItem);
    }
});