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
        Does your project need:
        <ul>
          <li>refactoring</li>
          <li>more man-hours this sprint?</li>
          <li>ship a side features silently?</li>
        </ul>

        In technologies such as:
        <ul>
          <li>Typescript/Javascript</li>
          <li>React/NextJS</li>
          <li>NodeJS</li>
          <li>SQL</li>
          <li>PostgreSQL</li>
        </ul>

        Mail me: <a href="mailto:marcinzara@gmail.com">marcinzara@gmail.com</a><br/>
        Just tell me the name of the project, what kind of work you need, how often. I will answer ASAP.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>A contractor</AccordionTrigger>
      <AccordionContent>
        <ul>
          <li>Do you want to validate and build your startup idea?</li>
          <li>Do you want to build a MVP?</li>
          <li>Do you need internal system?</li>
          <li>Do you have any problem I can solve with an any software?</li>
        </ul>
        Mail me: <a href="mailto:marcinzara@gmail.com">marcinzara@gmail.com</a><br />
        Just tell the name of the company/project, briefly describe it, let me know how much time do you think it can take.
        I will answer ASAP.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>A full time hire</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          My CV (2022) is here: <a href="/Marcin_Zaremski_Fullstack_CV_2022.pdf">Marcin_Zaremski_Fullstack_CV_2022.pdf</a>
        </div>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-4">
      <AccordionTrigger>An indie hacker</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          Do you want to build a product together? I am always open to new ideas. Let's brainstorm, plan and ship it together!
          Mail me here: <a href="mailto:marcinzara@gmail.com">marcinzara@gmail.com</a>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

export default AccordionDemo;
