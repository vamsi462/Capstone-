import React, { useState, useEffect } from "react";
import { getCart } from "./cartHelpers";
import Layout from "./Layout";
import Card from "./Card";
import { Link } from "react-router-dom";
import Checkout from "./checkout";
// import Checkout from "./Checkout";

const Cart = () => {

  const [items, setItems] = useState([]);
  //const [run, setRun] = useState(false);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const showItems = (items) => {
    return (
      <div>
        <h2>Your cart has {`${items.length}`} items</h2>
        <hr />
        {items.map((work, i) => (
          <Card
            key={i}
            work={work}
            showAddToCartButton={false}
            cartUpdate={true}
            showRemoveWorkButton={true}
            showEditButton={true}
  
          />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to="/">Continue finding and Accepting</Link>
    
    </h2>
  );

  return (
    <Layout
      title="Add Works To cart"
      description="Manage your cart items. Add remove checkout or continue finding...."
      className="container-fluid">
      <div className="row">
        <div className="col-6">
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>
          <Checkout works={items}/>

        </div>
    </Layout>
  );
};

export default Cart;