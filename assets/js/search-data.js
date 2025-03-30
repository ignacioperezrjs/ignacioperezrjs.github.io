// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Collection of the most important projects I have worked in.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "An ongoing effort to organize and showcase my coding projects. Currently featuring my latest technical work in electrical engineering and programming, this collection is a work in progress as I compile my most significant projects from recent years.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-curriculum-vitae",
          title: "Curriculum Vitae",
          description: "Welcome to my CV section. This is a summary of my professional experience and abilities as an Electrical Engineer. I specialize in project evaluation, system configuration, and hands-on work in electrical engineering projects. My technical expertise includes microcontroller programming, Modbus RTU communication protocols, RTU firmware construction, and renewable energy applications. With an Honours degree, I bring practical skills in technical project coordination and cross-functional team collaboration.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "A summary of my teaching experience and courses.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "books-american-gods",
          title: 'American Gods',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/AmericanGods/";
            },},{id: "books-drive-gt-the-surprising-truth-about-what-motivates-us",
          title: 'Drive-&amp;gt; The Surprising Truth About What Motivates Us',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Drive/";
            },},{id: "books-the-hobbit",
          title: 'The Hobbit',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Hobbit/";
            },},{id: "books-homo-deus-a-brief-history-of-tomorrow",
          title: 'Homo Deus - A Brief History of Tomorrow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/HomoDeus/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-docbot-telemedicine-system",
          title: 'DocBot Telemedicine System',
          description: "Developed a low-cost, multi-sensor telemetry device for non-critical patient monitoring, integrating IoT and Firebase for real-time data access.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Capstone/";
            },},{id: "projects-hnh-energy",
          title: 'HNH Energy',
          description: "Collaborated on a 1.3 GW green hydrogen project at CISC, enhancing document management and efficiency in eolic energy generation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/HNH_project/";
            },},{id: "projects-trefimet-induction-lance-heater",
          title: 'Trefimet Induction Lance Heater',
          description: "Designed a safe, automated induction heating system for industrial lances, replacing hazardous manual processes in mining operations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Trefimet/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%69%67%6E%61%63%69%6F%70%65%72%65%7A%31%39%30%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ignacioperezrjs", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/ignacioperezrjs", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://ignacioperezrjs.github.io/cv/", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
