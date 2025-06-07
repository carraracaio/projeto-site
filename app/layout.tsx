

"use client";
import { Header} from "../components";
import "@/styles/global.css"; 

export default function RootLayout({ children }: { children: React.ReactNode }) 
{
  return (
    <html lang="pt-br">
      <body> 
       <Header />
            {children}
      </body>
    </html>
  );
}
