import Button from "./Button";

export default function CardsNews() {
  return (
    <div className="flex justify-start p-4 w-full  h-full ">
      <div className="border-2 border-indigo-500 rounded-lg shadow-lg overflow-hidden  transition-all hover:shadow-xl hover:border-indigo-700 mx-8">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-indigo-800 mb-2">
            Мировая политика
          </h3>
          <hr className="border-indigo-300 mb-4" />
          <p className="text-gray-700 mb-6">
            Новости из мира политики, как международной, так и локальной, в
            небольших регионах планеты
          </p>
          <div className="flex justify-between items-center">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Читать далее
            </Button>
            <span className="text-sm text-gray-500">
              Последнее изменение: 8 мая 2025
            </span>
          </div>
        </div>
      </div>
      <div className="flex border-2 border-indigo-500 rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl hover:border-indigo-700 mx-8">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-indigo-800 mb-2">
            Экономическая обстановка
          </h3>
          <hr className="border-indigo-300 mb-4" />
          <p className="text-gray-700 mb-6">
            Изучите новости из мира экономики, будьте в курсе всех изменений в
            сфере финансов и мирового бизнеса
          </p>
          <div className="flex justify-between items-center">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Читать далее
            </Button>
            <span className="text-sm text-gray-500">
              Последнее изменение: 8 мая 2025
            </span>
          </div>
        </div>
      </div>
      <div className="border-2 border-indigo-500 rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl hover:border-indigo-700">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-indigo-800 mb-2">
            Спортивные мероприятия
          </h3>
          <hr className="border-indigo-300 mb-4" />
          <p className="text-gray-700 mb-6">
            Все события из мира спорта, информация о чемпионатах, конкурсах и
            небольших мероприятиях
          </p>
          <div className="flex justify-between items-center">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Читать далее
            </Button>
            <span className="text-sm text-gray-500">
              Последнее изменение: 8 мая 2025
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
