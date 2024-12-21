import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function HowToPlay() {
  const steps = [
    {
      title: "Explore Your Elements",
      description: "Navigate through our diverse ensemble of characters, each offering unique sonic building blocks for your creation.",
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      title: "Craft Your Sound",
      description: "Skillfully blend different sonic elements to create your unique musical identity.",
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      title: "Discover Patterns",
      description: "Experiment with various sound combinations to find unique arrangements that enhance your compositions.",
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      title: "Perfect Your Vision",
      description: "Dedicate time to refining your musical piece in Corruptbox until it reflects your creative aspirations.",
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      title: "Showcase Your Art",
      description: "Once your Corruptbox masterpiece is complete, let it inspire and resonate with the community.",
      image: "/placeholder.svg?height=200&width=200"
    }
  ]

  return (
    <section id="how-to-play" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-400">How to Play Corruptbox</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-gray-900 border-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-400">{`${index + 1}. ${step.title}`}</CardTitle>
              </CardHeader>
              <CardContent>
                
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

