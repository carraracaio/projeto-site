
"use client";

import Link from "next/link";
import styles from "@/styles/componentes/header.module.css";
export default function Header() {

  return (

    <header className = {styles.header}>

      
      <Link href="/" className = {styles.headerBtn}>Deja-Vú</Link>
    
      <Link href="/catalogo" className = {styles.headerBtn}>Catálogo</Link>
    
      <Link href="/sobre" className = {styles.headerBtn}>Sobre</Link>
      

    </header>

  );

}
