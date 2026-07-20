"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

type MarkdownMessageProps = {
  content: string;
  className?: string;
  /** User bubbles use inverted (light-on-dark) prose */
  variant?: "assistant" | "user";
};

/**
 * Renders chatbot message content as GitHub-flavored Markdown.
 */
export function MarkdownMessage({
  content,
  className,
  variant = "assistant",
}: MarkdownMessageProps) {
  const isUser = variant === "user";

  return (
    <div
      className={cn(
        "chat-md text-sm leading-relaxed break-words",
        isUser
          ? "prose-invert [&_a]:text-white [&_a]:underline [&_code]:bg-white/15 [&_pre]:bg-white/10"
          : "[&_a]:text-[#0B3A6E] dark:[&_a]:text-blue-300 [&_a]:underline-offset-2 hover:[&_a]:underline",
        className,
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
          ul: ({ children }) => (
            <ul className="mb-2 list-disc space-y-1 pl-4 last:mb-0">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-2 list-decimal space-y-1 pl-4 last:mb-0">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-snug">{children}</li>,
          strong: ({ children }) => (
            <strong className="font-semibold">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline-offset-2 hover:underline"
            >
              {children}
            </a>
          ),
          code: ({ className: codeClass, children, ...props }) => {
            const isBlock = Boolean(codeClass?.includes("language-"));
            if (isBlock) {
              return (
                <code className={cn("text-[12px]", codeClass)} {...props}>
                  {children}
                </code>
              );
            }
            return (
              <code
                className={cn(
                  "rounded px-1 py-0.5 font-mono text-[12px]",
                  isUser ? "bg-white/15" : "bg-muted",
                )}
                {...props}
              >
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre
              className={cn(
                "mb-2 overflow-x-auto rounded-lg p-2.5 text-[12px] last:mb-0",
                isUser ? "bg-white/10" : "bg-muted",
              )}
            >
              {children}
            </pre>
          ),
          h1: ({ children }) => (
            <h3 className="mb-1.5 text-base font-bold">{children}</h3>
          ),
          h2: ({ children }) => (
            <h3 className="mb-1.5 text-sm font-bold">{children}</h3>
          ),
          h3: ({ children }) => (
            <h4 className="mb-1 text-sm font-semibold">{children}</h4>
          ),
          blockquote: ({ children }) => (
            <blockquote
              className={cn(
                "mb-2 border-l-2 pl-3 italic opacity-90 last:mb-0",
                isUser ? "border-white/40" : "border-[#0B3A6E]/40",
              )}
            >
              {children}
            </blockquote>
          ),
          hr: () => (
            <hr
              className={cn(
                "my-3 border-0 border-t",
                isUser ? "border-white/20" : "border-border",
              )}
            />
          ),
          table: ({ children }) => (
            <div className="mb-2 overflow-x-auto last:mb-0">
              <table className="w-full border-collapse text-left text-xs">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th
              className={cn(
                "border px-2 py-1 font-semibold",
                isUser ? "border-white/20" : "border-border",
              )}
            >
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td
              className={cn(
                "border px-2 py-1",
                isUser ? "border-white/20" : "border-border",
              )}
            >
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
