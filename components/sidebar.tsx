
"use client";
import React, { useState } from "react";
import styles from "@/styles/componentes/sidebar.module.css";
export default function Sidebar(){

  const [isOpen, setIsOpen] = useState(false);

  const [isFixed, setIsFixed] = useState(false);

  const handleToggle = () => 

    {
    setIsFixed(!isFixed);
  };

    return (

      <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed} ${isFixed ? styles.fixed : ""}`}

      onMouseEnter={() => !isFixed && setIsOpen(true)}

      onMouseLeave={() => !isFixed && setIsOpen(false)}

      >
  
  <button className={styles.toggleBtn} onClick={handleToggle}>

    {isFixed ? "←" : "→"}

  </button>
      {isOpen ? (

      <div  className = {styles.sidebarcontent}>

       
        <div className={styles.sidebarBtnWrapper }>
        <button className={styles.sidebarBtn}>opção 1</button>
        </div>

        <div className={styles.sidebarBtnWrapper }>
        <button className={styles.sidebarBtn}>opção 2</button>
        </div>

        <div className={styles.sidebarBtnWrapper }>
        <button className={styles.sidebarBtn}>opção 3</button>
        </div>

       
      
      </div>

     ) : null }

  </div>

    );
  
}