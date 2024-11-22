import { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Items } from "./Items";

function Shop() {
  const [guns, setGuns] = useState([
    "https://raw.githubusercontent.com/pubg/api-assets/master/Assets/Item/Weapon/Handgun/Item_Weapon_DesertEagle_C_h.png",
    "https://raw.githubusercontent.com/pubg/api-assets/master/Assets/Item/Weapon/Handgun/Item_Weapon_G18_C_h.png",
    "https://raw.githubusercontent.com/pubg/api-assets/master/Assets/Item/Weapon/Handgun/Item_Weapon_M1911_C_h.png",
    "https://raw.githubusercontent.com/pubg/api-assets/master/Assets/Item/Weapon/Handgun/Item_Weapon_M9_C_h.png",
    "https://raw.githubusercontent.com/pubg/api-assets/master/Assets/Item/Weapon/Handgun/Item_Weapon_NagantM1895_C_h.png",
    "https://raw.githubusercontent.com/pubg/api-assets/master/Assets/Item/Weapon/Handgun/Item_Weapon_Rhino_C_h.png",
    "https://raw.githubusercontent.com/pubg/api-assets/master/Assets/Item/Weapon/Handgun/Item_Weapon_Sawnoff_C_h.png",
  ]);

  //useEffect(() => {
  //  fetch(
  //    "https://api.github.com/repos/pubg/api-assets/contents/Assets/Item/Weapon/Handgun",
  //    {
  //      mode: "cors",
  //      header: {},
  //    }
  //  )
  //    .then((response) => response.json())
  //    .then((response) => setGuns(response))
  //    .then(() => console.log([guns]))
  //    .catch((error) => console.error(error));
  //}, []);

  return (
    <>
      <div className={styles.wrapper}>
        <Header className={styles.header} />
        <div className={styles.board}></div>
        <Sidebar />

        <Items guns={guns} />
      </div>
    </>
  );
}

export default Shop;
