import Link from 'next/link'

export default function CoursePage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
        Chess Course
      </h1>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Your Chess Journey Ahead</h2>
        <div className="space-y-4 text-muted-foreground">
          <h3 className="font-semibold">What You'll Learn:</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Piece Movement</strong> - How each piece has unique powers</li>
            <li><strong>Tactical Patterns</strong> - Clever moves that win material</li>
            <li><strong>Strategic Concepts</strong> - How to make effective plans</li>
            <li><strong>Checkmate Techniques</strong> - Different ways to win games</li>
            <li><strong>Thinking Process</strong> - How to analyze positions like a master</li>
          </ol>
          
          <h3 className="font-semibold">The End Result & Reward:</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>Play complete chess games confidently</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>Recognize tactical opportunities</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>Understand strategic planning</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>Execute basic checkmate patterns</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>Have a lifelong hobby that keeps your mind sharp</span>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Lessons</h2>
        <div className="space-y-2">
          <Link
            href="/course/lessons/0-goal-of-game"
            className="block p-4 rounded-lg hover:bg-sky-100 dark:hover:bg-sky-800/30 transition-colors"
          >
            <h3 className="font-medium">0: Goal of the Game</h3>
          </Link>
          <Link
            href="/course/lessons/1-board-setup"
            className="block p-4 rounded-lg  hover:bg-sky-100 dark:hover:bg-sky-800/30 transition-colors"
          >
            <h3 className="font-medium">1: Board Setup</h3>
          </Link>
          <Link
            href="/course/lessons/2-pieces-movements"
            className="block p-4 rounded-lg  hover:bg-sky-100 dark:hover:bg-sky-800/30 transition-colors"
          >
            <h3 className="font-medium">2: Pieces & Movements</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}