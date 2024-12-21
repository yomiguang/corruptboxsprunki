'use client'

import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"
import { Maximize2 } from "lucide-react"

type Version = '1' | '2' | '3'

const GAME_URLS = {
  '1': 'https://s.corruptbox.net/game/corruptbox-sprunki/index.html',
  '2': 'https://s.corruptbox.net/game/corruptbox2-but-sprunki/index.html',
  '3': 'https://s.corruptbox.net/game/corruptbox3-x-sprunki/index.html'
}

export default function Hero() {
  const [currentVersion, setCurrentVersion] = useState<Version>('1')

  const toggleFullscreen = (iframeRef: HTMLIFrameElement | null) => {
    if (!document.fullscreenElement && iframeRef) {
      iframeRef.requestFullscreen()
    }
  }

  return (
    <section className="pt-20 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-purple-400">Welcome to Corruptbox</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Dive into a revolutionary musical platform that fuses horror aesthetics with experimental music creation. Corruptbox offers limitless artistic exploration with enchanting characters, mesmerizing soundscapes, and seamless controls.
        </p>
        
        <div className="flex justify-center gap-4 mb-4">
          {(['1', '2', '3'] as const).map((version) => (
            <Button
              key={version}
              onClick={() => setCurrentVersion(version)}
              className={`px-6 py-2 ${
                currentVersion === version
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-200 text-purple-800 hover:bg-purple-300'
              }`}
            >
              Corruptbox {version}
            </Button>
          ))}
        </div>
       
        <div className="mt-4 relative inline-block">
          {(['1', '2', '3'] as const).map((version) => (
            <div 
              key={version}
              className="relative"
              style={{ display: currentVersion === version ? 'block' : 'none' }}
            >
              <iframe 
                ref={(el) => {
                  if (el) {
                    el.setAttribute('data-version', version);
                  }
                }}
                src={GAME_URLS[version]}
                allowFullScreen 
                width="960" 
                height="620"
                className="mx-auto border-4 border-purple-500 rounded-lg shadow-2xl"
              >
                <a href="https://corruptbox.net">Play Corruptbox on itch.io</a>
              </iframe>
              <Button
                onClick={(e) => {
                  const iframe = e.currentTarget.parentElement?.querySelector('iframe');
                  toggleFullscreen(iframe);
                }}
                className="absolute bottom-6 right-6 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-lg flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <Maximize2 className="h-4 w-4" />
                <span className="text-sm">Full Screen</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

