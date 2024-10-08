import React from "react";

import { OfferingCardsStatic } from "./staticCategoryStripItems";
import { InfiniteMovingCards } from "@/components/ui/infiniteMovingCards.tsx";

const CategoryStrip = () => {
  return (
    <div className="flex h-fit flex-col gap-0 border-b-[1px] border-t-[1px] border-slate-700 bg-blue-300">
      <InfiniteMovingCards
        items={OfferingCardsStatic}
        direction="left"
        speed="slow"
      ></InfiniteMovingCards>
    </div>
  );
};

export default CategoryStrip;
