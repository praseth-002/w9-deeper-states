import React from "react";

export default function OrderCard({ onOrders, onUpdateQuantity }) {
  return (
    <>
      {onOrders.map((order, index) => (
        <div className="order" key={index}>
          <div>
            <h4>{order.product}</h4>
            <small>${order.price}</small>
          </div>

          <div className="order-quantity">
            <button className="order-button" onClick={() => onUpdateQuantity(index, -1)}>
              -
            </button>
            <h4>{order.quantity}</h4>
            <button className="order-button" onClick={() => onUpdateQuantity(index, 1)}>
              +
            </button>
          </div>
        </div>
      ))}
    </>
  );
}


