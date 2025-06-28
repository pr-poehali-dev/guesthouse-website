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
      name: "Главная спальня",
      description: "Просторная комната с кроватью king-size и видом на озеро",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
      features: [
        "Кровать king-size",
        "Собственная ванная",
        "Вид на озеро",
        "Балкон",
      ],
    },
    {
      name: "Семейная комната",
      description: "Идеальна для семей с детьми, две односпальные кровати",
      image:
        "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&h=300&fit=crop",
      features: [
        "Две односпальные кровати",
        "Рабочий стол",
        "Игровая зона",
        "Общая ванная",
      ],
    },
    {
      name: "Уютная комната",
      description: "Романтичная обстановка для пар, французская кровать",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      features: [
        "Французская кровать",
        "Камин",
        "Кресло для чтения",
        "Вид на сад",
      ],
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши номера</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Каждый номер обустроен с заботой о вашем комфорте и создает уютную
            атмосферу для отдыха
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  {room.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {room.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Icon
                        name="Check"
                        className="text-green-500 mr-2"
                        size={16}
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full" variant="outline">
                  <Icon name="Eye" className="mr-2" size={16} />
                  Посмотреть фото
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
