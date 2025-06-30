import { BookOpen, Lightbulb, Trophy, Clock as ClockIcon, UserCheck } from "lucide-react"
import Link from "next/link"

export default function CurriculumPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12 bg-background text-foreground">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
          Learn Chess the Right Way
        </h1>
        <p className="text-xl text-muted-foreground">
          From Complete Beginner to Confident Player
        </p>
      </section>

      {/* What is Chess */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="w-5 h-5" /> What is Chess, Really?
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Chess is a game of thinking and strategy. Two players compete on a beautiful 64-square board,
            each trying to checkmate their opponent&rsquo;s king. No luck involved - when you win,
            it&rsquo;s because you made better decisions and thought more clearly.
          </p>
          <p>
            The goal is elegantly simple: Safely capture your opponent&rsquo;s king (called &ldquo;checkmate&rdquo;).
          </p>
        </div>
      </section>

      {/* What Makes Chess Unique */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">What Makes Chess Unique</h2>
        <div className="space-y-4 text-muted-foreground">
          <h3 className="font-semibold">Pure Thinking Game</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>No dice - your brain makes all decisions</li>
            <li>No hidden information - you see the entire position</li>
            <li>No luck - the player who thinks better usually wins</li>
            <li>Infinite possibilities - every game is different</li>
          </ul>
          
          <h3 className="font-semibold">Skill-Based Competition</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Strategy matters - planning ahead gives advantages</li>
            <li>Tactics count - clever moves win material</li>
            <li>Learning never stops - even masters discover new ideas</li>
            <li>Mistakes teach - every error helps you improve</li>
          </ul>
        </div>
      </section>

      {/* Chess is Like... */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Chess is Like...</h2>
        <div className="space-y-4 text-muted-foreground">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🧩</span>
            <div>
              <h3 className="font-semibold">Being a Puzzle Solver</h3>
              <p>Every position presents a new challenge to figure out. The better you become at solving these puzzles, the more enjoyable chess becomes.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🏃‍♂️</span>
            <div>
              <h3 className="font-semibold">Being a Coach</h3>
              <p>You guide a team of pieces, each with special abilities. Good coaches think about what their opponent might do and plan accordingly.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🗺️</span>
            <div>
              <h3 className="font-semibold">Being an Explorer</h3>
              <p>Every game takes you to new positions. You discover clever moves and brilliant ideas the more you play.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Myths Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <UserCheck className="w-5 h-5" /> Myths That Stop People (All False!)
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>❌ &ldquo;You need to be a genius&rdquo;<br/>
          ✅ <strong>Reality:</strong> Thousands of regular people become strong players through good instruction and practice.</p>
          
          <p>❌ &ldquo;It takes years to learn&rdquo;<br/>
          ✅ <strong>Reality:</strong> You can play complete games within weeks. Fun starts immediately.</p>
          
          <p>❌ &ldquo;It&rsquo;s boring and slow&rdquo;<br/>
          ✅ <strong>Reality:</strong> Chess is full of tension, surprises, and &ldquo;wow&rdquo; moments. Every move can change everything.</p>
          
          <p>❌ &ldquo;Kids can&rsquo;t really understand it&rdquo;<br/>
          ✅ <strong>Reality:</strong> Children often learn faster than adults and love the competitive challenge.</p>
        </div>
      </section>

      {/* What Chess Feels Like */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Trophy className="w-5 h-5" /> What Chess Feels Like
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p><strong>Your first games:</strong> Excitement about moving interesting pieces, surprise when clever moves work, pride in your first checkmate</p>
          <p><strong>As you improve:</strong> Recognition of patterns, confidence in your decisions, satisfaction from smart play</p>
          <p><strong>When you&rsquo;re hooked:</strong> Deep focus during engaging games, chess puzzles become fascinating, you join the worldwide chess community</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <ClockIcon className="w-5 h-5" /> The Real Benefits
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p><strong>Immediate (first month):</strong> Better focus, pattern recognition, patience, confidence boost</p>
          <p><strong>Medium-term (3-6 months):</strong> Problem-solving skills transfer everywhere, strategic thinking improves, emotional control develops</p>
          <p><strong>Long-term (1+ years):</strong> Mental sharpness for life, stress relief, lifelong passion, teaching opportunities</p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Chess Journey?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          This is where our paractical course comes in. We&rsquo;ll help you learn chess &ldquo;casually&rdquo; 
          and build a strong foundation from day one.
        </p>
      
        <Link
          href="/" 
          className="inline-block px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
        >
          Join Our Next Beginner Session
        </Link>
      </section>
    </div>
  )
}