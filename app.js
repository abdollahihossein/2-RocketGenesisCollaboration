fetch('http://99.79.77.144:3000/api/agents')
    .then((response) => response.json())
    .then((data) => {
        let j = 0
        const table = document.getElementById("myBody");
        for (let i = 0; i < data.length; i++) {
            if (data[i].rating >= 95) {
                let row = table.insertRow();
                row.insertCell(0).innerHTML = j + 1
                row.insertCell(1).innerHTML = data[i].first_name
                row.insertCell(2).innerHTML = data[i].last_name
                row.insertCell(3).innerHTML = data[i].rating
                row.insertCell(4).innerHTML = data[i].fee
                j++
            }
        }
    })
    