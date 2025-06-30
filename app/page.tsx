import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, MapPin, Heart, Sparkles } from "lucide-react"

export default function HomePage() {
  const featuredProducts = [
    {
      name: "Rainbow Unicorn Cake",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1553710120-23dd1551da41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmFpbmJvdyUyMFVuaWNvcm4lMjBDYWtlfGVufDB8fDB8fHww",
      badge: "Magical ✨",
      color: "from-fuchsia-400 to-violet-500",
    },
    {
      name: "Sunshine Croissant",
      price: "$3.50",
      image: "https://images.unsplash.com/photo-1730426373073-97e7b92c71c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3Vuc2hpbmUlMjBDcm9pc3NhbnR8ZW58MHx8MHx8fDA%3D",
      badge: "Fresh Daily 🌅",
      color: "from-amber-400 to-orange-500",
    },
    {
      name: "Love Potion Cupcake",
      price: "$4.25",
      image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEN1cGNha2V8ZW58MHx8MHx8fDA%3D",
      badge: "Sweet Love 💕",
      color: "from-rose-400 to-pink-500",
    },
  ]

  const sweetQuotes = [
    "Life is what you bake it! ",
    "Happiness is homemade 🏠💕",
    "Baking is love made visible ✨",
    "Sweet dreams are made of cream 🌙",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-fuchsia-50 to-violet-50 overflow-hidden">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 text-4xl animate-bounce">🌸</div>
        <div className="absolute top-40 right-20 text-3xl float-animation">🌺</div>
        <div className="absolute bottom-40 left-20 text-5xl float-animation" style={{ animationDelay: "1s" }}>
          🌻
        </div>
        <div className="absolute top-60 left-1/3 text-2xl sparkle-animation">✨</div>
        <div className="absolute bottom-60 right-1/4 text-3xl sparkle-animation" style={{ animationDelay: "2s" }}>
          💫
        </div>
        <div className="absolute top-1/3 right-10 text-4xl float-animation" style={{ animationDelay: "0.5s" }}>
          🦋
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="rainbow-gradient absolute inset-0 opacity-20"></div>
          <Image
            src="https://images.unsplash.com/photo-1691242720281-9269de4d9f86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNha2UlMjBiYWNrZ3JvdW5kfGVufDB8MHwwfHx8MA%3D%3D"
            alt="Magical bakery wonderland"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-900/30 via-violet-900/20 to-rose-900/30" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl bloom-animation">
          <div className="mb-6">
         
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-serif bg-gradient-to-r from-fuchsia-300 via-violet-300 to-rose-300 bg-clip-text text-transparent">
            Golden Crust Bakery
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light text-fuchsia-100">Where Dreams Come True Since 1985</p>
          <div className="sweet-quote text-xl text-rose-200 mb-8 max-w-2xl mx-auto">
            Baking magic into every bite, spreading joy one sweet creation at a time! 
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="rainbow-gradient text-white px-10 py-4 text-xl font-bold pulse-glow border-0 hover:scale-105 transition-transform"
            >
              <Sparkles className="w-6 h-6 mr-2" />
              <Link href="/menu">Order Magic Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 border-white/50 text-white hover:bg-white hover:text-fuchsia-800 px-10 py-4 text-xl backdrop-blur-sm hover:scale-105 transition-transform"
            >
              <Heart className="w-6 h-6 mr-2" />
              <Link href="/about">Our Sweet Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Inspiring Quote Banner */}
      <section className="py-8 bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative z-10 text-center">
          <div className="sweet-quote text-2xl md:text-3xl font-bold text-white max-w-4xl mx-auto px-4">
            {sweetQuotes[0]} Every day is a new opportunity to create something beautiful and delicious!
          </div>
        </div>
        <div className="absolute -top-4 -left-4 text-6xl opacity-30 float-animation">🌈</div>
        <div
          className="absolute -bottom-4 -right-4 text-6xl opacity-30 float-animation"
          style={{ animationDelay: "1s" }}
        >
          ☀️
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto text-center bloom-animation">
         
          <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-fuchsia-600 via-violet-600 to-rose-600 bg-clip-text mb-8 font-serif">
            Welcome to Our Magical Kingdom
          </h2>
          <div className="sweet-quote text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            For nearly four decades, we've been weaving magic into every loaf, painting rainbows on every cake, and
            sprinkling love into every cookie. Our enchanted ovens work day and night to bring you the most delightful
            treats that make hearts sing and souls dance with joy! 🎭💃
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {sweetQuotes.slice(1).map((quote, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-gradient-to-br ${
                  index === 0
                    ? "from-rose-100 to-pink-200"
                    : index === 1
                      ? "from-violet-100 to-fuchsia-200"
                      : "from-emerald-100 to-sky-200"
                } bloom-animation hover:scale-105 transition-transform`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-3">{index === 0 ? "🏠" : index === 1 ? "✨" : "🌙"}</div>
                <p className="sweet-quote text-lg font-semibold text-gray-800">{quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-gradient-to-r from-fuchsia-50 via-violet-50 to-rose-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🌟🎂🌟</div>
            <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-fuchsia-600 via-violet-600 to-rose-600 bg-clip-text mb-6 font-serif">
              Magical Creations
            </h2>
            <p className="sweet-quote text-xl text-gray-700 max-w-3xl mx-auto">
              Each creation is a masterpiece, crafted with love and sprinkled with dreams! ✨
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bloom-animation hover:scale-105"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 z-10`}></div>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge
                      className={`absolute top-4 left-4 bg-gradient-to-r ${product.color} text-white border-0 z-20 pulse-glow`}
                    >
                      {product.badge}
                    </Badge>
                    <div className="absolute top-4 right-4 text-2xl sparkle-animation z-20"></div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-white to-fuchsia-50">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text">
                        {product.price}
                      </span>
                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-current sparkle-animation"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                    <Button
                      className={`w-full mt-4 bg-gradient-to-r ${product.color} text-white border-0 hover:scale-105 transition-transform`}
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="rainbow-gradient text-white px-12 py-4 text-xl font-bold pulse-glow border-0 hover:scale-105 transition-transform"
            >
              <Sparkles className="w-6 h-6 mr-2" />
              <Link href="/menu">Explore All Magic</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-400 via-sky-400 to-violet-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="absolute top-10 left-10 text-6xl opacity-30 float-animation">🎉</div>
        <div
          className="absolute bottom-10 right-10 text-6xl opacity-30 float-animation"
          style={{ animationDelay: "1s" }}
        >
          🎊
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
         
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">Magical Offers This Week</h2>
            <p className="sweet-quote text-xl text-white/90">Sprinkle some extra joy into your day! 🌈</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 bloom-animation hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🌈🍪</div>
              <h3 className="text-2xl font-semibold text-white mb-3">Rainbow Weekend Special</h3>
              <p className="text-white/90 mb-6 text-lg">
                Buy 2 dozen magical cookies, get 1 dozen FREE! Each cookie is a burst of happiness! 🌟
              </p>
              <Badge className="bg-gradient-to-r from-rose-500  text-white text-lg px-4 py-2 pulse-glow">
                Limited Magic ✨
              </Badge>
            </div>

            <div
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 bloom-animation hover:scale-105 transition-transform"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-5xl mb-4">🌅🥐</div>
              <h3 className="text-2xl font-semibold text-white mb-3">Sunrise Delight</h3>
              <p className="text-white/90 mb-6 text-lg">
                20% off all golden pastries before 9 AM! Start your day with sunshine! ☀️
              </p>
              <Badge className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white text-lg px-4 py-2 pulse-glow">
                Daily Magic 🌟
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-20 px-4 bg-gradient-to-br from-violet-900 via-fuchsia-900 to-rose-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 text-4xl opacity-20 float-animation">⭐</div>
          <div
            className="absolute bottom-20 right-20 text-4xl opacity-20 float-animation"
            style={{ animationDelay: "1s" }}
          >
            🌙
          </div>
          <div className="absolute top-1/2 left-1/4 text-3xl opacity-20 sparkle-animation">✨</div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
       
            <h2 className="text-4xl font-bold mb-4 font-serif">Visit Our Enchanted Bakery</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bloom-animation hover:scale-105 transition-transform">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Clock className="w-16 h-16 mb-6 text-fuchsia-300 mx-auto float-animation" />
                <h3 className="text-2xl font-semibold mb-4">Magic Hours</h3>
                <div className="text-fuchsia-100 space-y-2">
                  <p>Mon-Fri: 6:00 AM - 8:00 PM</p>
                  <p>Sat-Sun: 7:00 AM - 9:00 PM</p>
                  <p className="text-sm text-fuchsia-200 mt-4">✨ Fresh magic starts at dawn! ✨</p>
                </div>
              </div>
            </div>

            <div className="bloom-animation hover:scale-105 transition-transform" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <MapPin
                  className="w-16 h-16 mb-6 text-violet-300 mx-auto float-animation"
                  style={{ animationDelay: "0.5s" }}
                />
                <h3 className="text-2xl font-semibold mb-4">Magical Location</h3>
                <div className="text-violet-100 space-y-2">
                  <p>123 Baker Street</p>
                  <p>Sweet Valley, CA 90210</p>
                  <p className="text-sm text-violet-200 mt-4">🌈 Where dreams come true! 🌈</p>
                </div>
              </div>
            </div>

            <div className="bloom-animation hover:scale-105 transition-transform" style={{ animationDelay: "0.4s" }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Star className="w-16 h-16 mb-6 text-rose-300 mx-auto sparkle-animation" />
                <h3 className="text-2xl font-semibold mb-4">Love Rating</h3>
                <div className="text-rose-100 space-y-2">
                  <p>4.9/5 Hearts</p>
                  <p>Over 2,000 Happy Souls</p>
                  <p className="text-sm text-rose-200 mt-4">💕 Spreading joy daily! 💕</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
