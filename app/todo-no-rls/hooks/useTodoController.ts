import {
  createTodo,
  deleteTodoSoft,
  getTodos,
  getTodosBySearch,
  updateTodo,
} from "@/apis/todos-no-rls";
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

  // 비어있는 Todo 생성
  const onCreateEmptyTodos = async () => {
    await createTodo("");
    await onGetTodos();
  };

  // Todo 업데이트
  const onUpdateTodos = async (id: number, content: string) => {
    await updateTodo(id, content);
  };

  //Todo 삭제
  const onDeleteTodos = async (id: number) => {
    await deleteTodoSoft(id);
  };

  // Todo 검색
  const onSearchTodos = async (terms: string) => {
    if (terms) {
      const todoResult = await getTodosBySearch(terms);
      if (todoResult) setTodos(todoResult);
    } else {
      await onGetTodos();
    }
  };

  return {
    loading,
    todos,
    onCreateEmptyTodos,
    onUpdateTodos,
    onDeleteTodos,
    onSearchTodos,
  };
};

export default useTodosController;
