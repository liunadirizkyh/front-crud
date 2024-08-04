import getProducts from "@/features/products/fetchProducts";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

export default function ShowProducts(props) {
  const { data: products } = getProducts();

  return (
    <>
      <div className="flex justify-between mb-5 px-3">
        <h1 className="font-bold text-3xl text-slate-700">List of Product</h1>
        <Button onClick={props.func} className=" bg-green-500">
          Add New Product
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell className="text-right">
                <Button className="bg-sky-500 mr-4">Edit</Button>
                <Button className="bg-red-500">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
