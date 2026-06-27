function createTable() {
    //Write your code here
  const rn = parseInt(prompt("Input number of rows"), 10);
    const cn = parseInt(prompt("Input number of columns"), 10);

    if (isNaN(rn) || isNaN(cn)) {
        return;
    }

    if (rn <= 0 || cn <= 0) {
        alert("Please enter positive numbers.");
        return;
    }

    const table = document.getElementById("myTable");
    table.innerHTML = ""; // Clear previous table

    for (let i = 0; i < rn; i++) {
        const row = table.insertRow();

        for (let j = 0; j < cn; j++) {
            const cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
