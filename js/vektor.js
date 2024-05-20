function calculate() {
    // Mendapatkan operasi yang dipilih dari dropdown menu
    let operation = document.getElementById("operation").value;
    // Mendapatkan nilai vektor A dan B dari input
    let vectorA = document.getElementById("vectorA").value;
    let vectorB = document.getElementById("vectorB").value;

    // Parsing vektor input menggunakan regex
    let regex = /([-+]?\d+)([ijk])/g;
    let numbersA = [...vectorA.matchAll(regex)].map(match => parseInt(match[1]));
    let numbersB = [...vectorB.matchAll(regex)].map(match => parseInt(match[1]));

    // Memastikan vektor memiliki tiga komponen untuk cross product
    if (operation === "cross" && (numbersA.length !== 3 || numbersB.length !== 3)) {
        alert("Vektor harus memiliki tiga komponen (i, j, k) untuk cross product.");
        return;
    }

    let crossProductComponents; // Variabel untuk menyimpan hasil cross product

    // Menampilkan langkah-langkah perhitungan
    let steps = "Langkah-langkah untuk menghitung " + (operation === "dot" ? "dot" : "cross") + " product:\n";
    if (operation === "dot") {
        // Langkah-langkah untuk dot product
        for (let i = 0; i < numbersA.length; i++) {
            steps += `Langkah ${i + 1}:\n(${numbersA[i]} * ${numbersB[i]}) = ${numbersA[i] * numbersB[i]}\n\n`;
        }
    } else {
        // Langkah-langkah untuk cross product
        steps += "Langkah 1:\nTentukan komponen dari vektor hasil (i, j, k).\n\n";
        crossProductComponents = [
            numbersA[1] * numbersB[2] - numbersA[2] * numbersB[1], // Komponen i
            numbersA[2] * numbersB[0] - numbersA[0] * numbersB[2], // Komponen j
            numbersA[0] * numbersB[1] - numbersA[1] * numbersB[0]  // Komponen k
        ];
        for (let i = 0; i < 3; i++) {
            steps += `Langkah ${i + 2}:\n(${numbersA[(i + 1) % 3]} * ${numbersB[(i + 2) % 3]}) - (${numbersA[(i + 2) % 3]} * ${numbersB[(i + 1) % 3]}) = ${crossProductComponents[i]}\n\n`;
        }
    }

    // Menghitung dot product atau cross product
    let result;
    if (operation === "dot") {
        // Dot product
        let dotProduct = 0;
        for (let i = 0; i < numbersA.length; i++) {
            dotProduct += numbersA[i] * numbersB[i];
        }
        result = steps + `\nDot product: ${dotProduct}`;
    } else {
        // Cross product
        result = steps + `\nCross product: ${crossProductComponents[0]}i + ${crossProductComponents[1]}j + ${crossProductComponents[2]}k`;
    }

    // Menampilkan hasil
    document.getElementById("result").innerText = result;
}
