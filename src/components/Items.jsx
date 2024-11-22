import styles from "./Items.module.css";

export function Items({ guns }) {
  let images = guns.map((gun) => {
    let url = gun;

    let arrayControl = url.split("");

    if (arrayControl[arrayControl.length - 5] === "h") {
      return (
        <div className={styles.card}>
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
            <button>Add to cart</button>
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
