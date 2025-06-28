import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Trees" className="text-emerald-600" size={28} />
            <h1 className="text-2xl font-bold text-gray-900">
              Forest&Spa Luxe
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              О нас
            </a>
            <a
              href="#rooms"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Номера
            </a>
            <a
              href="#gallery"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Галерея
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Контакты
            </a>
          </nav>

          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2">
            <Icon name="Sparkles" className="mr-2" size={16} />
            Забронировать
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
