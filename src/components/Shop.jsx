import { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Items } from "./Items";

function Shop() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [cartl, setCartl] = useState(0);

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/pubg/api-assets/contents/Assets/Item/Weapon/Handgun",
      {
        mode: "cors",
        header: {},
      }
    )
      .then((response) => response.json())
      .then((response) => setGuns(response))
      .then(() => console.log())
      .catch((error) => console.error(error));
  }, []);

  function addToCart(item, amount) {
    const newArray = cart;
    for (let i = 0; i < amount; i++) {
      newArray.push(item);
    }

    setCart(newArray);
    console.log(cart);
    setCartl(newArray.length);

    const filteredArray = filtered;

    const controlArray = filtered.filter((gun) => gun.name == item.name);

    if (controlArray.length < 1) {
      filteredArray.push(item);
      setFiltered(filteredArray);
    }
  }

  function deleteItem(item) {
    const newArray = cart;
    let indexof = newArray.indexOf(item);
    newArray.splice(indexof, 1);
    setCart(newArray);
    setCartl(newArray.length);
    const filteredArray = filtered;

    const controlArray = cart.filter((gun) => gun.name == item.name);
    let indexofitem = filteredArray.indexOf(item);

    if (controlArray == 0) {
      filteredArray.splice(indexofitem, 1);
      setFiltered(filteredArray);
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Header className={styles.header} cart={cart} cartl={cartl} />
        <div id="cart" class="cart" key="cart">
          <h4>Your cart:</h4>
          {filtered.map((item, index) => {
            const countArray = cart.filter((gun) => gun.name == item.name);
            let count = countArray.length;

            return (
              <>
                <div key={"card" + index + 1}>
                  <h5>{item.name}</h5>
                  <h5>Price: {Math.floor(Math.random() * 1000) * count}</h5>
                  <h5>Count: {count}</h5>
                  <button
                    onClick={() => {
                      deleteItem(item);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </>
            );
          })}
          <button>Order</button>
        </div>
        <div className="board" id="board">
          <Items guns={guns} addToCart={addToCart} />
        </div>
      </div>
    </>
  );
}

export default Shop;
