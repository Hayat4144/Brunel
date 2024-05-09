import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import IMAGES from "@/assets/images/Images";

export default function AskQuestion() {
  return (
    <section
      className="mx-5 md:mx-10 my-10 bg-accent grid grid-cols-1
           md:grid-cols-2 gap-5 px-5 rounded-2xl py-10"
    >
      <div className="flex flex-col justify-between">
        <div className="space-y-3 mx-10 mb-auto">
          <p className="covered-by-your-grace-regular text-muted-foreground">
            What's on your mind
          </p>
          <h2 className="text-5xl font-bold">Ask Question</h2>
        </div>
        <img src={IMAGES.UnionImage} alt="pic" className="mt-auto h-80 w-96" />
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-3"
        className="w-full space-y-5"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer freelancers?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Yes, We offer freelancers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What's the guarantee that I will be satisfied with the hired talent?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Because we used modern algorithm to match your needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can I hire muliple talents at once?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            if unhappy witht a project communicate with the freelancers, allow
            for revisions and refer to the agreement. Esclate to plateform
            support if needed. Considering mediation. Review policies seek
            collaborative solutions for resolution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Why should I not got to an agency directly?
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Who can help me pick a right skillset and duration for me?
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
