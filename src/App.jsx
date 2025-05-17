import Button from "./components/Button";
import CardsNews from "./components/CardsNews";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";
import PopularNews from "./components/PopularNews";
import LatestNews from "./components/LatestNews";
import { useRef, useState } from "react";

export default function App() {
  const newsDaysImage = "/news-day.png";

  const sectionNewsDays = useRef(null);
  const sectionNewsSection = useRef(null);
  const sectionPopularNews = useRef(null);
  const sectionLatestNews = useRef(null);
  const footer = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const newsCards = [
    {
      title: "Мировая политика",
      description:
        "Новости из мира политики, как международной, так и локальной, в небольших регионах планеты",
      date: "8 мая 2025",
    },
    {
      title: "Экономическая обстановка",
      description:
        "Изучите новости из мира экономики, будьте в курсе всех изменений в сфере финансов и мирового бизнеса",
      date: "8 мая 2025",
    },
    {
      title: "Спортивные мероприятия",
      description:
        "Все события из мира спорта, информация о чемпионатах, конкурсах и небольших мероприятиях",
      date: "8 мая 2025",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Навигация */}
      <nav className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <button className="sm:hidden p-2">
              <BurgerMenu />
            </button>

            <p className="text-2xl sm:text-3xl font-sans font-bold">
              InfoPulse
            </p>

            <div className="hidden sm:block">
              <ul className="flex space-x-6">
                <button onClick={() => scrollTo(sectionNewsDays)}>
                  <li className="hover:text-indigo-600 cursor-pointer">
                    Новость дня
                  </li>
                </button>
                <button onClick={() => scrollTo(sectionNewsSection)}>
                  <li className="hover:text-indigo-600 cursor-pointer">
                    Разделы новостей
                  </li>
                </button>
                <button onClick={() => scrollTo(sectionPopularNews)}>
                  <li className="hover:text-indigo-600 cursor-pointer">
                    Популярные новости
                  </li>
                </button>
                <button onClick={() => scrollTo(sectionLatestNews)}>
                  <li className="hover:text-indigo-600 cursor-pointer">
                    Последние новости
                  </li>
                </button>
                <button onClick={() => scrollTo(footer)}>
                  <li className="hover:text-indigo-600 cursor-pointer">
                    Контакты
                  </li>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Основное содержимое */}
      <main className="flex-grow container mx-auto px-4 sm:px-6">
        {/* Новость дня */}
        <section
          ref={sectionNewsDays}
          id="news-day"
          className="py-12 md:py-16 lg:py-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Новость дня
          </h2>
          <div className="border-t-2 border-indigo-500 w-24 mx-auto mb-12"></div>

          <div className="relative rounded-xl overflow-hidden h-64 sm:h-80 md:h-96">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${newsDaysImage})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative z-10 h-full justify-center p-6 sm:p-16 md:p-32">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                Экономический форум
              </h3>
              <p className="text-white text-base sm:text-lg md:text-xl mb-6">
                В столичном регионе 17 мая прошел международный экономический
                форум, были решены проблемы экономического кризиса
              </p>
              <button onClick={() => scrollTo(sectionLatestNews)}>
                <Button className="text-sm">Открыть</Button>
              </button>
            </div>
          </div>
        </section>

        {/* Разделы новостей */}
        <section ref={sectionNewsSection} className="py-12 md:py-16 lg:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Разделы новостей
          </h2>
          <div className="border-t-2 border-indigo-500 w-24 mx-auto mb-12"></div>{" "}
          <div className="">
            {/* <CardsNews></CardsNews> */}
            <div className="grid grid-cols-1  gap-6 px-4 sm:px-6 lg:px-8 py-8">
              {newsCards.map((card, index) => (
                <div
                  key={index}
                  className="border-2 border-indigo-500 rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl hover:border-indigo-700 h-full flex flex-col"
                >
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold text-indigo-800 mb-3">
                      {card.title}
                    </h3>
                    <hr className="border-indigo-300 mb-4" />
                    <p className="text-gray-700 mb-6 text-base sm:text-lg">
                      {card.description}
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="flex justify-between items-center">
                      <button onClick={() => scrollTo(sectionLatestNews)}>
                        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base">
                          Читать далее
                        </Button>
                      </button>
                      <span className="text-xs sm:text-sm text-gray-500">
                        Последнее изменение: {card.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Популярные новости */}
        <section ref={sectionPopularNews} className="py-12 md:py-16 lg:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Популярные новости
          </h2>
          <div className="border-t-2 border-indigo-500 w-24 mx-auto mb-12" ></div>
          <PopularNews />
        </section>

        {/* Последние новости */}
        <section ref={sectionLatestNews} className="py-12 md:py-16 lg:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Последние новости
          </h2>
          <div className="border-t-2 border-indigo-500 w-24 mx-auto mb-12"></div>
          <LatestNews/>
        </section>
      </main>

      {/* Подвал */}
      <footer ref={footer} className="bg-gray-100 mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
