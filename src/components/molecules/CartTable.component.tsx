import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import { TableBody } from "@material-ui/core";
import Book from "../../types/book.type";
import DeleteIcon from "@material-ui/icons/Delete";

type Props = {
  RowHead?: Array<string>;
  TableRowArray?: Array<Book>;
  TableType?: string;
  children?: any;
  AlignType?: "inherit" | "left" | "center" | "justify";
  WithoutIcon?: boolean;
};

const CartTable: React.FC<Props> = (props: Props) => {
  const { RowHead, TableRowArray, TableType, AlignType, WithoutIcon } = props;

  const RenderRows = (RowsContent, RowType?: string) => {
    return RowType == "Head" ? (
      <TableRow>
        {RowsContent.map((cell, key) => (
          <TableCell align={AlignType ? AlignType : "left"} key={key}>
            {cell}
          </TableCell>
        ))}
      </TableRow>
    ) : (
      RowsContent.map((row, key) => (
        <TableRow key={key}>
          <TableCell align={AlignType ? AlignType : "right"}>
            {row.bookTitle}
          </TableCell>
          <TableCell align={AlignType ? AlignType : "right"}>
            {row.quantity ? row.quantity : ""}
          </TableCell>
          <TableCell align={AlignType ? AlignType : "right"}>
            {row.price}
          </TableCell>
          <TableCell align={AlignType ? AlignType : "right"}>
            {!WithoutIcon && <DeleteIcon className={"icon"} />}
          </TableCell>
        </TableRow>
      ))
    );
  };

  const RenderTableType = (TableType, RowsContent) => {
    switch (TableType) {
      case "Head":
        return <TableHead>{RenderRows(RowsContent, "Head")}</TableHead>;
      default:
        return <TableBody>{RenderRows(RowsContent)}</TableBody>;
    }
  };
  return RenderTableType(TableType, TableRowArray ? TableRowArray : RowHead);
};

// return (
// <TableBody>
//   {rows.map(row => (
//     <TableRow key={row.id}>
//       <TableCell component="th" scope="row">
//         {row.name}
//       </TableCell>
//       <TableCell align="right">{row.calories}</TableCell>
//       <TableCell align="right">{row.fat}</TableCell>
//       <TableCell align="right">{row.carbs}</TableCell>
//       <TableCell align="right">{row.protein}</TableCell>
//     </TableRow>
//   ))}
// </TableBody>
// );

export default CartTable;
