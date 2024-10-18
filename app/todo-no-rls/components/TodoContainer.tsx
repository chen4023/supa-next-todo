"use client";

import { getTodos } from "@/apis/todos-no-rls";
import { useEffect } from "react";

export default function TodoContainer() {
  useEffect(() => {
    getTodos();
  }, []);
  return <div>TodoContainer</div>;
}
