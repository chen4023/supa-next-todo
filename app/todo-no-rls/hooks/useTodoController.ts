import { getTodos } from "@/apis/todos-no-rls";
import { Database } from "@/database.types";
import { useEffect, useState } from "react";

type TodoDto = Database["public"]["Tables"]["todos_no_rls"]["Row"];

const useTodosController = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState<TodoDto[]>([]);

  // TodoList를 가져오는 로직
  const onGetTodos = async () => {
    setLoading(true);
    try {
      const resultTodo = await getTodos();
      if (resultTodo) setTodos(resultTodo);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onGetTodos();
  }, []);

  return { loading, todos };
};

export default useTodosController;
