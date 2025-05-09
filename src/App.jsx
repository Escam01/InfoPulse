import Button from "./components/Button";
import CardsNews from "./components/CardsNews";
import Footer from "./components/Footer";

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
          <p className="text-4xl text-center">Новость дня</p>
          <br />
          <br />
          <hr  className="border-indigo-500"/>
          <br />
          <br />
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
              <br />
              <Button>Открыть</Button>
            </div>
          </div>
        </section>
        <section className="mx-32 my-32">
          <p className="text-4xl text-center">Разделы новостей</p>
          <br />
          <br />
          <hr  className="border-indigo-500"/>
          <br />
          <br />
          <div>
            <CardsNews />
          </div>
        </section>
        <section className="mx-32 my-32">
          <p className="text-4xl text-center">Популярные новости</p>
          <br />
          <br />
          <hr  className="border-indigo-500"/>
          <br />
          <br />
        </section>
        <section className="mx-32 my-32">
          <p className="text-4xl text-center">Последние новости</p>
          <br />
          <br />
          <hr  className="border-indigo-500"/>
          <br />
          <br />
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
