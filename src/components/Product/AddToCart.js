import React from "react";
import { Button } from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

export const AddToCart = () => (
  <Button color="secondary">
    Elegir &nbsp;
    <ShoppingCart />
  </Button>
);
