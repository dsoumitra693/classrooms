import React from 'react';
import "../globals.css";

/**
 * Wraps the provided content in a `React.Fragment` to provide a consistent layout for authentication-related pages.
 * @param children - The content to be rendered within the `React.Fragment`.
 * @returns A JSX element representing the layout of an authentication page, with the `children` rendered within a `React.Fragment`.
 */
const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
}

export default AuthLayout;
