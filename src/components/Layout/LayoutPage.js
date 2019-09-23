import React from "react";
import styled from "styled-components";
import Header from "./Header";
import ProductsContainer from "../Products";
import Footer from "./Footer";
import CartContainer from "../Cart";
import { CssBaseline, Container } from "@material-ui/core";

const Products = styled(Container)`
  padding: 96px 0 96px;
`;

const LayoutPage = ({
  cart,
  addToCart,
  removeFromCart,
  handleOpenCart,
  handleCloseCart,
}) => (
  <CssBaseline>
    <Header
      handleOpenCart={handleOpenCart}
      productsNumber={cart.items.length}
    />

    <Products maxWidth="lg">
      <ProductsContainer
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </Products>

    <Footer handleOpenCart={handleOpenCart} />

    <CartContainer
      cart={cart}
      removeFromCart={removeFromCart}
      handleCloseCart={handleCloseCart}
    />
  </CssBaseline>
);

export default LayoutPage;
