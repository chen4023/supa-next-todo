"use client";

import useTodosController from "../hooks/useTodoController";

export default function TodoContainer() {

  const { loading, todos } = useTodosController();
  // ✅ 템플릿 리터럴을 사용하면 모든 데이터가 문자열로 변환되어 콘솔 창에 출력됨 ...
  console.log('>>loading', loading)
  console.log('>>todos', todos)

  return <div>TodoContainer</div>;
}
