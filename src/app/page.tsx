import { Card } from "@/components/ui/card"
import { Crown, Users, Clock, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="flex justify-center">
          <Crown className="w-16 h-16 text-amber-600" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
          Welcome to Agoura Chess Social
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Where players of all levels meet to learn and enjoy the game of chess.
        </p>
      </section>

      {/* Rest of the file remains the same */}
      {/* About Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Users className="w-5 h-5" /> About Our Club
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            We are a friendly and welcoming group of chess enthusiasts who gather weekly to play, 
            learn, and enjoy the game together. <strong className="text-foreground">Complete beginners are especially welcome - 
            we love teaching new players the fundamentals of chess!</strong>
          </p>
          <p>
            Whether you&rsquo;ve never moved a piece before or you&rsquo;re an experienced player looking for
            regular games, you&rsquo;ll find a place at our club. Our Tuesday meetings feature casual
            games, beginner instruction, position analysis, and plenty of opportunities to improve 
            your skills in a relaxed, supportive environment.
          </p>
        </div>
      </section>

      {/* Meeting Details */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <MapPin className="w-5 h-5" /> When & Where We Meet
        </h2>
        <Card className="p-6 space-y-4 bg-amber-50 dark:bg-amber-900/20">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-amber-600" />
            <p><strong>When:</strong> Every Tuesday, 5:30 PM - 8:00 PM</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-amber-600" />
            <p><strong>Where:</strong> Agoura Community Recreation Center, Agoura Hills</p>
          </div>
          <p><strong>Cost:</strong> Our club is free but you have to register with the Agoura Hills Community Center</p>
          <p><strong>Equipment:</strong> Chess sets and boards are provided</p>
        </Card>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-muted-foreground border-t pt-6">
        <p>© 2024 Agoura Chess Social. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
