import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-400">About Corruptbox</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-gray-800 border-purple-500">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-400">The Corruptbox Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Born from the fusion of horror aesthetics and experimental music, Corruptbox began as a daring concept: What if glitch art could create music? This simple question evolved into a revolutionary gaming experience that has captured the imagination of players worldwide.
                </p>
                <p className="text-gray-300 mb-4">
                  Each iteration of Corruptbox has pushed the boundaries of what's possible in horror music gaming, introducing new ways to experience the intersection of visual corruption and sound design. From the original Corruptbox But Sprunki to the latest Corruptbox 3 x Sprunki, our platform continues to evolve and inspire.
                </p>
                <p className="text-gray-300">
                Experience the unique blend of visual corruption and sound design in Corruptbox. Create atmospheric horror soundtracks, discover hidden audio effects, and share your creations with a growing community of artists and horror enthusiasts.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="bg-gray-800 border-purple-500">
              <CardHeader>
                <CardTitle className="text-xl text-purple-400">For Music Creators</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Experiment with unique sound combinations</li>
                  <li>Create atmospheric horror soundtracks</li>
                  <li>Share your compositions with the community</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-purple-500">
              <CardHeader>
                <CardTitle className="text-xl text-purple-400">For Horror Enthusiasts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Immerse yourself in a glitched reality</li>
                  <li>Discover hidden visual effects and secrets</li>
                  <li>Experience a new form of horror entertainment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

