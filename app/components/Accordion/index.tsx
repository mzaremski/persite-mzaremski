import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";

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
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>A freelancer</AccordionTrigger>
      <AccordionContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem cumque iusto animi, odio numquam veritatis illo.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>A contractor</AccordionTrigger>
      <AccordionContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem cumque iusto animi, odio numquam veritatis illo.
        feel.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>A full time hire</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem cumque iusto animi, odio numquam veritatis illo.
        </div>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-4">
      <AccordionTrigger>An indie hacker</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem cumque iusto animi, odio numquam veritatis illo.
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

export default AccordionDemo;
