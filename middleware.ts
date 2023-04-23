// export { default } from "next-auth/middleware";
// import { withAuth } from "next-auth/middleware";
export { default } from "next-auth/middleware";

// import { NextRequest, NextResponse } from "next/server";

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   // function middleware(req: any) {
//   //   const isAdmin = req.nextauth.token?.user?.roles[0] === "ADMIN";
//   //   if (req.nextUrl.pathname.startsWith("/admin") && !isAdmin) {
//   //     console.log("hello");
//   //     console.log(isAdmin);

//   //     // return NextResponse.rewrite(new URL("/login"));
//   //   }

//   //   // if (
//   //   //   req.nextUrl.pathname.startsWith("/user") &&
//   //   //   req.nextauth.token?.role !== "user"
//   //   // )
//   //   //   return NextResponse.rewrite(
//   //   //     new URL("/auth/login?message=You Are Not Authorized!", req.url)
//   //   //   );
//   // },

//   {
//     callbacks: {
//       authorized: ({ req, token }) => {
//         return !!token;
//       },
//     },
//   }
// );

export const config = {
  matcher: ["/admin/:path*"],
};
