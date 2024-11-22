import { useState } from "react";
import sidebar from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <>
      <div className={sidebar.header}>
        <a href="https://www.google.com/">Home</a>
        <a>Shop</a>
        <a>Courses</a>
      </div>
    </>
  );
}
