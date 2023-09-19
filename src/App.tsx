import { component$ } from "@builder.io/qwik";
import { ProductCard } from "./components/ProductCard";

export const App = component$(() => {
  const products = [
    {
      name: "Robot Toy",
      image:
        "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
      price: 18.99,
    },
    {
      name: "Buzz Lightyear Life Model Toy",
      image:
        "https://images.unsplash.com/photo-1581557991964-125469da3b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2933&q=80",
      price: 50.99,
    },
    {
      name: "Minion Life Model Toy",
      image:
        "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2334&q=80",
      price: 35.99,
    },
  ];

  return (
    <main class="w-full min-h-screen flex flex-col lg:flex-row  gap-8 py-10 items-center justify-center">
      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </main>
  );
});
