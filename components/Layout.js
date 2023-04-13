
import Link from "next/link"

export default function Layout({ children }) {
    return (
        <>
            <Link href="/"></Link>
            {children}
           

        </>
    )
}

// components/Layout.js
// import React from "react";

// const Layout = ({ children }) => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-white shadow">
//         <div className="container mx-auto px-4 py-4">
//           <h1 className="text-2xl font-semibold text-gray-800">Dagens Maträtt</h1>
//         </div>
//       </header>
//       <main className="container mx-auto px-4 py-8">{children}</main>
//     </div>
//   );
// };

// export default Layout;
