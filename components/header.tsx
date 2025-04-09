
"use client";

import Link from "next/link";
import styles from "@/styles/componentes/header.module.css";
export default function Header() {

  return (

    <header className = {styles.header}>

      <div className = {styles.headerBtn}>
      <Link href="/">Deja-Vú</Link>
      </div>

      <div className = {styles.headerBtn}>
      <Link href="/catalogo">Catálogo</Link>
      </div>

      <div className = {styles.headerBtn}>
      <Link href="/outros">Outros</Link>
      </div>

    </header>

  );

}
