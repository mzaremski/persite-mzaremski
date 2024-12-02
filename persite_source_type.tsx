export interface PersiteSource {
    name: string;
    slogan: string;
    mainPageTitle: string;
    mainPageDescription: string;
    theme: {
      projectSectionFirst: boolean;
      shouldShowBlogSection: boolean;
      blogInsideMainCard: boolean;
      background: string;
      radixConfig: {
        appearance: 'dark' | 'light';
        accentColor: string;
        grayColor: string;
        radius: string;
        scaling: string;
      };
    };
    seo: {
      author: string;
      twitterUsername: string;
      locale: string;
    };
    headerSection: {
      personalDescription: string;
      personalSlogan: string;
      typeAnimationSequence: string[];
    };
    accordionSection: {
      title: string;
      items: Array<{
        title: string;
        content: () => JSX.Element;
      }>;
    };
    projectsSection: {
      title: string;
      items: Array<{
        title: string;
        status: 'in_progress' | 'released';
        badge: string;
        badgeColor: string;
        link: string;
      }>;
    };
    socialSection: Array<{
      icon: () => JSX.Element;
      link: string;
    }>;
  }
  