import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Music Producer",
      content: "Corruptbox has revolutionized my approach to music creation. The unique sound palette and intuitive interface have opened up new realms of creativity I never knew existed.",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      name: "Samantha Lee",
      role: "Indie Game Developer",
      content: "As a game developer, I've integrated Corruptbox into my projects, and the atmospheric soundscapes it creates have elevated my games to a whole new level. It's an indispensable tool for creating immersive audio experiences.",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      name: "Michael Chen",
      role: "Electronic Music Artist",
      content: "The community aspect of Corruptbox is phenomenal. Sharing my creations and getting inspired by others has pushed my music in exciting new directions. It's not just a tool; it's a creative ecosystem.",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-400">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800 border-purple-500">
              <CardHeader>
                <div className="flex items-center">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <CardTitle className="text-purple-400">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

