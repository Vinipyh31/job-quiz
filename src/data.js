const questions = [
    {
        id: 1,
        question: "Склонны ли вы сильно утомляться от общения с людьми?",
        answerOptions: [
            { value: "Вообще не утомляюсь, люблю работать с людьми", rateID: 1, appendById: [4, 7, 8, 13] },
            { value: "Созданию дизайна продукта", rateID: 2, appendById: [1, 6, 9, 10, 11, 12, 14] },
            { value: "Хотелось бы минимального взаимодействия с людьми, люблю работать в одиночестве", rateID: 3, appendById: [2, 3, 5] }
        ],
        type: "radio",
    },
    {
        id: 2,
        question: "Если бы вам предложили участие в интересном вам проекте по созданию инновационного продукта, с большой долей вероятности вы бы отдали предпочтение",
        answerOptions: [
            { value: "Управлению и организации процессов", rateID: 1, appendById: [1, 6, 7, 10] },
            { value: "Созданию дизайна продукта", rateID: 2, appendById: [3, 12] },
            { value: "Рекламе продукта", rateID: 3, appendById: [9, 14] },
            { value: "Общению с клиентами", rateID: 4, appendById: [4, 8, 11, 13] },
            { value: "Работе с документами", rateID: 5, appendById: [5, 13] },
            { value: "Тестированию продукта", rateID: 6, appendById: [2] },
        ],
        type: "checkbox",
    },
    {
        id: 3,
        question: "Выберите наиболее подходящую вам характеристику",
        answerOptions: [
            { value: "Я человек творческий, креативный", rateID: 1, appendById: [1, 6, 7, 10, 2] },
            { value: "Я внимательный и структурированный человек, люблю порядок и во всем", rateID: 2, appendById: [3, 12] },
            { value: "Я не боюсь ответственности и люблю создавать что-то своё", rateID: 3, appendById: [3, 12, 9, 14] },
            { value: "Я хорошо выстраиваю отношения с людьми и решаю конфликтные ситуации", rateID: 4, appendById: [4, 8, 11, 13] },
        ],
        type: "radio",
    },
    {
        id: 4,
        question: "В школе наиболее интересными для меня предметами были следующие",
        answerOptions: [
            { value: "Математика и информатика", rateID: 1, appendById: [3, 12] },
            { value: "Литература и языки", rateID: 2, appendById: [1, 6, 7, 10, 2] },
            { value: "Музыка и рисование", rateID: 3, appendById: [3, 12, 9, 14] },
            { value: "Обществознание", rateID: 4, appendById: [4, 8, 11, 13] },
        ],
        type: "radio",
    },
    {
        id: 5,
        question: "Мне нравится соревноваться с другими и побеждать:",
        answerOptions: [
            { value: "Скорее да", rateID: 1, appendById: [1, 3, 4, 7, 9, 10, 11, 13, 14] },
            { value: "Скорее нет", rateID: 2, appendById: [2, 3, 5, 8, 12] },
        ],
        type: "radio",
    },
    {
        id: 6,
        question: "Мне нравится соревноваться с другими и побеждать:",
        answerOptions: [
            { value: "Скорее да", rateID: 1, appendById: [1, 3, 4, 7, 9, 10, 11, 13, 14] },
            { value: "Скорее нет", rateID: 2, appendById: [2, 3, 5, 8, 12] },
        ],
        type: "radio",
    },
    {
        id: 7,
        question: "Когда вам предстоит переходить дорогу, вы:",
        answerOptions: [
            { value: "Ориентируетесь на отсутствие машин на дороге в данный момент и переходите", rateID: 1, appendById: [14, 10, 6, 9] },
            { value: "Переходите только на зеленый свет вне зависимости от того, есть ли на дороге машины", rateID: 2, appendById: [1, 2, 3, 4, 5, 7, 8, 11, 12, 13] },
        ],
        type: "radio",
    },
    {
        id: 8,
        question: "В детстве вашей любимой игрой была",
        answerOptions: [
            { value: "Игра в магазин", rateID: 1, appendById: [4, 8, 11, 13] },
            { value: "Я отдавал(а) предпочтение чтению книг и рисованию", rateID: 2, appendById: [3, 12, 9, 14] },
            { value: "Шашки и шахматы", rateID: 3, appendById: [3, 12] },
            { value: "Командные игры", rateID: 4, appendById: [4, 8, 11, 13] },
        ],
        type: "radio",
    },
    {
        id: 9,
        question: "Выберите пару утверждений, в большей степени характеризующую вас",
        answerOptions: [
            { value: "Я живу в большей степени рассудком, а не сердцем", rateID: 1, appendById: [3, 12] },
            { value: "Я предпочитаю конкретность и определенность", rateID: 2, appendById: [1, 6, 7, 10, 2] },
            { value: "Я живу в большей степени рассудком, а не сердцем", rateID: 3, appendById: [3, 12, 9, 14] },
            { value: "Я предпочитаю открытость и многовариантность", rateID: 4, appendById: [4, 8, 11, 13] },
        ],
        type: "radio",
    },
    {
        id: 10,
        question: "Выберите пару утверждений, в большей степени характеризующую вас",
        answerOptions: [
            { value: "Эмоции не затрагивают меня глубоко", rateID: 1, appendById: [3, 12] },
            { value: "Я предпочитаю пробовать новое", rateID: 2, appendById: [4, 8, 11, 13] },
            { value: "Я больше доверяю тому, что пробовал", rateID: 3, appendById: [1, 6, 7, 10, 2] },
            { value: "Чувства и переживания сопровождают мои поступки", rateID: 3, appendById: [3, 12, 9, 14] },

        ],
        type: "radio",
    },
]



