import styles from "./Items.module.css";

export function Items({ guns }) {
  let images = guns.map((gun) => {
    let url = gun;

    let arrayControl = url.split("");

    if (arrayControl[arrayControl.length - 5] === "h") {
      return (
        <div>
          <img src={url}></img>
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
