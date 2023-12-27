function displayCard(data)
{
        
        console.log(data.message, data.status)
        let div1 = document.getElementById('root');
        let card = document.createElement('div')
        card.innerHTML = 
        `<div class='row-lg-12'>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th colspan=2 style="background-color: #808080">
                            <h4>Open Source Dog Pictures</h4>
                        </th>
                    </tr>
                    <tr>
                    <th style="background-color: #808080">Message</th>
                    <th style="background-color: #808080">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="background-color: #dfbf9f">
                        <a href="${data.message}" alt="Dog Image" height="100px" width="150px"/>${data.message}
                        </td>
                        <td style="width:460px; background-color: #dfbf9f">${data.status}</td>
                    </tr>
                </tbody>
            </table>
        </div>`
        div1.appendChild(card)
        document.body.appendChild(div1);
    
}

async function getData(){
    try{
        let res = await fetch("https://dog.ceo/api/breeds/image/random", {method: 'GET'})
        let data = await res.json();
        displayCard(data)
    }
    catch(error){
        console.log(error)
    }
}

getData()