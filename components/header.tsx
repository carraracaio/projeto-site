
"use client";

import Link from "next/link";
import styles from "@/styles/componentes/header.module.css";
export default function Header() {

  return (

    <header className = {styles.header}>

      <Link href="/">Deja-Vú</Link>

      <Link href="/catalogo">Catálogo</Link>

      <Link href="/outros">Outros</Link>

    </header>

  );

}
