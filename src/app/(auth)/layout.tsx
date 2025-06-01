// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import  "./style.css"

// const navLinks = [
//   { name: "register", href: "/register" },
//   { name: "login", href: "/login" },
//   { name: "forgot password", href: "/forgot-password" },
// ];

// export default function AuthLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathName = usePathname();

//   return (
//     <html lang="en">
//       <body>
//         <nav>
//           {navLinks.map((link) => {
//             const isActive =
//               pathName === link.href ||
//               (pathName.startsWith(link.href) && link.href !== "/");

//             return (
//               <Link
//                 href={link.href}
//                 key={link.name}
//                 className={isActive ? "font-bold mr-4 active" : "text-blue-500 mr-4"}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
//         </nav>
//         {children}
//       </body>
//     </html>
//   );
// }


"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css"
const navLinks = [
  {name: "register", href: "/register"},
  {name: "login", href: "/login"},
  {name: "forgot password", href: "/forgot-password"},
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()
  return (
    <html lang="en">
      <body>
        {
          navLinks.map((link) => {
            const isActive = 
              pathName === link.href || (pathName.startsWith(link.href) && pathName !== '/')
            return (
              <Link className={
                isActive ? "active" : " "
              } href={link.href} key={link.name}>{link.name}</Link>
            )
          })
        }
        {children}
      </body>
    </html>
  );
}
