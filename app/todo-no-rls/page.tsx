import { sleep } from "@/lib/utils";

export default async function Page() {
  console.log(">> API call start");
  await sleep(1500);
  console.log(">> API call end");
  return <div>Page</div>;
}
