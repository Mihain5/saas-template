import { authMiddleware } from "@clerk/nextjs";

// This middleware protects all routes by default
// Public routes are explicitly defined below
export default authMiddleware({
  // Routes that don't require authentication
  publicRoutes: [
    "/", 
    "/sign-in(.*)", 
    "/sign-up(.*)", 
    "/api/webhooks(.*)"
  ],
  // Optional: Customize what happens for signed-in and signed-out users
  // afterAuth(auth, req) {
  //   // Handle users who aren't authenticated
  //   if (!auth.userId && !auth.isPublicRoute) {
  //     return redirectToSignIn({ returnBackUrl: req.url });
  //   }
  // }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}; 