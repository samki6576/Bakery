import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {  Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif">Contact Us</h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions, want to place a custom order, or just want to say
            hello, don't hesitate to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900 font-serif">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-amber-800 mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="border-amber-200 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-amber-800 mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="border-amber-200 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-amber-200 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-amber-800 mb-2">
                    Phone Number (Optional)
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="border-amber-200 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-amber-800 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="border-amber-200 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-amber-800 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry or custom order..."
                    rows={5}
                    className="border-amber-200 focus:border-amber-500"
                  />
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location & Hours */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-900 font-serif flex items-center">
          
                  Visit Our Bakery
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Address</h3>
                  <p className="text-amber-700">
                    123 Baker Street
                    <br />
                    Sweet Valley, CA 90210
                    <br />
                    <span className="text-sm">Corner of Baker & Main Street</span>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-amber-800 mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Hours
                  </h3>
                  <div className="text-amber-700 space-y-1">
                    <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                    <p>Saturday - Sunday: 7:00 AM - 9:00 PM</p>
                    <p className="text-sm text-amber-600 mt-2">Fresh bread available from 7:00 AM daily</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-900 font-serif">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-semibold text-amber-800">Phone</p>
                    <p className="text-amber-700">(555) 123-BAKE (2253)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-semibold text-amber-800">Email</p>
                    <p className="text-amber-700">info@goldencrustbakery.com</p>
                  </div>
                </div>

            
              </CardContent>
            </Card>

            {/* Google Maps Placeholder */}
       
          </div>
        </div>

        {/* Custom Orders Section */}
        <div className="mt-16">
          <Card className="border-amber-200 shadow-lg bg-gradient-to-r from-amber-50 to-orange-50">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-amber-900 mb-4 font-serif">Custom Orders & Catering</h2>
              <p className="text-amber-700 mb-6 max-w-3xl mx-auto">
                Planning a wedding, birthday party, or corporate event? We specialize in custom cakes, large orders, and
                catering services. Contact us at least 48 hours in advance for custom orders, and 1 week for wedding
                cakes.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <h3 className="font-semibold text-amber-800 mb-2">Wedding Cakes</h3>
                  <p className="text-sm text-amber-700">Custom designs, multiple tiers, various flavors</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <h3 className="font-semibold text-amber-800 mb-2">Corporate Catering</h3>
                  <p className="text-sm text-amber-700">Breakfast pastries, lunch platters, meeting treats</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <h3 className="font-semibold text-amber-800 mb-2">Party Orders</h3>
                  <p className="text-sm text-amber-700">Birthday cakes, cookie platters, dessert tables</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
