import {useState} from "react";

function MyComponent() {
  
  const [quantity , setQuantity] = useState();
  const [name , setName] = useState("guest");
  const [comment , setComment] = useState("");
  const [payment , setPayment] = useState("");
  const [shipping , setShipping] = useState("");
  const handleNameChange = (e) => {setName(e.target.value)};
  const handleQuantityChange = (e) => {setQuantity(e.target.value)};
  const handleComment = (e) => {setComment(e.target.value)};
  const handlePayment = (e) => {setPayment(e.target.value)};
  const handleShipping = (e) => {setShipping(e.target.value)};

      return(
      <>
      <div>

          <input value = {name} onChange={handleNameChange}/>
          <p>Name: {name}</p>
          <input value = {quantity} onChange={handleQuantityChange}type = "number" />
          <p>Quantity: {quantity}</p>
          <input value = {comment} onChange={handleComment} placeholder="leave comment here" />
          <p>Comment: {comment}</p>

          <select value = {payment} onChange={handlePayment}>
            <option value = "">Select an option</option>
            <option value = "Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value = "Giftcard">Giftcard</option>
          </select>
          <p>Payment: {payment}</p>

          <label>
                <input type = "radio" value = "pick up" checked = {shipping === "pick up"} onChange={handleShipping}/>Pick up
          </label> <br/>
          <label>
                <input type = "radio" value = "delivery" checked = {shipping === "delivery"} onChange={handleShipping}/>Delivery
          </label>


          <p>Shipping: {shipping}</p>

      </div>
      </>
      );
}

export default MyComponent