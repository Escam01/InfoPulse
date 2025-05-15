export default function PopularNews() {
  const newsCards = [
    {
      img: "/9may.webp",
      title: "Парад 9 мая",
      description: "Более 16,5 тыс воронежцев наблюдали парад Победы на площади Ленина",
      timeDate: "9 мая 2025",
    },
    {
      img: "/sport-event.webp",
      title: "Спортивные соревнования",
      description: "Городской марафон собрал рекордное количество участников",
      timeDate: "10 мая 2025",
    },
    {
      img: "/culture.webp",
      title: "Культурное событие",
      description: "Открытие новой выставки в краеведческом музее",
      timeDate: "11 мая 2025",
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 py-8">
      {newsCards.map((card, index) => (
        <div 
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg"
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={card.img} 
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{card.timeDate}</span>
              <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                Подробнее →
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}