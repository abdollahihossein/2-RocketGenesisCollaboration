fetch('http://99.79.77.144:3000/api/agents')
    .then((response) => response.json())
    .then((data) => {
        let j = 0
        let filteredData = []
        const myTable = document.getElementById("tableBody")
        data.forEach(datum => {
            if (datum.rating >= 95) {
                filteredData[j] = {
                    first_name: datum.first_name,
                    last_name: datum.last_name,
                    region: datum.region,
                    rating: datum.rating,
                    fee: datum.fee
                }
                // At this part the data is inserted to the table:
                let row = myTable.insertRow()
                row.insertCell(0).innerHTML = j + 1
                row.insertCell(1).innerHTML = datum.first_name
                row.insertCell(2).innerHTML = datum.last_name
                row.insertCell(3).innerHTML = datum.region
                row.insertCell(4).innerHTML = datum.rating
                row.insertCell(5).innerHTML = datum.fee
                j++
            }
        })
        // Filtering the "Region" column:
        const filterButton = document.getElementById("choice")
        filterButton.addEventListener("change", () => {
            for (let i = j - 1; i >= 0 ; i--) {
                document.getElementById("tableBody").deleteRow(i)
            }
            j = 0
            if (filterButton.options[filterButton.selectedIndex].value == "all") {
                filteredData.forEach(datum => {
                    let row2 = myTable.insertRow()
                    row2.insertCell(0).innerHTML = j + 1
                    row2.insertCell(1).innerHTML = datum.first_name
                    row2.insertCell(2).innerHTML = datum.last_name
                    row2.insertCell(3).innerHTML = datum.region
                    row2.insertCell(4).innerHTML = datum.rating
                    row2.insertCell(5).innerHTML = datum.fee
                    j++
                })
            }
            else {
                filteredData.forEach(datum => {
                    if (datum.region == filterButton.options[filterButton.selectedIndex].value) {
                        let row2 = myTable.insertRow()
                        row2.insertCell(0).innerHTML = j + 1
                        row2.insertCell(1).innerHTML = datum.first_name
                        row2.insertCell(2).innerHTML = datum.last_name
                        row2.insertCell(3).innerHTML = datum.region
                        row2.insertCell(4).innerHTML = datum.rating
                        row2.insertCell(5).innerHTML = datum.fee
                        j++
                    }
                })
            }
        })
    })
    