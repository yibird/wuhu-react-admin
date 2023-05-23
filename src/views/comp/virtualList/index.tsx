import React from "react";
import VirtualList from "@/components/VirtualList";
import { fakerZH_CN } from "@faker-js/faker";

const data = Array.from({ length: 300 }).map(() => fakerZH_CN.lorem.lines());

export default function () {
  return (
    <div>
      <VirtualList data={data} />
    </div>
  );
}
