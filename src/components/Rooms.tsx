import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Rooms = () => {
  const rooms = [
    {
      name: "Лесной Люкс",
      description:
        "Роскошный номер с панорамными окнами и собственным спа-балконом",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop",
      price: "от 25 000 ₽/ночь",
      features: [
        "Панорамные окна в лес",
        "Собственная сауна",
        "Спа-ванна с видом на природу",
        "Массажный кабинет",
        "Мини-бар премиум класса",
      ],
    },
    {
      name: "Спа-Сьют для двоих",
      description:
        "Романтический номер с джакузи и камином для незабываемых моментов",
      image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop",
      price: "от 18 000 ₽/ночь",
      features: [
        "Джакузи для двоих",
        "Биокамин",
        "Романтическое освещение",
        "Спа-процедуры в номере",
        "Шампанское при заселении",
      ],
    },
    {
      name: "Семейный Ретрит",
      description:
        "Просторные апартаменты для семейного отдыха с детской зоной",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop",
      price: "от 15 000 ₽/ночь",
      features: [
        "Две спальни",
        "Детская игровая зона",
        "Семейная сауна",
        "Кухня-гостиная",
        "Терраса с мангалом",
      ],
    },
  ];

  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Премиальные номера
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Каждый номер — это уникальное пространство роскоши, созданное для
            идеального спа-отдыха в окружении природы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {rooms.map((room, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 bg-gradient-to-b from-white to-emerald-50/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {room.price}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 mb-2">
                  {room.name}
                </CardTitle>
                <CardDescription className="text-gray-700 text-base">
                  {room.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 mb-8">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Icon
                        name="Sparkles"
                        className="text-emerald-600 mr-3"
                        size={18}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                    <Icon name="Calendar" className="mr-2" size={16} />
                    Забронировать
                  </Button>
                  <Button
                    variant="outline"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    <Icon name="Eye" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
