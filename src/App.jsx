import Button from "./components/Button";
import CardsNews from "./components/CardsNews";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";

export default function App() {
  const newsDaysImage = "/news-day.png";
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Навигация */}
      <nav className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <button className="sm:hidden p-2">
              <BurgerMenu />
            </button>
            
            <p className="text-2xl sm:text-3xl font-sans font-bold">InfoPulse</p>
            
            <div className="hidden sm:block">
              <ul className="flex space-x-6">
                <li className="hover:text-indigo-600 cursor-pointer">Новость дня</li>
                <li className="hover:text-indigo-600 cursor-pointer">Разделы новостей</li>
                <li className="hover:text-indigo-600 cursor-pointer">Популярные новости</li>
                <li className="hover:text-indigo-600 cursor-pointer">Последние новости</li>
                <li className="hover:text-indigo-600 cursor-pointer">Контакты</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Основное содержимое */}
      <main className="flex-grow container mx-auto px-4 sm:px-6">
        {/* Новость дня */}
        <section className="py-12 md:py-16 lg:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Новость дня</h2>
          <div className="border-t-2 border-indigo-500 w-24 mx-auto mb-12"></div>
          
          <div className="relative rounded-xl overflow-hidden h-64 sm:h-80 md:h-96">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${newsDaysImage})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            
            <div className="relative z-10 h-full justify-center p-6 sm:p-16 md:p-32">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">Экономический форум</h3>
              <p className="text-white text-base sm:text-lg md:text-xl mb-6">
                В столичном регионе 17 мая прошел международный экономический
                форум, были решены проблемы экономического кризиса
              </p>
              <Button className="text-sm">Открыть</Button>
            </div>
          </div>
        </section>

        {/* Разделы новостей */}
        <section className="py-12 md:py-16 lg:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Разделы новостей</h2>
          <div className="border-t-2 border-indigo-500 w-24 mx-auto mb-12"></div>
          
          <div className="">
            <CardsNews></CardsNews>
          </div>
        </section>

        {/* Популярные новости */}
        <section className="py-12 md:py-16 lg:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Популярные новости</h2>
          <div className="border-t-2 border-indigo-500 w-24 mx-auto mb-12"></div>
          
          {/* Здесь можно добавить компонент для популярных новостей */}
        </section>

        {/* Последние новости */}
        <section className="py-12 md:py-16 lg:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Последние новости</h2>
          <div className="border-t-2 border-indigo-500 w-24 mx-auto mb-12"></div>
          
          {/* Здесь можно добавить компонент для последних новостей */}
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-gray-100 mt-auto">
        <Footer />
      </footer>
    </div>
  );
}