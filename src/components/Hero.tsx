import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <span className="text-emerald-400">Forest&Spa</span>
          <br />
          <span className="text-white">Luxe</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Роскошный лесной ретрит с премиальными спа-услугами
          <br />
          для незабываемого отдыха в объятиях природы
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-lg px-8 py-4 bg-emerald-600 hover:bg-emerald-700 shadow-xl"
          >
            <Icon name="Sparkles" className="mr-2" />
            Забронировать спа-отдых
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-emerald-900 shadow-xl"
          >
            <Icon name="Leaf" className="mr-2" />
            Узнать больше
          </Button>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
            <Icon name="ChevronDown" size={36} className="text-emerald-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
