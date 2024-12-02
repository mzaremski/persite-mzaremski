import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import persiteData from "PERSITE_DATA";

// TODO: Move Accordion to sections

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  ),
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  ),
);

const AccordionDemo = () => (
  <Accordion.Root
    className="AccordionRoot"
    collapsible
  >
    {persiteData.accordionSection.items.map((item, index) => (
      <Accordion.Item
        key={index}
        value={item.title}
        className="AccordionItem"
      >
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent>{item.content()}</AccordionContent>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

export default AccordionDemo;
