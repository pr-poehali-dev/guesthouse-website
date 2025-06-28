const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&h=400&fit=crop",
      alt: "Спа-номер с джакузи и лесным видом",
      category: "Спа",
    },
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&h=400&fit=crop",
      alt: "Роскошная сауна с панорамными окнами",
      category: "Спа",
    },
    {
      src: "https://images.unsplash.com/photo-1594736797933-d0b22a6b6f31?w=500&h=400&fit=crop",
      alt: "Лесная терраса для релаксации",
      category: "Природа",
    },
    {
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&h=400&fit=crop",
      alt: "Премиальный номер Лесной Люкс",
      category: "Номера",
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=400&fit=crop",
      alt: "Массажный кабинет с видом на лес",
      category: "Спа",
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=400&fit=crop",
      alt: "Окружающий вековой лес",
      category: "Природа",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-emerald-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Галерея Forest&Spa Luxe
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Погрузитесь в атмосферу роскоши и природной красоты нашего лесного
            ретрита
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {image.category}
                  </span>
                  <p className="text-white font-medium text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
