"use client";

import { BounceLoader } from "react-spinners";

BounceLoader;
export default function Error() {
  return (
    <div className="flex flex-col items-center mt-12">
      <div>
        <BounceLoader color="#ff2e2e" />
      </div>
      <div className="my-3 font-bold">There is something wrong ...</div>
    </div>
  );
}
