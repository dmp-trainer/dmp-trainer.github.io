// Variables and objects
var btn = document.getElementById('btn-generate')
btn.addEventListener("click", generatePC);


// Functions
function generatePC() {
  document.getElementById("social").innerHTML = lib_social[Math.floor(Math.random() * 11)].text;
  document.getElementById("income").innerHTML = lib_income[Math.floor(Math.random() * 11)].text;
  document.getElementById("war").innerHTML = lib_war[Math.floor(Math.random() * 11)].text;

  document.getElementById("engagement").innerHTML = lib_engagement[Math.floor(Math.random() * 11)].text;
  document.getElementById("problem").innerHTML = lib_problem[Math.floor(Math.random() * 11)].text;
  document.getElementById("military").innerHTML = lib_military[Math.floor(Math.random() * 11)].text;

  document.getElementById("patriotism").innerHTML = lib_patriotism[Math.floor(Math.random() * 11)].text;
  document.getElementById("values").innerHTML = "Пока не придумали :) Но скоро всё будет";
};


// Attributes Libraries
lib_social = [
  {n:0, text: "Житель небольшого городка, женат 2е детей"},
  {n:1, text: "Житель Москвы, бизнесмен, ребенок 2 года"},
  {n:2, text: "Житель крупного промышленного города, рабочий, двое детей"},
  {n:3, text: "Пенсионер, живет в сельской местности, трое внуков"},
  {n:4, text: "Молодой специалист, живет в общежитии, без детей"},
  {n:5, text: "Самозанятый, живет в пригороде, один ребенок"},
  {n:6, text: "Житель моногорода или села, детей нет или есть 1 ребенок"},
  {n:7, text: "Православный, живет с пожилыми родителями"},
  {n:8, text: "Мусульманин из национальной республики Северного Кавказа, женат, есть 1-2 ребенка"},
  {n:9, text: "Сын/дочь крупного бизнесмена"},
  {n:10, text: "Жена или мать мобика"},
];

lib_income = [
  {n:0, text: "Ниже среднего, хватает только на продукты и предметы первой необходимости - 50 тыс в месяц"},
  {n:1, text: "Высокий, около 200 тыс"},
  {n:2, text: "Средний, хватает на жизнь и накопления"},
  {n:3, text: "Низкий, едва хватает на основные нужды"},
  {n:4, text: "Ниже среднего, постоянные долги"},
  {n:5, text: "Выше среднего, имеет накопления"},
  {n:6, text: "60-80 тыс. Но приходится прододить на работе больше 8 часов. Скорее всего работает на заводе или вахтовым методом, физический труд"},
  {n:7, text: "Получает пособие по безработице, имеет периодические подработки"},
  {n:8, text: "Работает на стройке, либо на вахтовой работе в Москве, либо занят торговлей овощами или фруктами, а также возможно торговля мясом собственного скота"},
  {n:9, text: "От 100 и выше тыс руб"},
  {n:10, text: "от 40-45 тыс"},
];

lib_war = [
  {n:0, text: "Поддерживает СВО, считает что нужно воевать до поставленных целей"},
  {n:1, text: "Пацифист"},
  {n:2, text: "Нейтрален, не поддерживает ни одну из сторон"},
  {n:3, text: "Считает войну нецелесообразной, поддерживает дипломатическое решение"},
  {n:4, text: "Индиферентен, мало интересуется политикой"},
  {n:5, text: "Активно против, участвует в антивоенных акциях"},
  {n:6, text: "Считает, что страна поскольку ввязалась в войну, то она не должна проигрывать. Сочувствует рядовым солдатам, поскольку раньше служил в армии и знает все минусы военной службы изнутри"},
  {n:7, text: "Считает войну священной, верит в росс. пропаганду, считает что РФ воюет не с Украиной, а с НАТО и всем Западом и их ценностями"},
  {n:8, text: "Опасается идти воевать, поскольку считает, что это не в его интересах и не в интересах его республики, а в интересах властей из Москвы"},
  {n:9, text: "Нейтральное, безразличное. Усталость от войны"},
  {n:10, text: "Нейтральное, считает воюющего защитником, смирилась"},
];

