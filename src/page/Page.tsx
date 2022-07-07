import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";

interface HandleNameChangeInterface {
  target: HTMLInputElement;
}

type Product = {
  product: string;
  value: number;
  amount: number;
  id: number;
};

export function Page() {
  const [listProduct, setListProduct] = useState<Product[]>([]);
  const [inputProduct, setInputProduct] = useState("");
  const [inputValue, setInputValue] = useState(0);
  const [inputAmount, setInputAmount] = useState(0);

  useEffect(() => {
    localStorage.setItem("listProduct", JSON.stringify(listProduct));
  }, [listProduct]);


  function handleSubmit() {
    if (inputAmount === 0 || !inputProduct || !inputValue) {
      alert("Preencha o formulario");
    } else if (inputAmount < 1) {
      alert("quantidade não pode ser menor que 0");
    } else {
      setListProduct((prevProducts) => [
        ...prevProducts,
        {
          product: inputProduct,
          amount: inputAmount,
          value: inputValue,
          id: Math.floor(Math.random() * 10000),
        },
      ]);
    }
  }

  const result = listProduct.reduce(
    (total, prevProduct) => total + prevProduct.value * prevProduct.amount,
    0
  );

  const remove = (id: number) => {
    const removed = listProduct.filter((product) => product.id !== id);
    setListProduct(removed);
  };

  return (
    <div className="flex flex-col bg-gray-500 p-6 w-full max-w-screen-sm gap-4 sm:rounded-lg relative">
      <strong className="text-2xl text-center">Lista de Compras</strong>
      <div className="flex flex-col w-full gap-4 relative">
        <div className="flex flex-col  gap-2">
          <p>Produto: </p>
          <input
            value={inputProduct}
            placeholder="produto"
            required
            type="text"
            onChange={(e: HandleNameChangeInterface) => {
              setInputProduct(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col  gap-2">
          <p>Preço: </p>
          <input
            value={inputValue}
            placeholder="preço: 10,00"
            required
            type="number"
            onChange={(e: HandleNameChangeInterface) => {
              setInputValue(Number(e.target.value));
            }}
          />
        </div>
        <div className="flex flex-col  gap-2">
          <p>Quantidade: </p>
          <input
            value={inputAmount}
            required
            min={1}
            placeholder="quantidade"
            type="number"
            onChange={(e: HandleNameChangeInterface) => {
              setInputAmount(Number(e.target.value));
            }}
          />
        </div>
        <button
          className="w-[200px] bg-pink-300 p-2 rounded"
          onClick={handleSubmit}
        >
          Add produto
        </button>
      </div>
      <div className="w-full mt-8">
        {listProduct === null ? (
          <div></div>
        ) : (
          <div className="flex flex-col gap-4">
            {listProduct.map((item, index) => {
              return (
                <ProductCard
                  product={item.product}
                  key={index}
                  value={item.value}
                  amount={item.amount}
                  clear={() => {
                    remove(item.id);
                  }}
                />
              );
            })}
          </div>
        )}
      </div>

      <footer className="flex justify-between mt-6">
        <strong>Total:</strong>
        <p>R$ {result.toFixed(2)}</p>
      </footer>
    </div>
  );
}
