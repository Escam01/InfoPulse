export default function App() {
  const newsDaysImage = "/news-day.png";
  return (
    <>
      <nav className="">
        <p className="text-3xl mx-8 pt-6 font-sans">InfoPulse</p>
        <ul className="flex flex-row-reverse space-x-8 mx-8">
          <br />
          <li>Контакты</li>
          <li>Последние новости</li>
          <li>Популярные новости</li>
          <li>Разделы новостей</li>
          <li>Новость дня</li>
        </ul>
      </nav>
      <main>
        <section className="mx-32 my-32">
          <div
            className="relative w-full h-96 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${newsDaysImage})` }}
          >
            {/* Затемнение фона */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            
            {/* Контент */}
            <div className="relative z-10 mx-40 text-white p-6">
              <p className="text-3xl font-bold">Экономический форум</p>
              <p className="text-xl mt-2">
                В столичном регионе 17 мая прошел международный экономический
                форум, были решены проблемы экономического кризиса
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}