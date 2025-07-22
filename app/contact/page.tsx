"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [showOrderMsg, setShowOrderMsg] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif">Contact Us</h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions, want to place a custom order, or just want to say hello.
          </p>
        </div>

        {/* Grid Layout - Fixed Responsiveness */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form (Left Side) */}
          <Card className="border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900 font-serif">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-amber-800 mb-1">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="border-amber-200 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-amber-800 mb-1">
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
                  <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-1">
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
                  <label htmlFor="phone" className="block text-sm font-medium text-amber-800 mb-1">
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
                  <label htmlFor="subject" className="block text-sm font-medium text-amber-800 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="border-amber-200 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-amber-800 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry or custom order..."
                    rows={5}
                    className="border-amber-200 focus:border-amber-500"
                  />
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info (Right Side) */}
          <div className="space-y-6">
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
                    123 Baker Street<br />
                    Sweet Valley, CA 90210<br />
                    <span className="text-sm">Corner of Baker & Main Street</span>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Hours
                  </h3>
                  <p className="text-amber-700">
                    Monday - Friday: 6:00 AM - 8:00 PM<br />
                    Saturday - Sunday: 7:00 AM - 9:00 PM<br />
                    <span className="text-sm text-amber-600">Fresh bread available from 7:00 AM daily</span>
                  </p>
                </div>
              </CardContent>
            </Card>

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
          </div>
        </div>

        {/* Order Button */}
        <div className="flex justify-center mt-12">
          <Button
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
            onClick={() => setShowOrderMsg(true)}
          >
            Order Magic
          </Button>
        </div>
      </div>

      {/* Modal (Fixed Positioning) */}
      {showOrderMsg && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 text-center">
            <h2 className="text-2xl font-bold text-amber-900 mb-3 font-serif">Thank you!</h2>
            <p className="text-amber-700 mb-4">Your magical order is on its way!</p>
            <Button
              className="bg-amber-600 hover:bg-amber-700 text-white w-full"
              onClick={() => setShowOrderMsg(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}