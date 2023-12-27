function displayDetails(data)
{
    let div = document.getElementById('root');
    div.innerHTML = `
    <table>
    <thead>
        <tr>
            <th colspan="4" style="background-color: #ff4d4d">
                <h3 style="color: black">Cat API - Documentation Portal For Cat Images</h3>
            </th>
        </tr>
        <tr>
            <th style="width: 240px; background-color: #ff4d4d">ID</th>
            <th style="width: 603px; background-color: #ff4d4d">URL</th>
            <th style="width: 240px; background-color: #ff4d4d">Width</th>
            <th style="width: 240px; background-color: #ff4d4d">Height</th>
        </tr>
    </thead>
    </table>`
    data.forEach(e => {

        console.log(e.id)
        let detail = document.createElement('tbody')
            detail.innerHTML = `<tr>
            <td style="width: 240px; text-align: center">${e.id}</td>
            <td style="width: 600px">
            <a href="${e.url}" alt="Cat Image">${e.url}</a>
            </td>
            <td style="width: 240px; text-align: center"">${e.width}</td>
            <td style="width: 240px; text-align: center"">${e.height}</td>
        </tr>`
        div.appendChild(detail)
    });
    
}


async function getData()
{
    try{
        let res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10", {method: 'GET'})
        let data = await res.json();
        displayDetails(data)
    }
    catch(error){
        console.error(error)
    }
}

getData();