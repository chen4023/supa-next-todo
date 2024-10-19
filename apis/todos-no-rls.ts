"use client";

import { createSupabaseBrowserClient } from "@/lib/client/supabase";
import { create } from "domain";

// Todo list 가져오기
export const getTodos = async () => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .order("id", { ascending: false });
  return result.data;
};

// Id값으로 검색해서 가져오기
export const getTodosById = async (id: number) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .eq("id", id);
  return result.data;
};

// todoList 가져오기 + search
export const getTodosBySeaerch = async (terms: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .ilike("content", `%${terms}%`) // contetnt에 해당 단어가 포함되어 있는 것
    .order("id", { ascending: false });
  return result.data;
};

//TodoList 생성하기
export const createTodo = async (content: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .insert({
      content,
    })
    .select();
  return result.data;
};

//TodoList 업데이트하기
export const updateTodo = async (id: number, content: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .update({ content, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select();
  return result.data;
};

//TodoLost softDelete
export const deleteTodoSoft = async (id: number) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .update({
      deleted_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();
  return result.data;
};
