

export default function PopularNews() {
  const newsCard = [
    {
      img: "/9may.webp",
      title: "Парад 9 мая",
      description:
        "Более 16,5 тыс воронежцев наблюдали парад Победы на площади Ленина",
      timeDate: "9 мая 2025",
    },
  ];
  return (
    <>
      {newsCard.map((card, index) => (
        <div key={index}>
            <img src="/public/9may.webp" alt="" />
          <h1>{card.title}</h1>
          <h1>{card.description}</h1>
          <h1>{card.timeDate}</h1>
        </div>
      ))}
    </>
  );
}
