import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, Wheat } from "lucide-react"

export default function MenuPage() {
  const menuCategories = {
    breads: [
      {
        name: "Artisan Sourdough",
        price: "$8.99",
        description: "Traditional sourdough with a perfect crust and tangy flavor",
        image: "https://images.unsplash.com/photo-1598634549802-dcc558705f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG91Z2h8ZW58MHx8MHx8fDA%3D",
        dietary: ["vegan"],
      },
      {
        name: "Whole Wheat Loaf",
        price: "$6.99",
        description: "Hearty whole wheat bread packed with nutrients",
        image: "https://images.unsplash.com/photo-1533417177250-227597f5b264?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TG9hZnxlbnwwfHwwfHx8MA%3D%3D",
        dietary: ["vegan", "whole-grain"],
      },
      {
        name: "French Baguette",
        price: "$4.99",
        description: "Classic French baguette with crispy crust",
        image: "https://images.unsplash.com/photo-1568471173242-461f0a730452?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmFndWV0dGV8ZW58MHx8MHx8fDA%3D",
        dietary: ["vegan"],
      },
    ],
    pastries: [
      {
        name: "Butter Croissant",
        price: "$2.99",
        description: "Flaky, buttery croissant made with French butter",
        image: "https://images.unsplash.com/photo-1501721358449-1505ca840822?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q3JvaXNzYW50fGVufDB8fDB8fHww",
        dietary: [],
      },
      {
        name: "Pain au Chocolat",
        price: "$3.50",
        description: "Croissant filled with rich dark chocolate",
        image: "https://images.unsplash.com/photo-1681218424681-b4f8228ecea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFpbiUyMGF1JTIwQ2hvY29sYXR8ZW58MHx8MHx8fDA%3D",
        dietary: [],
      },
      {
        name: "Danish Pastry",
        price: "$4.25",
        description: "Sweet pastry with seasonal fruit filling",
        image: "https://images.unsplash.com/photo-1633785587635-a5c1df91fa90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGFuaXNoJTIwUGFzdHJ5fGVufDB8fDB8fHww",
        dietary: [],
      },
    ],
    cakes: [
      {
        name: "Chocolate Layer Cake",
        price: "$24.99",
        description: "Rich chocolate cake with chocolate ganache",
        image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hvY29sYXRlJTIwTGF5ZXIlMjBDYWtlfGVufDB8fDB8fHww",
        dietary: [],
      },
      {
        name: "Red Velvet Cake",
        price: "$26.99",
        description: "Classic red velvet with cream cheese frosting",
        image: "https://images.unsplash.com/photo-1610851467358-e2a4a5804335?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlZCUyMHZlbHZldCUyMGNha2V8ZW58MHx8MHx8fDA%3D",
        dietary: [],
      },
      {
        name: "Lemon Drizzle Cake",
        price: "$22.99",
        description: "Moist lemon cake with tangy lemon glaze",
        image: "https://images.unsplash.com/photo-1654546482778-1aeb01f118aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fExlbW9uJTIwRHJpenpsZSUyMENha2V8ZW58MHx8MHx8fDA%3D",
        dietary: [],
      },
    ],
    cookies: [
      {
        name: "Chocolate Chip Cookies",
        price: "$12.99/dozen",
        description: "Classic cookies with premium chocolate chips",
        image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hvb2xhdGUlMjBDaGlwJTIwQ29va2llc3xlbnwwfHwwfHx8MA==",
        dietary: [],
      },
      {
        name: "Oatmeal Raisin",
        price: "$11.99/dozen",
        description: "Chewy oatmeal cookies with plump raisins",
        image: "https://images.unsplash.com/photo-1682692094951-2972f739cc6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fCUyMk9hdG1lYWwlMjBSYWlzaW58ZW58MHx8MHx8fDA%3D",
        dietary: [],
      },
      {
        name: "Sugar Cookies",
        price: "$10.99/dozen",
        description: "Soft sugar cookies perfect for decorating",
        image: "https://images.unsplash.com/photo-1607975218250-7faaf3e36bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvb2tpZXN8ZW58MHx8MHx8fDA%3D",
        dietary: [],
      },
    ],
  }

  const getDietaryIcon = (dietary: string) => {
    switch (dietary) {
      case "vegan":
        return <Leaf className="w-4 h-4 text-green-600" />
      case "gluten-free":
        return <Wheat className="w-4 h-4 text-amber-600" />
      case "whole-grain":
        return <Wheat className="w-4 h-4 text-amber-800" />
      default:
        return null
    }
  }

  const renderMenuItems = (items: any[]) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow border-amber-200">
          <CardContent className="p-0">
            <div className="relative">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {item.dietary.length > 0 && (
                <div className="absolute top-2 right-2 flex gap-1">
                  {item.dietary.map((diet: string) => (
                    <Badge key={diet} variant="secondary" className="bg-white/90 text-green-700">
                      {getDietaryIcon(diet)}
                      <span className="ml-1 capitalize">{diet}</span>
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-amber-900">{item.name}</h3>
                <span className="font-bold text-amber-700">{item.price}</span>
              </div>
              <p className="text-sm text-amber-700 mb-4">{item.description}</p>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Add to Order</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif">Our Menu</h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Discover our full range of freshly baked goods, made daily with the finest ingredients
          </p>
        </div>

        <Tabs defaultValue="breads" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-amber-100">
            <TabsTrigger value="breads" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              Breads
            </TabsTrigger>
            <TabsTrigger value="pastries" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              Pastries
            </TabsTrigger>
            <TabsTrigger value="cakes" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              Cakes & Cupcakes
            </TabsTrigger>
            <TabsTrigger value="cookies" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              Cookies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="breads">{renderMenuItems(menuCategories.breads)}</TabsContent>

          <TabsContent value="pastries">{renderMenuItems(menuCategories.pastries)}</TabsContent>

          <TabsContent value="cakes">{renderMenuItems(menuCategories.cakes)}</TabsContent>

          <TabsContent value="cookies">{renderMenuItems(menuCategories.cookies)}</TabsContent>
        </Tabs>

        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg border border-amber-200">
          <h2 className="text-3xl font-bold text-amber-900 mb-4 font-serif">Custom Orders</h2>
          <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
            Planning a special event? We create custom cakes, wedding cakes, and large orders for any occasion. Contact
            us to discuss your needs and get a personalized quote.
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
            Request Custom Order
          </Button>
        </div>
      </div>
    </div>
  )
}
