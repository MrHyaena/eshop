import styles from "./Items.module.css";
import { useEffect, useState } from "react";

export function Items({ guns, addToCart }) {
  const [amount, setAmount] = useState(1);
  let images = guns.map((gun, index) => {
    let url = gun.download_url;
    const arrayControl = url.split("");

    if (arrayControl[arrayControl.length - 5] === "h") {
      return (
        <div className={styles.card} key={gun + index}>
          <img src={url} className={styles.img}></img>
          <div className={styles.gunInfo}>
            <h3>Gun</h3>
            <h5>Info:</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              ipsum illum illo perferendis quod magnam consequatur facere esse
              expedita. Cumque ea distinctio inventore, sed officiis commodi et
              soluta voluptas officia!
            </p>
            <h4>{Math.floor(Math.random() * 1000)} USD</h4>
            <div>
              <input
                type="number"
                onChange={(e) => {
                  setAmount(e.target.value);
                  console.log(amount);
                }}
              ></input>
              <button
                onClick={() => {
                  addToCart(gun, amount);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <>
      <div className={styles.board}>{images}</div>
    </>
  );
}
