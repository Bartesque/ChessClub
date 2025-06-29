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
          <p>
            What makes chess special: Pure mental challenge and creativity. Every move matters. Every game teaches you something new about thinking and planning.
          </p>
        </div>
      </section>

      {/* What Happens When You Play */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Lightbulb className="w-5 h-5" /> What Happens When You Play?
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p><strong>The Setup:</strong> 32 pieces on a checkered board, each with unique abilities</p>
          <p><strong>The Challenge:</strong> Patterns emerge - clever moves and combinations create excitement</p>
          <p><strong>The Journey:</strong> Positions develop, advantages shift, comebacks happen</p>
          <p><strong>The Resolution:</strong> Checkmate, agreement to draw, or resignation - every game tells a story</p>
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
          This is where our systematic Russian Method course comes in. Instead of learning chess &ldquo;casually&rdquo; 
          and developing bad habits, you&rsquo;ll build the strongest possible foundation from day one.
        </p>
        <p className="mb-6 max-w-2xl mx-auto">
          What makes our approach different: No shortcuts, perfect fundamentals, systematic progression that has produced champions for decades.
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