const jobs = [
    { id: 1, name: "📍 Специалист по логистике", description: "Вы изучите основы транспортной, складской, производственной, сбытовой, реверсивной логистик, а также логистики снабжения и закупок.", more: "https://radiosputnik.ria.ru/20220108/logist-1764175490.html", score: 0 },
    { id: 2, name: "Специалист по ручному тестированию ПО", description: "В результате вы сможете понимать как правильно тестировать ПО, разрабатывать тест планы и др.", more: "https://en.wikipedia.org/wiki/Software_testing", score: 0 },
    { id: 3, name: "🎨 UI-дизайнер", description: "Программа будет полезна тем, кто хочет работать в области дизайна интерфейсов, веб-дизайна, продуктового дизайна или проектирования интерфейсов", more: "https://en.wikipedia.org/wiki/User_experience_design", score: 0 },
    { id: 4, name: "😊 Специалист клиентского сервиса", description: "Данная программа будет интересна всем желающим стать специалистами в оказании качественного сервиса клиентам организации.", more: "https://proektoria.online/catalog/professions/speczialist-po-klientskomu-servisu", score: 0 },
    { id: 5, name: "📃 Делопроизводитель", description: "В результате обучения вы сможете осуществлять организацию документооборота.", more: "https://edunews.ru/professii/obzor/ofisnye-professii/deloproizvoditel.html", score: 0 },
    { id: 6, name: "⛱️ Вендор на маркетплейс", description: "После обучения вы сможете выбирать товары, организовывать логистику и развивать новый магазин.", more: "https://en.wikipedia.org/wiki/Vendor", score: 0 },
    { id: 7, name: "✅ Специалист в сфере гос.закупок", description: "Программа будет интересна как заказчикам, так и поставщикам и рассматривает процесс закупок с точки зрения 44-ФЗ и по 223-ФЗ.", more: "https://gozakaz.ru/dlya-chego-nuzhen-spetsialist-po-razmeshcheniyu-goszakazov/#:~:text=%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D1%81%D1%82%20%D0%B2%20%D1%81%D1%84%D0%B5%D1%80%D0%B5%20%D0%B7%D0%B0%D0%BA%D1%83%D0%BF%D0%BE%D0%BA%20%E2%80%94%20%D1%8D%D1%82%D0%BE,%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD%D0%BE%D0%B4%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%BE%D0%BC%2C%20%D0%B0%20%D0%B4%D0%BE%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%B0%D0%B2%D0%BB%D0%B8%D0%B2%D0%B0%D0%B5%D1%82%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BE%D0%B4%D0%B0%D1%82%D0%B5%D0%BB%D1%8C.", score: 0 },
    { id: 8, name: "🗣 Куратор программ онлайн-образования", description: "Курс подготавливает кураторов.  Вы научитесь принципам коммуникации, мотивации и разрешения конфликтов со студентами курса.", more: "https://edmarket.ru/blog/profession-curator", score: 0 },
    { id: 9, name: "🚀 Цифровой маркетинг", description: "Программа будет полезна для желающих работать в сфере интернет- продвижения, контекстной рекламы и создания посадочных страниц.", more: "https://en.wikipedia.org/wiki/Digital_marketing", score: 0 },
    { id: 10, name: "🌍 Предприниматель в онлайн", description: "Программа для предпринимателей, которые хотят развиваться, совершенствовать свои знания и умения в области бизнес-проектирования.", more: "https://srgmarketing.com/chto-takoe-internet-predprinimatel/", score: 0 },
    { id: 11, name: "📂 Менеджер онлайн-проектов", description: "В результате обучения вы сможете развивать проекты, организовывать исследования, разрабатывать план развития и продвижения.", more: "https://ekaterinburg.hh.ru/article/10182#:~:text=%D0%A2%D0%B0%D0%BA%D0%BE%D0%B9%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D1%81%D1%82%20%D0%BE%D0%B1%D1%8B%D1%87%D0%BD%D0%BE%20%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%20%D0%B2%D1%81%D0%B5%D0%BC,%D1%81%D0%BB%D1%83%D1%87%D0%B0%D1%8F%D1%85%20%D0%B7%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D1%82%D1%81%D1%8F%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D0%B0%D0%BC%D0%B8%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%2D%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%8B.", score: 0 },
    { id: 12, name: "✍️ Контент-менеджер", description: "Вы научитесь управлять процессами создания контента, моделировать стратегию. А также изнутри изучите каждый этап работы. ", more: "https://skillbox.ru/media/marketing/kto_takoy_kontent_menedzher/", score: 0 },
    { id: 13, name: "👥 Кадровое администрирование", description: "Вы научитесь вести кадровый учет, оформлять трудовые отношения, разрабатывать и вести документацию, связанную с управлением персоналом", more: "https://leaderteam.ru/services/hr/hr-administration", score: 0 },
    { id: 14, name: "🎯 Таргетолог и SMM- специалист", description: "Вы научитесь разрабатывать стратегии продвижения, обосновывать и выбирать каналы продвижения с точки зрения их эффективности и др.", more: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3_%D0%B2_%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D1%81%D0%B5%D1%82%D1%8F%D1%85", score: 0 }
]



