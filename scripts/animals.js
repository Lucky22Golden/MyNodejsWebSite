function buildTable(data) {
    console.log(data);
    var tbody = document.querySelector('#myTable tbody');
    tbody.innerHTML = ''; // Clear existing table body content

    // Loop through each object in the data array
    data.forEach(function(animal) {
        // Create a new row for each object
        var row = '<tr>';
        row += `<td>${animal.id}</td>`; // Add ID column
        row += `<td>${animal.animal_name}</td>`; // Add animal_name column
        var value;
        if(animal.animal_exists==0){
            value='No'
        }else{
            value='Yes'
        }
        row += `<td>${value}</td>`; // Add animal_exists column
        row += '</tr>';

        // Append the row to the table body
        tbody.innerHTML += row;
    });
}

// Fetch data from the /animals endpoint and call buildTable with the received data
fetch('/animals')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        buildTable(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });