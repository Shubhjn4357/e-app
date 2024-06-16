/**
 * An array of routes accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/", "/new-verification"];

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to /.
 * @type {string[]}
 */
export const authRoutes: string[] = [
  "/login",
  "/register",
  "/error",
  "/reset",
  "/new-password",
];
/**
 * An array of routes that are used for protected.
 * These routes will redirect logged in users to /user/**.
 * @type {string[]}
 */
export const privateRoutes: string[] = [
  "/setting",
];

/**
 * The prefix for the API authentication routes.
 * Routes that start with this prefix are used for API authentication purpose.
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The prefix for the API authentication routes.
 * Routes that start with this prefix are used for admin purpose.
 * @type {string}
 */
export const adminPrefix:string="/admin";

// export const adminRoutes: string[] = [
//   "/admin/dashboard",
//   '/admin/product',
//   '/admin/product/add',
//   '/admin/product/edit/[id]',
//   'admin/order'
// ];

/**
 * The default route to redirect to after a successful login.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/";
