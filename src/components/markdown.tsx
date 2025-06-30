'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function Markdown({ content }: { content: string }) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: () => null,
          h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
          p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6" {...props} />,
          li: ({node, ...props}) => <li className="mb-2" {...props} />,
          hr: ({node, ...props}) => <hr className="my-8 border-sky-200 dark:border-sky-800" {...props} />,
          table: ({node, ...props}) => <table className="w-full mb-6" {...props} />,
          th: ({node, ...props}) => <th className="text-left p-2 border-b border-sky-200 dark:border-sky-800" {...props} />,
          td: ({node, ...props}) => <td className="p-2 border-b border-sky-100 dark:border-sky-900" {...props} />,
          a: ({node, ...props}) => <a className="text-sky-600 dark:text-sky-400 hover:underline" {...props} />
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}