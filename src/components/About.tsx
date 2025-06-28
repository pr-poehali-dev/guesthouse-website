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
      icon: "MapPin",
      title: "Прекрасное расположение",
      description: "В окружении леса и озера, вдали от городской суеты",
    },
    {
      icon: "Users",
      title: "Для семей и пар",
      description:
        "Уютные номера для романтических выходных и семейного отдыха",
    },
    {
      icon: "Wifi",
      title: "Все удобства",
      description: "Wi-Fi, кухня, парковка, зона барбекю и детская площадка",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            О нашем доме
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наш гостевой дом — это место, где современный комфорт встречается с
            природной красотой. Мы создали пространство для незабываемого отдыха
            вдали от городского шума.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop"
              alt="Интерьер гостевого дома"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Уют и комфорт
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Каждый уголок нашего дома продуман до мелочей. Просторные номера с
              панорамными окнами, современная кухня, уютная гостиная с камином и
              терраса с видом на озеро — все это создает атмосферу домашнего
              тепла и покоя.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <Icon name="Check" className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">До 8 гостей одновременно</span>
              </div>
              <div className="flex items-center">
                <Icon name="Check" className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">
                  3 спальни и 2 ванные комнаты
                </span>
              </div>
              <div className="flex items-center">
                <Icon name="Check" className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">
                  Полностью оборудованная кухня
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon
                    name={feature.icon}
                    className="text-primary"
                    size={24}
                  />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
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
