import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import { Login } from "./login";
import NewTodo from "./new-todo";
import Todo from "./todo";

export const revalidate = 0;

type Todo = {
  id: string;
  created_at: string;
  title: string;
  is_complete: boolean;
  user_id: string;
};

export default async function Home() {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });

  const { data } = await supabase
    .from("todos")
    .select()
    .match({ is_complete: false });

  const todos = data as Todo[];

  return (
    <main className="flex bg-gray-900 min-h-screen">
      <div className="max-w-4xl flex-1 flex flex-col mt-32 mb-16 mx-auto">
        <Login />
        <h1 className="text-6xl text-white mb-12 flex items-center">
          What I need to do today!
        </h1>
        <NewTodo />
        <div className="flex-1 flex flex-col">
          {todos?.map((todo: Todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </main>
  );
}
