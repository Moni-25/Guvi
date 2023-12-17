function printIndependence(countdown = 0, display = () => { }){
    console.log(countdown)
    let div = document.getElementById('root');
        let card = document.createElement('div');
        card.innerHTML = `<div class='card-wrapper'>
            <h3>${countdown}</h3>
        </div>`
        div.appendChild(card);
    let val ="";
    if(display){
       display();
    }
}

setTimeout(printIndependence(10,
    setTimeout(() => printIndependence(9, 
        setTimeout(() => printIndependence(8,
            setTimeout(() => printIndependence(7,
                setTimeout(() => printIndependence(6,
                    setTimeout(() => printIndependence(5,
                        setTimeout(() => printIndependence(4,
                            setTimeout(() => printIndependence(3,
                                setTimeout(() => printIndependence(2,
                                    setTimeout(() => printIndependence(1, 
                                        setTimeout(() => printIndependence("Happy Independence Day", ()=>{}), 200)
                                ),200)
                                ),200)
                            ),200)
                        ),200)
                    ),200)
                ),200)
            ),200)
        ),200)
    ),200)
),200)

function print(){
    
}