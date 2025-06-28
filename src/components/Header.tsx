import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Home" className="text-primary" size={24} />
            <h1 className="text-xl font-bold text-gray-900">Уютный Дом</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              О нас
            </a>
            <a
              href="#rooms"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Размещение
            </a>
            <a
              href="#gallery"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Галерея
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>

          <Button className="bg-primary hover:bg-primary/90">
            Забронировать
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
