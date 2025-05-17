export default function LatestNews() {
  const newsCard = [
    {
      img: "/putintrump.jpg",
      title: "Трамп хочет как можно скорее встретится с Путиным",
      description: "Решается вопрос о том, где и когда пройдут переговоры",
      author: "госсекретарь США Рубио",
      timeDate: "17 мая 2025",
    },
    {
      img: "/vatikan.jpg",
      title: "Ватикан не будет посредником в мирном урегулировании в Украине",
      description: "При этом он отметил, что Ватикан — то место, куда «обеим сторонам было бы удобно приехать».",
      author: "госсекретарь США Рубио",
      timeDate: "17 мая 2025",
    },
        {
      img: "/fondrinok.jpg",
      title: "Большая стройка в России откладывается из-за кризиса?",
      description: "Падение продаж в новостройках и рост объемов нераспроданного жилья ведут к снижению активности застройщиков и росту себестоимости строительства. Все это на фоне увеличения цен на материалы и логистику – цепная реакция негативных факторов затрагивает и смежные со строительством рынки.».",
      author: "Филипп Хорварт",
      timeDate: "16 мая 2025",
    },
  ];

  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8 py-8">
      {newsCard.map((card, index) => (
        <div 
          key={index}
          className="w-full bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg"
        >
          <div className="flex flex-col md:flex-row">
            {/* Изображение - теперь слева */}
            <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
              <img 
                src={card.img} 
                alt={card.description}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Текстовая часть - теперь справа */}
            <div className="md:w-2/3 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4 text-lg">
                  {card.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="mb-3 sm:mb-0">
                  <span className="text-sm text-gray-500 block">{card.timeDate}</span>
                  <span className="text-sm text-gray-500 italic font-semibold">
                    {card.author}
                  </span>
                </div>
                <button className="text-indigo-600 hover:text-indigo-800 font-medium px-4 py-2 border border-indigo-600 rounded hover:bg-indigo-50">
                  Подробнее →
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}