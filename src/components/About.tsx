import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Trees",
      title: "Лесной ретрит",
      description:
        "Эксклюзивное расположение в сердце векового леса для полного единения с природой",
    },
    {
      icon: "Sparkles",
      title: "Премиальный спа",
      description:
        "Полный комплекс спа-услуг: сауна, джакузи, массажные процедуры и ароматерапия",
    },
    {
      icon: "Heart",
      title: "Для пар и семей",
      description:
        "Романтические пакеты для влюбленных и семейные программы с детскими развлечениями",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-emerald-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Добро пожаловать в Forest&Spa Luxe
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Наш эксклюзивный лесной ретрит — это идеальное сочетание роскоши и
            природы. Здесь современные спа-технологии встречаются с первозданной
            красотой леса, создавая уникальное пространство для восстановления
            души и тела.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=500&fit=crop"
              alt="Роскошный спа-интерьер Forest&Spa Luxe"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Роскошь в гармонии с природой
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Каждый элемент нашего ретрита создан для максимального комфорта и
              релаксации. Панорамные окна открывают захватывающие виды на лес, а
              натуральные материалы создают атмосферу гармонии. Наши
              спа-процедуры разработаны ведущими специалистами для глубокого
              восстановления и омоложения.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Icon
                  name="Check"
                  className="text-emerald-600 mr-4"
                  size={24}
                />
                <span className="text-gray-800 text-lg">
                  Премиальные спа-номера с лесными видами
                </span>
              </div>
              <div className="flex items-center">
                <Icon
                  name="Check"
                  className="text-emerald-600 mr-4"
                  size={24}
                />
                <span className="text-gray-800 text-lg">
                  Собственный спа-центр с сауной и джакузи
                </span>
              </div>
              <div className="flex items-center">
                <Icon
                  name="Check"
                  className="text-emerald-600 mr-4"
                  size={24}
                />
                <span className="text-gray-800 text-lg">
                  Профессиональные массажисты и терапевты
                </span>
              </div>
              <div className="flex items-center">
                <Icon
                  name="Check"
                  className="text-emerald-600 mr-4"
                  size={24}
                />
                <span className="text-gray-800 text-lg">
                  Экологически чистые процедуры и косметика
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center">
                  <Icon
                    name={feature.icon}
                    className="text-emerald-600"
                    size={32}
                  />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
