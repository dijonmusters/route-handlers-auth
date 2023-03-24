"use client";

import { useRouter } from "next/navigation";

type Todo = {
  id: string;
  created_at: string;
  title: string;
  is_complete: boolean;
  user_id: string;
};

export default function Todo({ todo }: { todo: Todo }) {
  const router = useRouter();

  const handleComplete = async () => {
    await fetch("http://localhost:3000/api/todos", {
      method: "put",
      body: JSON.stringify({ id: todo.id }),
    });

    router.refresh();
  };

  return (
    <button
      onClick={handleComplete}
      className="bg-gray-800 rounded-md text-white p-8 mb-4 text-2xl font-semibold"
    >
      {todo.title}
    </button>
  );
}
