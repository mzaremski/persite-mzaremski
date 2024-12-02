import React from "react";
import { TwitterLogoIcon, LinkedInLogoIcon, InstagramLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import type { PersiteSource } from "./persite_source_type";

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

/*
  Fill the persiteData with your own content. 
  Additionally, you need to:
    - change avatar.jpg picture to your own
    - .......
*/

const persiteSource: PersiteSource = {
  name: 'Marcin Zaremski',
  slogan: 'Freelancer & Indie Hacker',
  mainPageTitle: "Marcin Zaremski | Freelancer & Indie Hacker",
  mainPageDescription: "Not only dev. Also entrepreneur, indie hacker, photographer, surfer and cyclist.",
  theme: {
    projectSectionFirst: false,
    shouldShowBlogSection: false,
    blogInsideMainCard: false,
    background: 'FlyingOrbes',
    radixConfig: {
      appearance: 'dark',
      accentColor: 'indigo',
      grayColor: 'slate',
      radius: 'full',
      scaling: '110%',
    }
  },
  seo: {
    author: 'Marcin Zaremski',
    twitterUsername: 'marcinzaremski',
    locale: 'en_US',
  },
  headerSection: {
    personalDescription: 'A full-stack developer since 2018, with experience working on small projects as well as with large fintech startups (ex-Shares). After a 9-month travel break, I transitioned to indie hacking and freelancing in 2024.',
    personalSlogan: 'Startup mentality & happy to help you grow!',
    typeAnimationSequence: [
      "\ developer",
      "n indie hacker",
      "\ freelancer ",
      "n entrepreneur",
      "\ photograper",
      "\ surfer",
      "\ cyclist",
    ]
  },
  accordionSection: {
    title: 'Work with me as',
    items: [
      {title: 'A freelancer', content: FreelancerAccordionContent},
      {title: 'A contractor', content: ContractorAccordionContent},
      {title: 'A full time hire', content: FullTimeHireAccordionContent},
      {title: 'An indie hacker', content: IndieHackerAccordionContent},
    ]
  },
  projectsSection: {
    title: 'Projects',
    items: [
      {
        title: 'LingoReaders',
        status: 'in_progress',
        badge: 'Q2 2024',
        badgeColor: 'gray',
        link: 'https://lingoreaders.com/?utm_source=mzaremski.com',
      },
      {
        title: 'Propsify',
        status: 'in_progress',
        badgeColor: 'gray',
        badge: 'Q1 2024',
        link: '/propsify',
      },
      {
        title: 'PerSite',
        status: 'released',
        badgeColor: 'gray',
        badge: 'Q2 2024',
        link: '/persite',
      },
      {
        title: 'GpxOverlay',
        status: 'released',
        badgeColor: 'green',
        badge: '1k$/m',
        link: 'https://gpxoverlay.com/?utm_source=mzaremski.com',
      },
      {
        title: 'Ikonate',
        status: 'released',
        badgeColor: 'indigo',
        badge: '2018 | Free',
        link: 'https://ikonate.com/?utm_source=mzaremski.com',
      },
    ]
  },
  socialSection: [
    {icon: () => <LinkedInLogoIcon />, link: 'https://www.linkedin.com/in/marcin-zaremski-8b3b4714b/'},
    {icon: () => <TwitterLogoIcon />, link: 'https://x.com/marcinzaremski'},
    {icon: () => <InstagramLogoIcon />, link: 'https://instagram.com/mrrrcin'},
    {icon: () => <GitHubLogoIcon />, link: 'https://github.com/mzaremski'},
  ]
}

export default persiteSource;