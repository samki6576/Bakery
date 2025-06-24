import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Award } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Maria Rodriguez",
      role: "Head Baker & Owner",
      image: "https://images.unsplash.com/photo-1625489409904-324a5e9591e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJha2VycyUyMHdvbWFufGVufDB8fDB8fHww",
      bio: "With 25 years of baking experience, Maria founded Golden Crust Bakery to bring authentic artisanal breads to the community.",
    },
    {
      name: "James Chen",
      role: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1560427183-4efd29c38997?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJzfGVufDB8fDB8fHww",
      bio: "James trained in Paris and brings French pastry techniques to create our exquisite croissants and pastries.",
    },
    {
      name: "Sarah Johnson",
      role: "Cake Decorator",
      image: "https://images.unsplash.com/photo-1746039076843-35f8883646cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFrZXJzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
      bio: "Sarah's artistic touch transforms our cakes into edible masterpieces for weddings and special occasions.",
    },
  ]

  const achievements = [
    { icon: Award, title: "Best Bakery 2023", description: "Sweet Valley Food Awards" },
    { icon: Award, title: "Artisan Bread Champion", description: "State Baking Competition" },
    { icon: Award, title: "Community Choice Award", description: "Local Business Excellence" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1662098666588-264bb5f1c8c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2UlMjBiYWNrZ3JvdW5kfGVufDB8MHwwfHx8MA%3D%3D" alt="Bakery interior" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">Our Story</h1>
          <p className="text-xl md:text-2xl font-light">Four decades of baking excellence</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6 font-serif">From Passion to Tradition</h2>
              <div className="space-y-4 text-amber-800 leading-relaxed">
                <p>
                  Golden Crust Bakery began in 1985 when Maria Rodriguez decided to turn her grandmother's recipes into
                  a neighborhood treasure. What started as a small storefront with just two ovens has grown into Sweet
                  Valley's most beloved bakery.
                </p>
                <p>
                  Our commitment to traditional baking methods means we still hand-knead our sourdough, use only natural
                  ingredients, and start our day at 4 AM to ensure everything is fresh when you arrive. We believe that
                  great bread and pastries bring people together, creating moments of joy in everyday life.
                </p>
                <p>
                  Today, we're proud to serve three generations of families, from the grandparents who remember our
                  opening day to the grandchildren who now help choose their birthday cakes. This is more than a
                  business—it's a community gathering place where stories are shared over fresh coffee and warm
                  croissants.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Maria Rodriguez baking"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
              <Badge className="absolute bottom-4 left-4 bg-amber-600 text-white text-lg px-4 py-2">Est. 1985</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12 font-serif">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-amber-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-48 h-48 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">{member.name}</h3>
                  <Badge className="bg-amber-100 text-amber-800 mb-4">{member.role}</Badge>
                  <p className="text-amber-700 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 bg-amber-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12 font-serif">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <achievement.icon className="w-10 h-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{achievement.title}</h3>
                <p className="text-amber-700">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 px-4  via-fuchsia-900 bg-amber-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-serif">Visit Us</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 mb-4 text-amber-300" />
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-amber-100 leading-relaxed">
                123 Baker Street
                <br />
                Sweet Valley, CA 90210
                <br />
                <span className="text-sm">Corner of Baker & Main</span>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 mb-4 text-amber-300" />
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <div className="text-amber-100 space-y-1">
                <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                <p>Saturday - Sunday: 7:00 AM - 9:00 PM</p>
                <p className="text-sm text-amber-200 mt-2">Fresh bread available from 7:00 AM</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 mb-4 text-amber-300" />
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="text-amber-100 space-y-2">
                <p>(555) 123-BAKE</p>
                <p>info@goldencrustbakery.com</p>
                <p className="text-sm text-amber-200">Call ahead for large orders</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
