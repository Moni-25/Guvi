
function PriceCard({ price = {}}) {
    let isAvail = [], notAvail = [];
    if(price.title == "Free"){
        isAvail.push(price.isAvailable.unit)
        isAvail.push(price.isAvailable.storage)
        isAvail.push(price.isAvailable.project)
        isAvail.push(price.isAvailable.access)
        notAvail.push(price.notAvailable.pro)
        notAvail.push(price.notAvailable.support)
        notAvail.push(price.notAvailable.domain)
        notAvail.push(price.notAvailable.report)
    }
    else if(price.title == "Plus"){
      isAvail.push(price.isAvailable.unit)
      isAvail.push(price.isAvailable.storage)
      isAvail.push(price.isAvailable.project)
      isAvail.push(price.isAvailable.access)
      isAvail.push(price.isAvailable.pro)
      isAvail.push(price.isAvailable.support)
      notAvail.push(price.notAvailable.domain)
      notAvail.push(price.notAvailable.report)
    }
    else if(price.title == "Pro"){
      isAvail.push(price.isAvailable.unit)
      isAvail.push(price.isAvailable.storage)
      isAvail.push(price.isAvailable.project)
      isAvail.push(price.isAvailable.access)
      isAvail.push(price.isAvailable.pro)
      isAvail.push(price.isAvailable.support)
      isAvail.push(price.isAvailable.domain)
      isAvail.push(price.isAvailable.report)
    }
    console.log(isAvail)
    return (
      <div className="card">
        <div className="card-header">
          <h5 style={{color: "grey", marginTop: "0"}}>{price.title}</h5> 
          <h1 style={{color: "black", textAlign: "center", marginTop: "0"}}>
                        ${price.month}/month</h1> 
        </div>
        <div className="card-body" id="plus">
          {isAvail.map((e) => (
            <a>
            <p style={{color: "black", textAlign: "start"}}>
              <i class="bi-check2">
                <span style={{paddingLeft: "40px", textAlign: "inherit"}}>{e}</span>
              </i>
            </p>
            </a>
          ))
          }
          {notAvail.map((e) => (
            <p style={{color: "black", textAlign: "start"}}>
              <i class="bi-x">
                <span style={{paddingLeft: "40px"}}>{e}</span>
              </i>
            </p>
          ))
          } 
        </div>
        <div className="card-footer">
          <button className="btn btn-outline-primary btn-block">BUTTON</button>
        </div>
      </div>
    );
  }
  
  export default PriceCard;