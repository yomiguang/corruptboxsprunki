import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Users, Zap, Share2 } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: "Diverse Sound Palette",
      description: "Dive into a vast array of unique sounds and musical elements to enhance your compositions.",
      icon: <Music className="h-8 w-8 text-purple-500" />
    },
    {
      title: "Charismatic Characters",
      description: "Meet fascinating personalities, each adding their unique musical essence and charm to your experience.",
      icon: <Users className="h-8 w-8 text-purple-500" />
    },
    {
      title: "Effortless Mixing",
      description: "Create complex harmonies and multi-layered compositions with our intuitive mixing interface.",
      icon: <Zap className="h-8 w-8 text-purple-500" />
    },
    {
      title: "Vibrant Community",
      description: "Share your musical creations and explore the rich artistic diversity within the Corruptbox community.",
      icon: <Share2 className="h-8 w-8 text-purple-500" />
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-400">What Sets Corruptbox Apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-400">
                  {feature.icon}
                  <span className="ml-2">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

