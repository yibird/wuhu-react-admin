import React, { useState } from "react";
import CardList from "./cardList";
import type { CardItemType } from "./types";
import { useMount } from "ahooks";

const cardList: CardItemType[] = [
  {
    id: 1,
    title: "访问数",
    describe: "总访问数",
    icon: "src/assets/icons/visit-count.svg",
    value: "2,000",
    totalValue: "10,000",
    dateType: 1,
  },
  {
    id: 2,
    title: "成交额",
    describe: "总成交额",
    icon: "src/assets/icons/transaction.svg",
    value: "$2,000",
    totalValue: "$10,000",
    dateType: 1,
  },
  {
    id: 3,
    title: "下载数",
    describe: "总下载数",
    icon: "src/assets/icons/download-count.svg",
    value: "2,000",
    totalValue: "10,000",
    dateType: 1,
  },
  {
    id: 4,
    title: "成交数",
    describe: "总成交数",
    icon: "src/assets/icons/total-sales.svg",
    value: "2,000",
    totalValue: "10,000",
    dateType: 1,
  },
];

function Analysis() {
  const [loading, setLoading] = useState(true);
  useMount(() => {
    setTimeout(() => setLoading(false), 2000);
  });
  const handleChangeCardItem = (id: number, type: number) => {};
  return (
    <div>
      <CardList
        loading={loading}
        onChange={handleChangeCardItem}
        list={cardList}
      />
    </div>
  );
}
export default Analysis;
