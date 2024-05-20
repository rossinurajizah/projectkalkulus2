function addMatrixValues() {
    var order = document.getElementById("matrixOrder").value;
    var matrixValuesDiv = document.getElementById("matrixValues");
    matrixValuesDiv.innerHTML = ""; // Clear previous inputs

    // Validate if the order is either 2 or 3
    if (order !== '2' && order !== '3') {
        alert("Order matriks harus 2 atau 3.");
        return;
    }

    for (var i = 0; i < order; i++) {
        for (var j = 0; j < order; j++) {
            var input = document.createElement("input");
            input.type = "number";
            input.className = "form-control mb-2";
            input.placeholder = "    " + (i + 1) + "    " + (j + 1);
            input.style.width = "100px";
            input.style.display = "inline-block";
            input.style.marginRight = "5px";
            matrixValuesDiv.appendChild(input);
        }
        var br = document.createElement("br");
        matrixValuesDiv.appendChild(br);
    }
}

function calculateDeterminant() {
    var order = document.getElementById("matrixOrder").value;
    var matrix = [];
    var inputs = document.getElementById("matrixValues").getElementsByTagName("input");
    var index = 0;

    for (var i = 0; i < order; i++) {
        var row = [];
        for (var j = 0; j < order; j++) {
            row.push(parseFloat(inputs[index].value));
            index++;
        }
        matrix.push(row);
    }

    var steps = [];
    var determinant = calculateDeterminantHelper(matrix, steps);
    document.getElementById("determinantResult").innerHTML = `Determinan matriks : ${determinant}`;
    document.getElementById("calculationSteps").innerHTML = steps.join("<br>");
}

function calculateDeterminantHelper(matrix, steps) {
    var order = matrix.length;

    if (order === 1) {
        steps.push(`Hitung determinan matriks 1x1: ${matrix[0][0]}`);
        return matrix[0][0];
    }

    if (order === 2) {
        let determinant = (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0]);
        steps.push(`Hitung determinan matriks 2x2: (${matrix[0][0]} * ${matrix[1][1]}) - (${matrix[0][1]} * ${matrix[1][0]})`);
        steps.push(`= ${determinant}`);
        return determinant;
    }

    var detMain = matrix[0][0] * matrix[1][1] * matrix[2][2] + matrix[0][1] * matrix[1][2] * matrix[2][0] + matrix[0][2] * matrix[1][0] * matrix[2][1];
    var detSecondary = matrix[0][2] * matrix[1][1] * matrix[2][0] + matrix[0][0] * matrix[1][2] * matrix[2][1] + matrix[0][1] * matrix[1][0] * matrix[2][2];
    var determinant = detMain - detSecondary;

    steps.push(`Hitung determinan matriks 3x3: (${matrix[0][0]} * ${matrix[1][1]} * ${matrix[2][2]}) + (${matrix[0][1]} * ${matrix[1][2]} * ${matrix[2][0]}) + (${matrix[0][2]} * ${matrix[1][0]} * ${matrix[2][1]})`);
    steps.push(`- (${matrix[0][2]} * ${matrix[1][1]} * ${matrix[2][0]}) - (${matrix[0][0]} * ${matrix[1][2]} * ${matrix[2][1]}) - (${matrix[0][1]} * ${matrix[1][0]} * ${matrix[2][2]})`);
    steps.push(`= ${detMain} + ${detSecondary}`);
    steps.push(`= ${determinant}`);

    return determinant;
}




