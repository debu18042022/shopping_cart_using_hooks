import React, { useContext } from "react";
import { Contextdata } from "./MyContext";

function Bill() {
  const [cart, set_cart, Amount, set_total_amount] = useContext(Contextdata);
  let temp_cart = cart;

  const increase = (event) => {
    let amount = 0;
    let index_id = parseInt(event.target.id);
    temp_cart.map((item, index) => {
      if (item.id === index_id) {
        temp_cart[index].quantity += 1;
      }
      amount += item.quantity * item.price;
      console.log(amount);
      set_total_amount(amount);
    });
    console.log(cart);
    set_cart(temp_cart);
  };

  const decrease = (event) => {
    let amount = 0;
    let index_id = parseInt(event.target.id);
    temp_cart.map((item, index) => {
      if (item.id === index_id) {
        temp_cart[index].quantity -= 1;
        if (temp_cart[index].quantity === 0) {
          temp_cart.splice(index, 1);
        }
      }
      amount += item.quantity * item.price;
      console.log(amount);
      set_total_amount(amount);
    });
    set_cart(temp_cart);
    console.log(cart);
  };

  const remove_product = (event) => {
    set_cart([]);
    set_total_amount(0);
    temp_cart = [];
  };
  if (Amount !== 0) {
    return (
      <div className="bill_main_container">
        {cart.map((item, index) => (
          <div className="bill_container">
            <div style={{width:"25%"}}>
              <img src={item.photograph} alt="" style={{ width: "15vw",height:"30vh"}}></img>
            </div>
            <div
              className="text_bill"
              style={{ display: "flex", justifyContent: "space-between",width:"65%"}}
            >
              <div className="item_name_container" style={{display:"grid",placeItems:"center",marginLeft:"",fontSize:"2vw"}}>
                <h4>{item.name}</h4>
              </div>
              <div style={{display:"grid",placeItems:"center"}}>
              <div style={{textAlign:"center"}}>
                <button style={{border:"none"}} onClick={increase} id={item.id}>
                  +
                </button>
                <h4 style={{ display: "inline-block",fontSize:"1.5vw" }}>{item.quantity}</h4>
                <button
                  style={{border:"none"}}
                  onClick={decrease}
                  id={item.id}
                >
                  -
                </button>
              </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "grid",
                  placeItems: "center",
                
                }}
              >
                <h4 style={{fontSize:"1.5vw"}}>$ {item.price * item.quantity}</h4>
              </div>
            </div>
          </div>
        ))}
        <div className="amount_container">
          <div className="Total_amount">
            <span>Total Amount</span>
            <span>: ${Amount}</span>
          </div>
          <div  style={{backgroundColor:"rgb(243, 236, 236)"}}  className="delete_icons">
            <i class="fa-solid fa-trash" onClick={remove_product}></i>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart_empty_icons">
        <div>
          <i class="fa-solid fa-cart-plus"></i>
          <h1>Cart is Empty</h1>
        </div>
      </div>
    );
  }
}

export default Bill;
