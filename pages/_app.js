import "../styles/globals.css";
import React from "react";
import NavigationLayout from "../components/layout/NavigationLayout";

import { WishlistProvider } from "react-use-wishlist";
import { CartProvider } from "react-use-cart";
export default function MyApp({ Component, pageProps }) {
  return (
    
      <WishlistProvider>
        <CartProvider>
        <NavigationLayout>
          <Component {...pageProps} />
          </NavigationLayout>
        </CartProvider>
      </WishlistProvider>
    
  );
}
