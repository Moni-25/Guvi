import { useState } from "react";
import Billboard from "../Billboard/bill_index";


export default function ProductCard() {
    {/* Rendering Card Product */}
    // function renderRatings(rating = 0) {
    //   let ratingsNode = [];
    //   for (let i = 0; i < rating; i++) {
    //     ratingsNode.push(<div className="bi-star-fill"></div>);
    //   }
    //   return ratingsNode;
    // }

    let [cart1, setCart1] = useState("Add to Cart");
    let [cart2, setCart2] = useState("Add to Cart");
    let [cart3, setCart3] = useState("Add to Cart");
    let [cart4, setCart4] = useState("Add to Cart");
    let [cart5, setCart5] = useState("Add to Cart");
    let [cart6, setCart6] = useState("Add to Cart");
    
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)
    const [count5, setCount5] = useState(0)
    const [count6, setCount6] = useState(0)

    let totalCount = 0;
    //console.log(cart, count)
    function handleCart1(){
        if(cart1 == "Add to Cart")
        {
            //cart = "Removed" 
            setCart1("Remove from Cart")
            setCount1(count1 + 1);
        }
        else{
            //cart = "Add"
            setCart1("Add to Cart")
            setCount1(count1 - 1);
        }
    }
    function handleCart2(){
        if(cart2 == "Add to Cart")
        {
            //cart = "Removed" 
            setCart2("Remove from Cart")
            setCount2(count2 + 1);
        }
        else{
            //cart = "Add"
            setCart2("Add to Cart")
            setCount2(count2 - 1);
        }
    }
    function handleCart3(){
        if(cart3 == "Add to Cart")
        {
            //cart = "Removed" 
            setCart3("Remove from Cart")
            setCount3(count3 + 1);
        }
        else{
            //cart = "Add"
            setCart3("Add to Cart")
            setCount3(count3 - 1);
        }
    }
    function handleCart4(){
        if(cart4 == "Add to Cart")
        {
            //cart = "Removed" 
            setCart4("Remove from Cart")
            setCount4(count4 + 1);
        }
        else{
            //cart = "Add"
            setCart4("Add to Cart")
            setCount4(count4 - 1);
        }
    }
    function handleCart4(){
        if(cart4 == "Add to Cart")
        {
            //cart = "Removed" 
            setCart4("Remove from Cart")
            setCount4(count4 + 1);
        }
        else{
            //cart = "Add"
            setCart4("Add to Cart")
            setCount4(count4 - 1);
        }
    }
    function handleCart5(){
        if(cart5 == "Add to Cart")
        {
            //cart = "Removed" 
            setCart5("Remove from Cart")
            setCount5(count5 + 1);
        }
        else{
            //cart = "Add"
            setCart5("Add to Cart")
            setCount5(count5 - 1);
        }
    }
    function handleCart6(){
        if(cart6 == "Add to Cart")
        {
            //cart = "Removed" 
            setCart6("Remove from Cart")
            setCount6(count6 + 1);
        }
        else{
            //cart = "Add"
            setCart6("Add to Cart")
            setCount6(count6 - 1);
        }
    }
    totalCount = count1+count2+count3+count4+count5+count6;

    console.log(cart1, "Count1 : ", count1)
    console.log(cart2, "Count2 : ", count2)
    console.log(cart3, "Count3 : ", count3)    
    console.log(cart4, "Count4 : ", count4)
    console.log(cart5, "Count5 : ", count5)
    console.log(cart6, "Count6 : ", count6)

    console.log("Total Count = ", totalCount)
  
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
          ByOnline
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              {/* <Link
                className="nav-link active"
                aria-current="page"
                to="/home/MensTees"
              >
                Home
              </Link> */}
              <a class="nav-link active" aria-current="page" href="#!">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/*<li>
                   <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home/mens"
                  >
                    Mens Collections
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home/womens"
                  >
                    Womens Collections
                  </Link>
                </li> */}
                <li><a class="dropdown-item" href="#!">All Products</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
              </ul>
            </li>
          </ul>

            {/* By using Link coonect Routes */}

          {/* <Link to="/cart">
            <button className="btn btn-outline-dark" type="submit">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                0
              </span>
            </button>
          </Link> */}

        <form class="d-flex">
            <button class="btn btn-outline-dark" type="submit">
                <i class="bi-cart-fill me-1"></i>
                                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">{totalCount}</span>
            </button>
        </form>
        </div>
      </div>
    </nav>

          <Billboard/>
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                            
                                    <h5 className="fw-bolder">Fancy Product</h5>
                            
                                    $40.00 - $80.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                            
                                    <h5 className="fw-bolder">Special Item</h5>
                            
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                            
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <a className="btn btn-outline-dark mt-auto" href="#" 
                                onClick={() => handleCart1()}>{cart1}</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                            
                                    <h5 className="fw-bolder">Sale Item</h5>
                            
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"
                                onClick={() => handleCart2()}>{cart2}</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body
                             p-4">
                                <div className="text-center">
                            
                                    <h5 className="fw-bolder">Popular Item</h5>
                            
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                            
                                    $40.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"
                                onClick={() => handleCart3()}>{cart3}</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                            
                                    <h5 className="fw-bolder">Sale Item</h5>
                            
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"
                                onClick={() => handleCart4()}>{cart4}</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                            
                                    <h5 className="fw-bolder">Fancy Product</h5>
                            
                                    $120.00 - $280.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                            
                                    <h5 className="fw-bolder">Special Item</h5>
                            
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                            
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"
                                onClick={() => handleCart5()}>{cart5}</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    $40.00
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"
                                onClick={() => handleCart6()}>{cart6}</a></div>
                            </div>
                        </div>
                    </div>
        </div>
        </div>
      </section>
    </div>

    //   <div className="col mb-5">
    //     <div className="card h-100">
    //       <div
    //         className="badge bg-dark text-white position-absolute"
    //         style={{ top: "0.5rem", right: "0.5rem" }}
    //       >
    //         Sale
    //       </div>
  
    //       <img className="card-img-top" src={data.image} alt="..." />
  
    //       <div className="card-body p-4">
    //         <div className="text-center">
    //           <h5 className="fw-bolder">{data.name}</h5>
    //           <div className="d-flex justify-content-center small text-warning mb-2">
    //             {renderRatings(data.rating)}
    //           </div>
    //           <span className="text-muted text-decoration-line-through">
    //             ${data.normalCost}
    //           </span>
    //           ${data.actualCost}
    //         </div>
    //       </div>
  
    //       <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
    //         <div className="text-center">
    //           <a className="btn btn-outline-dark mt-auto" href="#">
    //             Add to cart
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    );
  }