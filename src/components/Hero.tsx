import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1520637836862-4d197d17c2a0?w=1920&h=1080&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Добро пожаловать в<br />
          <span className="text-primary">Уютный Дом</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Идеальное место для семейного отдыха и романтических выходных в
          окружении природы
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-lg px-8 py-3 bg-primary hover:bg-primary/90"
          >
            <Icon name="Calendar" className="mr-2" />
            Забронировать сейчас
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900"
          >
            <Icon name="Phone" className="mr-2" />
            Связаться с нами
          </Button>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="animate-bounce">
            <Icon name="ChevronDown" size={32} className="text-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
