import { Card } from "@/components/ui/card"
import { Crown, Users, Clock, MapPin } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12 bg-background text-foreground">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex-1"></div>
          <div className="flex justify-center flex-1">
            <Crown className="w-16 h-16 text-sky-600" />
          </div>
          <div className="flex justify-end flex-1">
            <ThemeToggle />
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
          Welcome to Agoura Chess Social
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Where players of all levels meet to learn and enjoy the game of chess.
        </p>
      </section>

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
        <Card className="p-6 space-y-4 bg-sky-50 dark:bg-sky-900/30">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-sky-600" />
            <p><strong>When:</strong> Every Tuesday, 5:30 PM - 8:00 PM</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-sky-600" />
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
