"use client";

import { useState } from "react";
import AddProduct from "./addProduct";
import ShowProducts from "./showProducts";

export default function ProductsPage() {
  const [show, setShow] = useState(false);

  function handleClickAdd() {
    setShow(!show);
  }

  return (
    <div className="w-[800px] mx-auto mt-[20px]">
      {show ? null : <ShowProducts func={handleClickAdd} />}

      {show ? <AddProduct func={handleClickAdd} /> : null}
    </div>
  );
}
