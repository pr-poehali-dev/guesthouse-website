import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      content: "+7 (495) 123-45-67",
      description: "Консьерж-сервис 24/7",
    },
    {
      icon: "Mail",
      title: "Email",
      content: "booking@forestspaluxe.ru",
      description: "Ответим в течение 30 минут",
    },
    {
      icon: "MapPin",
      title: "Расположение",
      content: "Заповедная зона, 80 км от Москвы",
      description: "Трансфер от аэропорта включен",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-emerald-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Забронировать спа-отдых
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Свяжитесь с нашим консьерж-сервисом для создания персонального
            спа-опыта в Forest&Spa Luxe
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Премиальный сервис
              </h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Наша команда создаст для вас идеальную программу отдыха с учетом
                всех ваших предпочтений. От трансфера до персональных
                спа-процедур — мы позаботимся о каждой детали.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center">
                    <Icon
                      name={info.icon}
                      className="text-emerald-600"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {info.title}
                    </h4>
                    <p className="text-emerald-600 font-semibold text-lg">
                      {info.content}
                    </p>
                    <p className="text-gray-600">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-gray-900">
                Бронирование спа-отдыха
              </CardTitle>
              <CardDescription className="text-gray-700">
                Заполните форму, и наш консьерж свяжется с вами для создания
                персональной программы
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Дата заезда
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Дата выезда
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Тип номера
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                  <option>Лесной Люкс (от 25 000 ₽)</option>
                  <option>Спа-Сьют для двоих (от 18 000 ₽)</option>
                  <option>Семейный Ретрит (от 15 000 ₽)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Количество гостей
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                  <option>1-2 гостя</option>
                  <option>3-4 гостя</option>
                  <option>5-6 гостей</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Контактный телефон
                </label>
                <input
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Специальные пожелания
                </label>
                <textarea
                  rows={3}
                  placeholder="Расскажите о предпочтениях для спа-процедур, диетических ограничениях или особых случаях..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                />
              </div>

              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 py-4 text-lg">
                <Icon name="Sparkles" className="mr-2" />
                Забронировать роскошный отдых
              </Button>

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                и политикой конфиденциальности Forest&Spa Luxe
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
