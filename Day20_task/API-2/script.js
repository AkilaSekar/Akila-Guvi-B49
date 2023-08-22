const apiURL="https://cat-fact.herokuapp.com/facts";
fetch(apiURL)
.then((response)=>{
    if(response.status===200){
         return response.json();
    }
})
.then((val)=>{
    
// Get a reference to the table container
const tableContainer = document.getElementById("table-container");

// Create a table element
const table = document.createElement("table");

// Create table header row
const headerRow = document.createElement("tr");
const headers = ["ID", "USER", "TEXT", "CREATEDAT", "UPDATEDAT","STATUS-BERIFIED"];

// Create and append header cells
headers.forEach(headerText => {
    const headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
});

// Append the header row to the table
table.appendChild(headerRow);
    for(let i=0; i<val.length; i++){

        var a=[(val[i]._id),(val[i].user),(val[i].text),(val[i].createdAt),(val[i].updatedAt),val[i].status.verified];
        const data=[a]

// Create table rows from data
data.forEach(rowData => {
    const row = document.createElement("tr");
    rowData.forEach(cellData => {
        const cell = document.createElement("td");
        cell.textContent = cellData;
        row.appendChild(cell);
    });

    // Append the row to the table
    table.appendChild(row);
});

// Append the table to the container
tableContainer.appendChild(table);
    }

})
.catch((err)=>{
     console.log("Error:",err);
 });


