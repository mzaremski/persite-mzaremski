import React from "react";

const FreelancerAccordionContent = () => {
  return (
    <div>
      Does your project need:
      <ul>
        <li>Refactoring?</li>
        <li>More man-hours this sprint?</li>
        <li>To ship side features silently?</li>
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
      Just tell me the name of the project, the kind of work you need, and how often. I will respond ASAP.
    </div>
  )
}
const ContractorAccordionContent = () => {
  return (
    <div>
      <ul>
        <li>Do you want to validate and build your startup idea?</li>
        <li>Do you want to build an MVP?</li>
        <li>Do you need an internal system?</li>
        <li>Do you have any problem I can solve with software?</li>
      </ul>
      Mail me: <a href="mailto:marcinzara@gmail.com">marcinzara@gmail.com</a><br />
      Just tell the name of the company/project, briefly describe it, let me know how much time do you think it can take.
      I will answer ASAP.
    </div>
  )
}

const IndieHackerAccordionContent = () => {
  return (
    <div>
      <div className="AccordionContentText">
        Do you want to build a product together? I'm always open to new ideas. Let's brainstorm, plan, and ship it!
        Mail me here: <a href="mailto:marcinzara@gmail.com">marcinzara@gmail.com</a>
      </div>
    </div>
  )
}

const FullTimeHireAccordionContent = () => {
  return (
    <div>
      <div className="AccordionContentText">
        My CV (2022, outdated a bit) is here: <a href="/Marcin_Zaremski_Fullstack_CV_2022.pdf">Marcin_Zaremski_Fullstack_CV_2022.pdf</a>
      </div>
    </div>
  )
}

const data = {
  name: 'Marcin Zaremski',
  slogan: 'Freelancer & Indie Hacker',
  pageTitle: "Marcin Zaremski | Freelancer & Indie Hacker",
  pageDescription: "Not only dev. Also entrepreneur, indie hacker, photographer, surfer and cyclist.",
  theme: {
    mode: 'dark',
    projectSectionFirst: false, // TODO
  },
  headerSection: {
    personalDescription: 'A full-stack developer since 2018, with experience working on small projects as well as with large fintech startups (ex-Shares). After a 9-month travel break, I transitioned to indie hacking and freelancing in 2024.',
    personalSlogan: 'Startup mentality & happy to help you grow!',
    typeAnimationSequence: [ // TODO
      'Freelancer',
      'Indie Hacker',
      'Photographer',
      'Surfer',
      'Cyclist',
    ]
  },
  accordionSection: {
    title: 'Work with me as:',
    items: [
      {title: 'A freelancer', content: FreelancerAccordionContent},
      {title: 'A contractor', content: ContractorAccordionContent},
      {title: 'A full time hire', content: FullTimeHireAccordionContent},
      {title: 'An indie hacker', content: IndieHackerAccordionContent},
    ]
  }
}

export default data;