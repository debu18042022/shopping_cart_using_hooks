import React, { useContext} from "react";
import "./Data.json";
import { Contextdata } from "./MyContext";
const data = require("./Data.json");

export default function Cart() {
  let product = data.products;
  const [cart ,set_cart,Amount,set_total_amount]= useContext(Contextdata);
  
  //function which push the products inside the cart arrayfunction
  const add_Product = (event) => {             
    let index_id = parseInt(event.target.id);
    let exist_index;
    let flag =1;
    let amount=0;
    cart.map((item,index) => {
        if(item.id === index_id){
           flag=0
           alert("already exist");
           exist_index = index
        }
    })
    
    if(flag === 1){
        set_cart(cart => [...cart, product[index_id-1]]);
        cart.map((item) => {
          amount += (item.quantity * item.price)
        })
        // console.log("amount is "+amount);
        // set_total_amount(amount);
    }
    if(flag === 0){
        cart[exist_index].quantity += 1;
        cart.map((item) => {
          amount += (item.quantity * item.price)
        })
        // console.log("amount is "+amount);
        // set_total_amount(amount);
    }
    console.log(cart);
    console.log(Amount);
  }

  return (
    <div className="main_container">
      {product.map((prod) => (
        <div className="single_items">
          <div className="internal_div">
            <h3 style={{marginTop:"20px",marginBottom:"20px"}}>{prod.offer}</h3>
            <div className="product_image">
              <img
                src={prod.photograph}
                alt="abc"
              ></img>
            </div>
            <div>
                <h3>{prod.name}</h3>
                <div></div>
                <p>FREE Delivery on your first order</p>
                <div></div>
                <div><i className="icons_star" class="fa-solid fa-star" style={{ color: "#9df716" }}></i>
                <i className="icons_star" class="fa-solid fa-star" style={{ color: "#9df716" }}></i>
                <i className="icons_star" class="fa-solid fa-star" style={{ color: "#9df716" }}></i>
                <i className="icons_star" class="fa-solid fa-star" style={{ color: "#9df716" }}></i>
                </div>
            </div>
            <div style={{ display: "grid", placeItems: "center"}}>
              <button style={{ display: "grid", placeItems: "center",padding:"1vw",paddingBottom:"2vw",textAlign:"center" ,backgroundColor:"rgb(187, 106, 124)"}} onClick={add_Product} id={prod.id}>Add To Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

<i className="icons_star" class="fa-solid fa-star" style={{ color: "green" }}></i>