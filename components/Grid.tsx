import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data/gridData";

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            img,
            spareImg,
            imgClassName,
            titleClassName,
            description,
            className,
          }) => (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              img={img}
              spareImg={spareImg}
              className={className}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              description={description}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};
