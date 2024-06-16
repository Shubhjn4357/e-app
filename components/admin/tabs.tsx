import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { File, ListFilter } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import OrderTable from "./orderTable";
import { Badge } from "../ui/badge";
import { TableCell, TableRow } from "../ui/table";
const header = [
  "Type",
  "Status",
  "Date",
  "Amount"
]
interface DataType {
  name: string;
  email: string;
  type: string;
  status: string;
  date: string;
  amount: string;
}
const Data = [
  {
    name: "Alice",
    email: "alice.smith@example.com",
    type: "marketing",
    status: "active",
    date: "2023-06-01",
    amount: "1000"
  },
  {
    name: "Bob",
    email: "bob.johnson@example.com",
    type: "sales",
    status: "inactive",
    date: "2023-06-02",
    amount: "2000"
  },
  {
    name: "Carol",
    email: "carol.brown@example.com",
    type: "engineering",
    status: "active",
    date: "2023-06-03",
    amount: "3000"
  },
  {
    name: "David",
    email: "david.miller@example.com",
    type: "finance",
    status: "inactive",
    date: "2023-06-04",
    amount: "4000"
  },
  {
    name: "Eve",
    email: "eve.jackson@example.com",
    type: "marketing",
    status: "active",
    date: "2023-06-05",
    amount: "5000"
  },
  {
    name: "Frank",
    email: "frank.davis@example.com",
    type: "sales",
    status: "inactive",
    date: "2023-06-06",
    amount: "6000"
  },
  {
    name: "Grace",
    email: "grace.lee@example.com",
    type: "engineering",
    status: "active",
    date: "2023-06-07",
    amount: "7000"
  },
  {
    name: "Harry",
    email: "harry.wilson@example.com",
    type: "finance",
    status: "inactive",
    date: "2023-06-24",
    amount: "8000"
  },
]

const TableContent = ({ item }: { item: DataType }) => {
  console.log({item})
  return (
    <TableRow className="bg-accent">
      <TableCell>
        <div className="font-medium">{item.name}</div>
        <div className="hidden text-sm text-muted-foreground md:inline">
          {item.email}
        </div>
      </TableCell>
      <TableCell className="hidden sm:table-cell">{item.type}</TableCell>
      <TableCell className="hidden sm:table-cell">
        <Badge className="text-xs" variant="secondary">
          {item.status}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{item.date}</TableCell>
      <TableCell className="text-right">₹{item.amount}</TableCell>
    </TableRow>
  );
};
const TabsPanel = () => {
  return (
    <Tabs defaultValue="week">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="year">Year</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Fulfilled
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only">Export</span>
          </Button>
        </div>
      </div>
      <TabsContent value="week">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Orders</CardTitle>
            <CardDescription>Recent orders from your store.</CardDescription>
          </CardHeader>
          <CardContent>
           <OrderTable header={header} data={Data} render={TableContent}/>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default TabsPanel;
