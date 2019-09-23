import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Toolbar,
  TableHead,
} from "@material-ui/core";
import { CartPaper, Moto } from "./components";
import { currency } from "../../services/formatter";

const Row = ({ location, minimumPrice, maximumPrice }) => (
  <TableRow>
    <TableCell>
      <Typography variant="subtitle2">{location}</Typography>
    </TableCell>
    <TableCell align="right">
      <Typography variant="subtitle2">{`${currency(minimumPrice)} a ${currency(
        maximumPrice,
      )}`}</Typography>
    </TableCell>
  </TableRow>
);

const DeliveryNotice = () => (
  <CartPaper>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell colSpan={99}>
            <Toolbar>
              <Moto />
              <Typography variant="body2">
                Te cobrarán tu domicilio al momento de la entrega. El costo
                depende de tu ubicación.
              </Typography>
            </Toolbar>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <Row location="Bucaramanga 1" minimumPrice={4000} maximumPrice={6000} />
        <Row location="Bucaramanga 2" minimumPrice={6000} maximumPrice={8000} />
        <Row location="Piedecuesta" minimumPrice={12000} maximumPrice={14000} />
      </TableBody>
    </Table>
  </CartPaper>
);

export default DeliveryNotice;