import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Icon name="Trees" className="text-emerald-400" size={32} />
              <h3 className="text-2xl font-bold">Forest&Spa Luxe</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-lg leading-relaxed">
              Эксклюзивный лесной ретрит с премиальными спа-услугами. Роскошь и
              природа в совершенной гармонии.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Icon name="Phone" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Icon name="Mail" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Icon name="MapPin" size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#rooms"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Номера
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Галерея
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Информация</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300">Заезд: 15:00</span>
              </li>
              <li>
                <span className="text-gray-300">Выезд: 12:00</span>
              </li>
              <li>
                <span className="text-gray-300">Спа 24/7</span>
              </li>
              <li>
                <span className="text-gray-300">Трансфер включен</span>
              </li>
              <li>
                <span className="text-gray-300">Консьерж-сервис</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-lg">
            © 2024 Forest&Spa Luxe. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
