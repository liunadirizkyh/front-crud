import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function AddProduct(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:2000/products", {
        name,
        price,
        image,
      });

      setName("");
      setPrice("");
      setImage("");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <Card className="mt-[35px]">
      <CardHeader>
        <CardTitle>Add New Product</CardTitle>
        <CardDescription>Detail product</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="mb-[20px]">
            <label className="text-slate-700" htmlFor="">
              Name
            </label>
            <input
              className="w-full h-[40px] border border-slate-300 rounded-sm focus:p-3"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            />
          </div>
          <div className="mb-[20px]">
            <label className="text-slate-700" htmlFor="">
              Price
            </label>
            <input
              className="w-full h-[40px] border border-slate-300 rounded-sm focus:p-3"
              type="text"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
              required
            />
          </div>
          <div className="mb-[35px]">
            <label className="text-slate-700" htmlFor="">
              Image
            </label>
            <input
              className="w-full h-[40px] border border-slate-300 rounded-sm focus:p-3"
              type="text"
              value={image}
              onChange={(event) => {
                setImage(event.target.value);
              }}
              required
            />
          </div>
          <div className="flex justify-between">
            <Button onClick={props.func} className=" bg-red-500">
              Cancel
            </Button>
            <Button className="bg-sky-500" type="submit">
              Save
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
