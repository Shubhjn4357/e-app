import React from 'react'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "../ui/table";

interface OrderTableProps {
  header: string[];
  data: any[];
  render: React.ElementType<{ item: any }>;
}
const OrderTable = ({header,data,render}:OrderTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
            {header.map((item, key) => (
                <TableHead className="hidden sm:table-cell" key={key}>{item}</TableHead>
            ))}
        </TableRow>
      </TableHeader>
      <TableBody>
    {data.map((item, key) => {
        const Comp = render;
        return <Comp key={key} item={item}/>
    })}
      </TableBody>
    </Table>
  );
}



export default OrderTable