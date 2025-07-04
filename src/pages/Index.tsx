import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  Calculator,
  Hammer,
  Home,
  Castle,
  Zap,
  Users,
  Award,
  MessageSquare,
} from "lucide-react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [buildingSize, setBuildingSize] = useState({
    width: 10,
    height: 10,
    length: 10,
  });
  const [selectedService, setSelectedService] = useState("house");
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const services = [
    { id: "house", name: "Дом", price: 0.02, icon: "Home", color: "#8B4513" },
    {
      id: "castle",
      name: "Замок",
      price: 0.03,
      icon: "Castle",
      color: "#4169E1",
    },
    {
      id: "redstone",
      name: "Редстоун механизм",
      price: 0.04,
      icon: "Zap",
      color: "#FFD700",
    },
    { id: "farm", name: "Ферма", price: 0.01, icon: "Home", color: "#228B22" },
  ];

  const reviews = [
    {
      name: "Строитель123",
      rating: 5,
      text: "Отличная работа! Замок получился просто шикарный!",
      service: "Замок 50x50",
    },
    {
      name: "MinerPro",
      rating: 4,
      text: "Быстро и качественно построили ферму. Рекомендую!",
      service: "Автоматическая ферма",
    },
    {
      name: "CraftMaster",
      rating: 5,
      text: "Редстоун механизм работает идеально. Спасибо!",
      service: "Редстоун лифт",
    },
  ];

  const calculatePrice = () => {
    const service = services.find((s) => s.id === selectedService);
    const volume =
      buildingSize.width * buildingSize.height * buildingSize.length;
    const basePrice = service ? service.price : 0.02;
    const totalPrice = Math.ceil(volume * basePrice * 100) / 100;
    setCalculatedPrice(totalPrice);
  };

  React.useEffect(() => {
    calculatePrice();
  }, [buildingSize, selectedService]);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-blue-400 to-green-300"
      style={{
        backgroundImage:
          "linear-gradient(45deg, #87CEEB 25%, transparent 25%), linear-gradient(-45deg, #87CEEB 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #87CEEB 75%), linear-gradient(-45deg, transparent 75%, #87CEEB 75%)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
      }}
    >
      {/* Header */}
      <header className="bg-stone-800 text-white p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div
              className="w-12 h-12 bg-stone-600 rounded-sm flex items-center justify-center"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #8B4513, #8B4513 2px, #A0522D 2px, #A0522D 4px)",
              }}
            >
              <Icon name="Hammer" className="text-white" size={24} />
            </div>
            <h1
              className="text-2xl font-bold"
              style={{
                fontFamily: "monospace",
                textShadow: "2px 2px 0px #000",
                letterSpacing: "1px",
              }}
            >
              MINECRAFT BUILDERS
            </h1>
          </div>
          <nav className="flex space-x-6">
            <Button variant="ghost" className="text-white hover:bg-stone-700">
              Главная
            </Button>
            <Button variant="ghost" className="text-white hover:bg-stone-700">
              Услуги
            </Button>
            <Button variant="ghost" className="text-white hover:bg-stone-700">
              Галерея
            </Button>
            <Button variant="ghost" className="text-white hover:bg-stone-700">
              FAQ
            </Button>
            <Button variant="ghost" className="text-white hover:bg-stone-700">
              Контакты
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1
            className="text-6xl font-bold mb-6"
            style={{
              fontFamily: "monospace",
              textShadow: "4px 4px 0px #000",
              color: "#FFF",
              letterSpacing: "2px",
            }}
          >
            СТРОИМ ЛЮБОЕ ЗДАНИЕ
          </h1>
          <p
            className="text-2xl mb-8 text-white"
            style={{
              textShadow: "2px 2px 0px #000",
              fontFamily: "monospace",
            }}
          >
            Профессиональные постройки в Майнкрафт с готовыми схемами!
          </p>
          <div className="flex justify-center mb-12">
            <img
              src="/img/f601900b-1518-497e-be1b-ca7592ff9a1f.jpg"
              alt="Minecraft Buildings"
              className="rounded-lg shadow-2xl max-w-2xl w-full"
              style={{
                imageRendering: "pixelated",
                filter: "contrast(1.1) saturate(1.2)",
              }}
            />
          </div>
          <Button
            size="lg"
            className="bg-stone-600 hover:bg-stone-700 text-white text-xl px-8 py-4"
            style={{
              fontFamily: "monospace",
              textShadow: "1px 1px 0px #000",
              boxShadow: "0 4px 0 #4A5568",
            }}
          >
            ЗАКАЗАТЬ ПОСТРОЙКУ
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-stone-100">
        <div className="container mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{
              fontFamily: "monospace",
              textShadow: "2px 2px 0px #666",
              color: "#2D3748",
            }}
          >
            НАШИ УСЛУГИ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="border-4 border-stone-400 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader
                  className="text-center"
                  style={{ backgroundColor: service.color + "20" }}
                >
                  <div
                    className="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                    style={{
                      backgroundColor: service.color,
                      borderRadius: "4px",
                    }}
                  >
                    <Icon
                      name={service.icon}
                      className="text-white"
                      size={32}
                    />
                  </div>
                  <CardTitle
                    className="text-xl"
                    style={{
                      fontFamily: "monospace",
                      color: "#2D3748",
                    }}
                  >
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p
                    className="text-lg font-bold mb-4"
                    style={{
                      fontFamily: "monospace",
                      color: service.color,
                    }}
                  >
                    от {service.price}₽ за блок
                  </p>
                  <Button
                    className="w-full"
                    style={{
                      backgroundColor: service.color,
                      fontFamily: "monospace",
                    }}
                  >
                    ВЫБРАТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 bg-stone-200">
        <div className="container mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{
              fontFamily: "monospace",
              textShadow: "2px 2px 0px #666",
              color: "#2D3748",
            }}
          >
            КАЛЬКУЛЯТОР СТОИМОСТИ
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-4 border-stone-400 shadow-lg">
              <CardHeader>
                <CardTitle
                  className="text-2xl text-center"
                  style={{
                    fontFamily: "monospace",
                    color: "#2D3748",
                  }}
                >
                  Рассчитайте стоимость постройки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label
                        className="text-lg font-bold mb-2"
                        style={{ fontFamily: "monospace" }}
                      >
                        Тип постройки:
                      </Label>
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((service) => (
                          <Button
                            key={service.id}
                            variant={
                              selectedService === service.id
                                ? "default"
                                : "outline"
                            }
                            onClick={() => setSelectedService(service.id)}
                            className={`text-sm ${selectedService === service.id ? "shadow-lg" : ""}`}
                            style={{
                              fontFamily: "monospace",
                              backgroundColor:
                                selectedService === service.id
                                  ? service.color
                                  : "transparent",
                              borderColor: service.color,
                              color:
                                selectedService === service.id
                                  ? "#FFF"
                                  : service.color,
                            }}
                          >
                            {service.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label
                          className="text-lg font-bold"
                          style={{ fontFamily: "monospace" }}
                        >
                          Ширина (блоки):
                        </Label>
                        <Input
                          type="number"
                          value={buildingSize.width}
                          onChange={(e) =>
                            setBuildingSize((prev) => ({
                              ...prev,
                              width: parseInt(e.target.value) || 0,
                            }))
                          }
                          className="text-lg border-2 border-stone-400"
                          style={{ fontFamily: "monospace" }}
                        />
                      </div>
                      <div>
                        <Label
                          className="text-lg font-bold"
                          style={{ fontFamily: "monospace" }}
                        >
                          Высота (блоки):
                        </Label>
                        <Input
                          type="number"
                          value={buildingSize.height}
                          onChange={(e) =>
                            setBuildingSize((prev) => ({
                              ...prev,
                              height: parseInt(e.target.value) || 0,
                            }))
                          }
                          className="text-lg border-2 border-stone-400"
                          style={{ fontFamily: "monospace" }}
                        />
                      </div>
                      <div>
                        <Label
                          className="text-lg font-bold"
                          style={{ fontFamily: "monospace" }}
                        >
                          Длина (блоки):
                        </Label>
                        <Input
                          type="number"
                          value={buildingSize.length}
                          onChange={(e) =>
                            setBuildingSize((prev) => ({
                              ...prev,
                              length: parseInt(e.target.value) || 0,
                            }))
                          }
                          className="text-lg border-2 border-stone-400"
                          style={{ fontFamily: "monospace" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-stone-600 text-white p-6 rounded-lg">
                    <h3
                      className="text-2xl font-bold mb-4 text-center"
                      style={{ fontFamily: "monospace" }}
                    >
                      РАСЧЕТ
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span style={{ fontFamily: "monospace" }}>Размер:</span>
                        <span style={{ fontFamily: "monospace" }}>
                          {buildingSize.width}×{buildingSize.height}×
                          {buildingSize.length}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ fontFamily: "monospace" }}>Объем:</span>
                        <span style={{ fontFamily: "monospace" }}>
                          {buildingSize.width *
                            buildingSize.height *
                            buildingSize.length}{" "}
                          блоков
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ fontFamily: "monospace" }}>Тип:</span>
                        <span style={{ fontFamily: "monospace" }}>
                          {services.find((s) => s.id === selectedService)?.name}
                        </span>
                      </div>
                      <Separator className="bg-stone-400" />
                      <div className="flex justify-between text-xl font-bold">
                        <span style={{ fontFamily: "monospace" }}>ИТОГО:</span>
                        <span style={{ fontFamily: "monospace" }}>
                          {calculatedPrice}₽
                        </span>
                      </div>
                    </div>
                    <Button
                      className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white"
                      style={{ fontFamily: "monospace" }}
                    >
                      ЗАКАЗАТЬ ЗА {calculatedPrice}₽
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-stone-100">
        <div className="container mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{
              fontFamily: "monospace",
              textShadow: "2px 2px 0px #666",
              color: "#2D3748",
            }}
          >
            ОТЗЫВЫ КЛИЕНТОВ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-4 border-stone-400 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle
                      className="text-lg"
                      style={{ fontFamily: "monospace", color: "#2D3748" }}
                    >
                      {review.name}
                    </CardTitle>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="w-fit"
                    style={{ fontFamily: "monospace" }}
                  >
                    {review.service}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p
                    className="text-gray-700"
                    style={{ fontFamily: "monospace" }}
                  >
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-yellow-100 px-6 py-4 rounded-lg border-4 border-yellow-400">
              <Award className="text-yellow-600" size={32} />
              <div>
                <p
                  className="text-xl font-bold"
                  style={{ fontFamily: "monospace", color: "#2D3748" }}
                >
                  СРЕДНИЙ РЕЙТИНГ
                </p>
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: "monospace", color: "#D69E2E" }}
                >
                  4.7/5
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-stone-800 text-white">
        <div className="container mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{
              fontFamily: "monospace",
              textShadow: "2px 2px 0px #000",
            }}
          >
            СВЯЗАТЬСЯ С НАМИ
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-stone-400 bg-stone-700">
              <CardHeader>
                <CardTitle
                  className="text-2xl text-center text-white"
                  style={{ fontFamily: "monospace" }}
                >
                  Готовы начать строительство?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label
                    className="text-white font-bold"
                    style={{ fontFamily: "monospace" }}
                  >
                    Ваше имя:
                  </Label>
                  <Input
                    className="bg-stone-600 border-stone-400 text-white"
                    style={{ fontFamily: "monospace" }}
                  />
                </div>
                <div>
                  <Label
                    className="text-white font-bold"
                    style={{ fontFamily: "monospace" }}
                  >
                    Описание проекта:
                  </Label>
                  <Textarea
                    className="bg-stone-600 border-stone-400 text-white"
                    rows={4}
                    style={{ fontFamily: "monospace" }}
                  />
                </div>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3"
                  style={{ fontFamily: "monospace" }}
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg" style={{ fontFamily: "monospace" }}>
            © 2024 Minecraft Builders. Строим мечты блок за блоком!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
