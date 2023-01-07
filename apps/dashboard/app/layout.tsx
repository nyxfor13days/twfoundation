import type { LayoutProps } from "../types/Layout";
import "./stylesheets/globals.scss";

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
