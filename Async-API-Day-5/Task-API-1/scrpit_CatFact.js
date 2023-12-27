function displayCard(data)
{
    for(var i in data)
    {
        const e = data[i]
        console.log(e.user, e.status.verified)
        let div1 = document.getElementById('root');
        let card = document.createElement('div')
        card.innerHTML = 
        `<div class='row'>
        <div class="table-responsive"> 
        <table class="table table-bordered">
            <thead class="head">
                <tr>
                    <th colspan="12" style="background-color: #808080">Cat Facts</th>
                </tr>
                <tr>
                <th>Verified</th>
                <th>Sent Count</th>
                <th>ID</th>
                <th>User</th>
                <th>Test</th>
                <th>Val</th>
                <th>Source</th>
                <th>Updated At</th>
                <th>Type</th>
                <th>Created At</th>
                <th>Deleted</th>
                <th>Used</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${e.status.verified}</td>
                    <td>${e.status.sentCount}</td>
                    <td>${e._id}</td>
                    <td>${e.user}</td>
                    <td>${e.text}</td>
                    <td>${e.__v}</td>                    
                    <td>${e.source}</td>
                    <td>${e.updatedAt}</td>
                    <td>${e.type}</td>
                    <td>${e.createdAt}</td>
                    <td>${e.deleted}</td>
                    <td>${e.used}</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>`
        div1.appendChild(card)
        document.body.appendChild(div1);
    }
}

async function getData(){
    try{
        let res = await fetch("https://cat-fact.herokuapp.com/facts", {method: 'GET'})
        let data = await res.json();
        displayCard(data)
    }
    catch(error){
        console.log(error)
    }
}

getData()