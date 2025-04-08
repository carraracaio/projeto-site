

"use client";
import { Header, Sidebar } from "../components";
import styles from "@/styles/componentes/layout.module.css"
import "@/styles/global.css"; 

export default function RootLayout({ children }: { children: React.ReactNode }) 
{
  return (
    <html lang="pt-br">
      <body>
        
       <Header />

       <div className= {styles.container}>

       <div style={{ display: "flex" }}>  

          <Sidebar />

          <main className = {styles.maincontent}
          
          style={{ flex: 1, 
                   padding: "10px", 
                   marginLeft: "220px" 
                   }}>
            
            {children}

          </main>

        </div>

        </div>

      </body>

    </html>
  );
}
