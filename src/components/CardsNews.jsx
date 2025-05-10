import Button from "./Button";

export default function CardsNews() {
  const newsCards = [
    {
      title: "Мировая политика",
      description: "Новости из мира политики, как международной, так и локальной, в небольших регионах планеты",
      date: "8 мая 2025"
    },
    {
      title: "Экономическая обстановка",
      description: "Изучите новости из мира экономики, будьте в курсе всех изменений в сфере финансов и мирового бизнеса",
      date: "8 мая 2025"
    },
    {
      title: "Спортивные мероприятия",
      description: "Все события из мира спорта, информация о чемпионатах, конкурсах и небольших мероприятиях",
      date: "8 мая 2025"
    }
  ];

  return (
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
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base">
                Читать далее
              </Button>
              <span className="text-xs sm:text-sm text-gray-500">
                Последнее изменение: {card.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}