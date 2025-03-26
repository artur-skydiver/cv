import type { Locales } from 'localization';

interface Place {
  title: string;
  partTime?: true;
  company: Locales | string;
  dates: string | Locales;
  address: Locales;
  duties: Locales[];
  tools: string[];
  description?: Locales;
}

const works: Place[] = [
  {
    title: 'FrontEnd developer',
    company: 'BTC-Alpha',
    dates: {
      en: 'Aug. 2024 – Feb. 2025',
      ru: 'Авг. 2024 – Фев. 2025',
      uk: 'Сер. 2024 – Лют. 2025',
    },
    address: { en: 'Remote', ru: 'Удаленно', uk: 'Дистанційно' },
    duties: [
      {
        en: "Work on the company's websites and services",
        ru: 'Работа над сайтами и сервисами компании',
        uk: 'Робота над сайтами та сервісами компанії',
      },
    ],
    tools: ['TypeScript', 'React', 'NextJS'],
    description: {
      en: "I was part of a small team of FrontEnd developers and worked on redesigns, bug fixes and new features for the company's products.",
      ru: 'Я был частью небольшой команды FrontEnd разработчиков и работал над редизайном, исправлением ошибок и новыми функциями для продуктов компании',
      uk: 'Я був частиною невеликої команди FrontEnd розробників та працював над редизайном, виправленням помилок та новими функціями для продуктів компанії.',
    },
  },
  {
    title: 'FrontEnd developer',
    company: 'SoftServe',
    dates: {
      en: 'Oct. 2023 – Mar. 2024',
      ru: 'Окт. 2023 – Мар. 2024',
      uk: 'Жов. 2023 – Бер. 2024',
    },
    address: { en: 'Remote', ru: 'Удаленно', uk: 'Дистанційно' },
    duties: [
      {
        en: 'Development of mobile applications',
        ru: 'Разработка мобильных приложений',
        uk: 'Розробка мобільних додатків',
      },
    ],
    tools: ['TypeScript', 'React Native'],
    description: {
      en: 'I was part of a multinational team that consists of over 500 people in which I contributed to the development of a mobile application for one of the largest financial institutions in Saudi Arabia. Since I was part of the central development squad, I managed to implement several key features of the application. I was also involved in bug fixing, refactoring and code review.',
      ru: 'Я был частью многонациональной команды из более, чем 500 человек, в которой я участвовал в разработке мобильного приложения для одной из крупнейших финансовых организаций Саудовской Аравии. Так как я был частью центрального подразделения разработчиков, мне удалось внедрить несколько ключевых функций приложения. Так же занимался устренением багов, рефакторингом и ревью кода.',
      uk: 'Я був частиною багатонаціональної команди з більш ніж 500 чоловік, у якій я брав участь у розробці мобільного додатку для однієї з найбільших фінансових організацій Саудівської Аравії. Так як я був частиною центрального підрозділу розробників, мені вдалося впровадити кілька ключових функцій додатку. Також займався усуненням багів, рефакторингом і ревью коду.',
    },
  },
  {
    title: 'Full-stack developer',
    partTime: true,
    company: 'Processica',
    dates: {
      en: 'Jan. 2023 – Sep. 2024',
      ru: 'Янв. 2023 – Сен. 2024',
      uk: 'Січ. 2023 – Вер. 2024',
    },
    address: { en: 'Remote', ru: 'Удаленно', uk: 'Дистанційно' },
    duties: [
      {
        en: 'Development of WEB-services',
        ru: 'Разработка WEB-сервисов',
        uk: 'Розробка WEB-сервісів',
      },
      {
        en: 'Development of mobile applications',
        ru: 'Разработка мобильных приложений',
        uk: 'Розробка мобільних додатків',
      },
      {
        en: 'Development of BackEnd’s API',
        ru: 'Разработка BackEnd API',
        uk: 'Розробка BackEnd API',
      },
      {
        en: 'Support for company websites',
        ru: 'Поддержка веб-сайтов компании',
        uk: 'Підтримка веб-сайтів компанії',
      },
    ],
    tools: [
      'TypeScript',
      'React',
      'React Native',
      'NextJS',
      'Strapi',
      'Python',
      'PostgreSQL',
      'PHP',
      'WordPress',
    ],
    description: {
      en: 'One of my tasks was to create a web and mobile client for real-time chat with an AI bot, and develop an admin panel to manage it. I also rewrote the BackEnd from scratch in Python using FastAPI for this chat. Additionally I developed and supported websites using NextJS and WordPress.',
      ru: 'Одна из моих задач заключалась в создании Web и мобильного клиента для чата реального времени с AI ботом, и разработки панели администратора для управления им. Так же переписал с нуля BackEnd на Python с использованием FastAPI для этого чата. Дополнительно занимался разработкой и поддержкой сайтов на NextJS и WordPress.',
      uk: 'Одна з моїх завдань полягала у створенні Web та мобільного клієнта для чату реального часу з AI ботом, та розробки панелі адміністратора для управління ним. Також переписав з нуля BackEnd на Python з використанням FastAPI для цього чату. Додатково займався розробкою та підтримкою сайтів на NextJS та WordPress.',
    },
  },
  {
    title: 'FrontEnd developer',
    partTime: true,
    company: 'Provectus',
    dates: {
      en: 'Oct. 2021 – Nov. 2022',
      ru: 'Окт. 2021 – Ноя. 2022',
      uk: 'Жов. 2021 – Лис. 2022',
    },
    address: { en: 'Remote', ru: 'Удаленно', uk: 'Дистанційно' },
    duties: [
      {
        en: 'Development of mobile applications',
        ru: 'Разработка мобильных приложений',
        uk: 'Розробка мобільних додатків',
      },
    ],
    tools: ['React Native'],
    description: {
      en: 'I\'ve been working on a redesign, bug fixes and new features for the application "BodyFit Fitness Training Coach".',
      ru: 'Я работал над редизайном, исправлением ошибок и новыми функциями для приложения "BodyFit Fitness Training Coach".',
      uk: 'Я працював над редизайном, виправленням помилок та новими функціями для додатоку "BodyFit Fitness Training Coach".',
    },
  },
  {
    title: 'Full-stack developer',
    company: 'Magic Powered',
    dates: {
      en: 'Sep. 2021 – Jan. 2023',
      ru: 'Сен. 2021 – Янв. 2023',
      uk: 'Вер. 2021 – Січ. 2023',
    },
    address: { en: 'Remote', ru: 'Удаленно', uk: 'Дистанційно' },
    duties: [
      {
        en: 'Development of WEB-services',
        ru: 'Разработка WEB-сервисов',
        uk: 'Розробка WEB-сервісів',
      },
      {
        en: 'Development of BackEnd’s API',
        ru: 'Разработка BackEnd API',
        uk: 'Розробка BackEnd API',
      },
      {
        en: 'Development of mobile applications',
        ru: 'Разработка мобильных приложений',
        uk: 'Розробка мобільних додатків',
      },
    ],
    tools: [
      'TypeScript',
      'React',
      'React Native',
      'NextJS',
      'Strapi',
      'PostgreSQL',
      'AWS',
    ],
    description: {
      en: 'I worked on creating sites using SSR technology, admin panels, content editors and APIs.',
      ru: 'Я работал над созданием сайтов с использованием технологии SSR, админ-панелей, редакторов контента и API.',
      uk: 'Я працював над створенням сайтів за технологією SSR, панелями адміністратора, редакторами контенту та API.',
    },
  },
  {
    title: 'Full-stack developer',
    company: 'Appsider',
    dates: {
      en: 'Mar. 2020 – Aug. 2021',
      ru: 'Март 2020 – Авг. 2021',
      uk: 'Бер. 2020 – Сер. 2021',
    },
    address: { en: 'Remote', ru: 'Удаленно', uk: 'Дистанційно' },
    duties: [
      {
        en: 'Development of mobile applications',
        ru: 'Разработка мобильных приложений',
        uk: 'Розробка мобільних додатків',
      },
      {
        en: 'Development of WEB-services',
        ru: 'Разработка WEB-сервисов',
        uk: 'Розробка WEB-сервісів',
      },
      {
        en: 'Development of BackEnd’s API',
        ru: 'Разработка BackEnd API',
        uk: 'Розробка BackEnd API',
      },
    ],
    tools: [
      'React',
      'React Native',
      'Laravel',
      'MySQL',
      'PostgreSQL',
      'Java',
      'Objective-C',
      'Python',
    ],
    description: {
      en: 'For all the time I worked on 5 applications for Android and iOS. Over some of them as a Full-stack developer.',
      ru: 'За все время я работал над 5 приложениями для Android и iOS. Над некоторыми из них в качестве Full-stack разработчика.',
      uk: 'За весь час працював над 5 додатками для Android та iOS. Над деякими з них як розробник повного стека.',
    },
  },
  {
    title: 'Application developer',
    company: 'NexWeel',
    dates: {
      en: 'Mar. 2017 – Jan. 2018',
      ru: 'Март 2017 – Янв. 2018',
      uk: 'Бер. 2017 – Січ. 2018',
    },
    address: {
      en: '38 Rishelievskaya Street, Odessa, Ukraine',
      ru: 'Украина, Одесса, ул. Ришельевская 38',
      uk: 'Україна, Одеса, вул. Рішельєвська 38',
    },
    duties: [
      {
        en: 'Software development',
        ru: 'Разработка программного обеспечения',
        uk: 'Розробка програмного забезпечення',
      },
      {
        en: 'WEB development',
        ru: 'Веб-разработка',
        uk: 'Веб-розробка',
      },
    ],
    tools: ['Delphi', 'JavaScript', 'PHP', 'MySQL'],
    description: {
      en: 'I worked in a team on developing a logistical software for a shipping company.',
      ru: 'Я работал в команде по разработке логистического программного обеспечения для судоходной компании.',
      uk: 'Я працював у команді над розробкою логістичного програмного забезпечення для судноплавної компанії.',
    },
  },
  {
    title: 'WEB Full-stack developer',
    company: 'Skylogic',
    dates: {
      en: 'Apr. 2016 – Feb. 2017',
      ru: 'Апр. 2016 – Фев. 2017',
      uk: 'Кві. 2016 – Лют. 2017',
    },
    address: {
      en: '19/21 Book Lane, Odessa, Ukraine',
      ru: 'Украина, Одесса, пер. Книжный 19',
      uk: 'Україна, Одеса, пров. Книжковий 19',
    },
    duties: [
      {
        en: 'Development of new websites',
        ru: 'Разработка новых веб-сайтов',
        uk: 'Розробка нових веб-сайтів',
      },
      {
        en: 'Maintenance of the old sites',
        ru: 'Обслуживание старых сайтов',
        uk: 'Обслуговування старих сайтів',
      },
      {
        en: "Development company's own CMS",
        ru: 'Разработка CMS компании',
        uk: 'Розробка CMS компанії',
      },
    ],
    tools: ['JavaScript', 'PHP', 'MySQL'],
  },
  {
    title: 'IT Director',
    partTime: true,
    company: {
      en: 'Gym Network "Champion"',
      ru: 'Сеть СК "Чемпион"',
      uk: 'Мережа СК "Чемпіон"',
    },
    dates: {
      en: 'Sep. 2008 – Present',
      ru: 'Сен. 2008 – Настоящее время',
      uk: 'Вер. 2008 – Даний час',
    },
    address: {
      en: 'Odessa, Ukraine',
      ru: 'Украина, Одесса',
      uk: 'Україна, Одеса',
    },
    duties: [
      {
        en: 'Mainly providing IT support and maintenance to the whole gym network',
        ru: 'IT-поддержка и обслуживание всей сети тренажерных залов',
        uk: 'IT-підтримка та обслуговування всієї мережі тренажерних залів',
      },
      {
        en: 'Software development',
        ru: 'Разработка программного обеспечения',
        uk: 'Розробка програмного забезпечення',
      },
      {
        en: 'Designing and visualization of premises interiors',
        ru: 'Проектирование и дизайн интерьеров помещений',
        uk: "Проектування та дизайн інтер'єрів приміщень",
      },
    ],
    tools: [
      'Delphi',
      'TypeScript',
      'React',
      'PHP',
      'MySQL',
      'SQLite',
      'AutoCAD',
      '3D Max',
    ],
    description: {
      en: 'I developed a number of software for work with customers. I also developed a bookkeeping software for fitness-cafe and many other different software for specific tasks. All programs linked with ERP-system for monitoring gyms’ work flow in real time, cash flow, payroll and salary transfer, expenses and viewing reports. Of course the website was on me.',
      ru: 'Разработал ряд программ для работы с клиентами. Также я разработал бухгалтерский софт для фитнес-кафе и много другого различного софта под конкретные задачи. Все программы связаны с ERP-системой для мониторинга рабочего процесса тренажерных залов в режиме реального времени, движения денежных средств, начисления заработной платы, расходов и просмотра отчетов. Конечно, сайт был так же на мне.',
      uk: "Розробив низку програм для роботи з клієнтами. Також я розробив бухгалтерський софт для фітнес-кафе та багато іншого різного софту під конкретні завдання. Усі програми пов'язані з ERP-системою для моніторингу робочого процесу тренажерних залів у режимі реального часу, руху коштів, нарахування заробітної плати, витрат та перегляду звітів. Звичайно, сайт був також на мені.",
    },
  },
  {
    title: 'IT Developer',
    partTime: true,
    company: {
      en: 'Sports Federation Of Bodybuilding Of The Odessa Region',
      ru: 'Спортивная Федерация Бодибилдинга Одесской Области',
      uk: 'Спортивна Федерація Бодібілдингу Одеської області',
    },
    dates: {
      en: 'Sep. 2010 – May. 2014',
      ru: 'Сен. 2010 – Май 2014',
      uk: 'Вер. 2010 – Тра. 2014',
    },
    address: {
      en: '31 Shevchenko Avenue, Odessa, Ukraine',
      ru: 'Украина, Одесса, пр‑кт Шевченко 31',
      uk: 'Україна, Одеса, пр‑кт Шевченка 31',
    },
    duties: [
      {
        en: 'Software development',
        ru: 'Разработка программного обеспечения',
        uk: 'Розробка програмного забезпечення',
      },
      {
        en: 'Technical support for various sport competitions',
        ru: 'Техническое обеспечение различных спортивных соревнований',
        uk: 'Технічна підтримка різноманітних спортивних змагань',
      },
    ],
    tools: ['Delphi', 'JavaScript', 'PHP', 'MySQL', 'SQLite'],
    description: {
      en: 'I developed a software for managing the competition starting from preliminary participants’ registration on website and ending with printing out award letters and issuing full reports. For many years it has been used for competitions at regional level, several times at national Ukrainian level and was presented on a championship in Saint Petersburg.',
      ru: 'Я разработал программное обеспечение для ведения соревнований, начиная от предварительной регистрации участников на сайте и заканчивая распечаткой грамот и выдачей полных отчетов. На протяжении многих лет оно использовалось для соревнований регионального уровня, несколько раз национального уровня в Украине и было представлено на чемпионате в Санкт-Петербурге.',
      uk: 'Я розробив програмне забезпечення для проведення змагань, починаючи від попередньої реєстрації учасників на сайті і закінчуючи роздруком грамот і видачею повних звітів. Протягом багатьох років воно використовувалося для змагань регіонального рівня, кілька разів національного рівня в Україні та було представлено на чемпіонаті у Санкт-Петербурзі.',
    },
  },
];

export default works;
