import React, { Fragment } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export default function HomeCrousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Fragment>
      <Carousel setApi={setApi}>
        <CarouselContent className="mt-5">
          <CarouselItem className="text-4xl font-bold">
            Enhance fortune 50 company's insights teams research capibilities
          </CarouselItem>
          <CarouselItem className="text-4xl font-bold">
            We have best developers who can solve your problems with code
          </CarouselItem>
          <CarouselItem className="text-4xl font-bold">
            We believe in the learn by doing phychology
          </CarouselItem>
        </CarouselContent>
        <div className="space-x-2">
          {Array.from({ length: 3 }).map((_, index) => {
            const isCurrent = index === current - 1;
            return (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn("h-3 w-3 bg-accent rounded-full", {
                  "bg-green-700": isCurrent,
                })}
              ></button>
            );
          })}
        </div>
      </Carousel>
    </Fragment>
  );
}
