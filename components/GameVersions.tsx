import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function GameVersions() {
  const versions = [
    {
      title: "Corruptbox But Sprunki",
      description: "The original horror music experience that started it all. Create eerie melodies by dragging and dropping corrupted characters onto the stage. Features unique distorted sounds for each character, dynamic glitch animations, and atmospheric horror soundtrack creation.",
      image: "/images/corruptbox1.jpg"
    },
    {
      title: "Corruptbox 2 But Sprunki",
      description: "An enhanced version featuring more twisted characters and improved visual effects. Enjoy an expanded roster of corrupted characters, advanced sound mixing capabilities, and enhanced visual glitch effects for an even more immersive experience.",
      image: "/images/corruptbox2.jpg"
    },
    {
      title: "Corruptbox 3 x Sprunki",
      description: "The latest iteration where cross-platform warfare meets horror music in an innovative fusion. Experience cross-platform compatibility, war-themed character designs, and rhythmic battle beats integration for a truly unique gaming experience.",
      image: "/images/corruptbox3.jpg"
    }
  ]

  return (
    <section id="game-versions" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-400">Corruptbox Game Versions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {versions.map((version, index) => (
            <Card key={index} className="bg-gray-900 border-purple-500">
              <Image src={version.image} alt={version.title} width={300} height={200} className="w-full h-48 object-cover rounded-t-lg" />
              <CardHeader>
                <CardTitle className="text-xl text-purple-400">{version.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{version.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

