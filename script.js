// Client Side!!!



// console.log("From the frontend")
// alert("From the frontend")

function showCars(){
    fetch("http://localhost:3000/api/cars")
    .then(res => res.json())
    .then(data => {
        const carsList = document.querySelector("ul#cars-list")

        data.forEach(car => {
            carsList.innerHTML += `
            <li>${car.brand}</li>
            `
        });
    })
}



function handleSubmit(e){
    e.preventDefault()
    console.log("sending...")
    const brand = e.target[0].value
    const data = {brand}

    fetch("http://localhost:3000/api/cars",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(resData => {
        if(resData.errors.length > 0){
            const alert = document.querySelector("#alert")
            
            alert.className = "alert alert-danger"
            alert.role = "alert"

            for (const err of resData.errors) {
                alert.innerHTML +=  err+ "<br/>"
            }
        }
    })

    // fetch("http://localhost:3000/api/cars/7",{
    //     method: "PUT",
    //     data: JSON.stringify({brand: "Tesla"})
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
}


showCars()