lib_engagement = [
  {n:0, text: "Старший сын под угрозой мобидизации, студент 22 года"},
  {n:1, text: "Не может нанять сотрудников за адекватные деньги, санкции"},
  {n:2, text: "Боится за будущее своих детей, нестабильность в регионе"},
  {n:3, text: "Потеря работы из-за экономического кризиса"},
  {n:4, text: "Нестабильная экономическая ситуация, рост цен"},
  {n:5, text: "Угроза санкций, бизнес под ударом"},
  {n:6, text: "Подорожание цен, давление со стороны знакомых и коллег, которых мобилизовали"},
  {n:7, text: "Подоражали цены на продукты, подорожали цена лекарства"},
  {n:8, text: "Боится мобилизироваться, стать инвалидом, умереть или попасть в плен"},
  {n:9, text: "Сильное подорожание авиабилетов зарубеж, проблемы с визой, карты не работают, проблемы с поставками импортных товаров, уход брендов с рынка, подожание техники, машины, проблемы с ремонтом иномарок, отсутсвие запчастей, вынужденный переход на юго-восточный автотранспорт, уход критобирж из российского сегмента, санкции  "},
  {n:10, text: "Страх потерять родного человека"},
];

lib_problem = [
  {n:0, text: "СВО не заканчивается так как не могут достичь целей"},
  {n:1, text: "Бизнес не разваивается"},
  {n:2, text: "Отсутствие безопасности и стабильности"},
  {n:3, text: "Ухудшение медицинского обслуживания и образования"},
  {n:4, text: "Проблемы с трудоустройством после университета"},
  {n:5, text: "Снижение качества жизни из-за инфляции"},
  {n:6, text: "Кредиты и возможно ипотека, видит в СВО возможность получения кредитных каникул и выхода из сведения концов с концами"},
  {n:7, text: "Экономит на всем, пытается выжить,видит мало личных перспектив"},
  {n:8, text: "То что война окончательно подорвет демография его республики"},
  {n:9, text: "Ухудшеие качества товаров в связи с импортозамешением, страх бомбежек (если живет в Белгородской и Курской обл)"},
  {n:10, text: "Проблемы с оформелнием выплат в случае смерти, редкий отпуск для родственника"},
];

lib_military = [
  {n:0, text: "Все"},
  {n:1, text: "Никто"},
  {n:2, text: "Профессионалы"},
  {n:3, text: "Контрактики"},
  {n:4, text: "Все"},
  {n:5, text: "Контрактики"},
  {n:6, text: "Контрактники, но при этом осуждает релокантов, поскольку скорее всего сам хотел бы находиться в европейской стране подальше от всего этого"},
  {n:7, text: "Военные и все кто подходит по здоровью, прошел срочную службу"},
  {n:8, text: "Никто"},
  {n:9, text: "Никто"},
  {n:10, text: "Не должно быть уклонистов, воевать должны все мужчины"},
];

lib_patriotism = [
  {n:0, text: "Все ради государства"},
  {n:1, text: "Любовь к родине и уважение к культуре"},
  {n:2, text: "Патриот должен выполнять свои обязанности перед государством"},
  {n:3, text: "Активное участие в жизни общества, соблюдение законов и защита интересов своей страны"},
  {n:4, text: "Глубокое чувство любви и преданности к своей стране, её истории, культуре и традициям"},
  {n:5, text: "Готов помогать своим соотечественникам и способствовать общему благополучию"},
  {n:6, text: "Считает, что государство должно более патарналистским, эмоционально подвержен российской пропаганде. Считает тебя патриотом, возможно считает себя коммунистом (социалистом, сторонником соц. справедливости)"},
  {n:7, text: "Патриотизм тесно связан с православной верой. Беспокоится, когда видит телесюжете о церковном расколе в Украине, считает, что греко-католики, хотят уничтожить православие в Украине и поэтому нужно воевать за то, чтобы Украина вошла в состав РФ"},
  {n:8, text: "Для него патриотизм - это сохрание национальных традиций и языка, активно думает о релокации семьи на время или ПМЖ, рассмотривает варианты перезда в Турцию, Египет или Боснию и Герцеговину. Но не знает, кем он будет работать на новом месте"},
  {n:9, text: "Нравиться жить в РФ, но хочется, что все вернулось на довоенный уровень, в идеале, чтобы доллар был по 30, а евро по 40"},
  {n:10, text: "Воевать в интересах государства, защита от НАТО, которое на нас \"напало\", считает своего родственника героем"},
];
/*
lib_values = [
  {n:0, text: ""},
  {n:1, text: ""},
  {n:2, text: ""},
  {n:3, text: ""},
  {n:4, text: ""},
  {n:5, text: ""},
  {n:6, text: ""},
  {n:7, text: ""},
  {n:8, text: ""},
  {n:9, text: ""},
  {n:10, text: ""},
];
*/
