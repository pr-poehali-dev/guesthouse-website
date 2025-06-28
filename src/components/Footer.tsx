import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Home" className="text-primary" size={24} />
              <h3 className="text-xl font-bold">Уютный Дом</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Гостевой дом для семейного отдыха и романтических выходных в
              окружении природы Подмосковья.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#rooms"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Размещение
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Галерея
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Заезд: 15:00</span>
              </li>
              <li>
                <span className="text-gray-300">Выезд: 12:00</span>
              </li>
              <li>
                <span className="text-gray-300">До 8 гостей</span>
              </li>
              <li>
                <span className="text-gray-300">Парковка бесплатно</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Уютный Дом. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
