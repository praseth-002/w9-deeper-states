import { useState } from "react";

export default function StuffForm({onAddStuff}) {
  const [stateItem, setItem] = useState("");
  const [statePrice, setPrice] = useState("");
  function onItem(event) {
    setItem(event.target.value);
  }
  function onPrice(event) {
    setPrice(event.target.value);
  }
  function logButt() {
    if (stateItem.trim() === "" || statePrice.trim() === "") return;

    const newStuff = { name: stateItem, price: parseFloat(statePrice) };
    onAddStuff(newStuff);
    setItem("");
    setPrice("");
  }
  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" value={stateItem} onChange={onItem}/>

      <p>Stuff price</p>
      <input type="search" placeholder="15" value={statePrice} onChange={onPrice}/>

      <button onClick={logButt} type="button">Add Stuff</button>
    </form>
  );
}
