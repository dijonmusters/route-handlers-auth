"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function NewTodo() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title } = Object.fromEntries(new FormData(e.currentTarget));

    await fetch("http://localhost:3000/api/todos", {
      method: "post",
      body: JSON.stringify({ title }),
    });

    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-12">
      <input
        name="title"
        className="w-full leading-6 p-4 bg-inherit border border-white text-white text-2xl"
      />
    </form>
  );
}
