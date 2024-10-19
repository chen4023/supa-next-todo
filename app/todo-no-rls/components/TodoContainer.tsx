"use client";

import { deleteTodoSoft, updateTodo } from "@/apis/todos-no-rls";
import { useEffect } from "react";

export default function TodoContainer() {
  useEffect(() => {
    deleteTodoSoft(8)
  }, []);
  return <div>TodoContainer</div>;
}
