fetch('http://99.79.77.144:3000/api/agents')
    .then((response) => response.json())
    .then((data) => {
        let j = 0
        const firstName = []
        const lastName = []
        const ratings = []
        const fees = []
        for (let i = 0; i < data.length; i++) {
            if (data[i].rating >= 95) {
                firstName[j] = data[i].first_name
                lastName[j] = data[i].last_name
                ratings[j] = data[i].rating
                fees[j] = data[i].fee
                console.log(j)
                j++
            }
        }
        document.getElementById("fn0").innerHTML = firstName[0]
        document.getElementById("fn1").innerHTML = firstName[1]
        document.getElementById("fn2").innerHTML = firstName[2]
        document.getElementById("fn3").innerHTML = firstName[3]

        document.getElementById("ln0").innerHTML = lastName[0]
        document.getElementById("ln1").innerHTML = lastName[1]
        document.getElementById("ln2").innerHTML = lastName[2]
        document.getElementById("ln3").innerHTML = lastName[3]

        document.getElementById("r0").innerHTML = ratings[0]
        document.getElementById("r1").innerHTML = ratings[1]
        document.getElementById("r2").innerHTML = ratings[2]
        document.getElementById("r3").innerHTML = ratings[3]

        document.getElementById("fee0").innerHTML = fees[0]
        document.getElementById("fee1").innerHTML = fees[1]
        document.getElementById("fee2").innerHTML = fees[2]
        document.getElementById("fee3").innerHTML = fees[3]
    })

  

    // const myJSON = JSON.stringify(data)
    // document.getElementById("demo").innerHTML = myJSON