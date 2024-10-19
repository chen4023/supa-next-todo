import { sleep } from "@/lib/utils";
import TodoContainer from "./components/TodoContainer";

export default async function Page() {
  return (
    <div>
      Page
      <TodoContainer />
    </div>
  )
}
