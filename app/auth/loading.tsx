"use client";

import { BeatLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <div>
        <BeatLoader />
      </div>
      <div className="my-3 font-bold">Loading ...</div>
    </div>
  );
}
