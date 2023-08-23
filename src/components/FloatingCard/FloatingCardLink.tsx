interface FloatingCardLinkProps {
  text: string
  variant?: 'primary' | 'secondary'
}

export function FloatingCardLink({
  text,
  variant = 'primary',
}: FloatingCardLinkProps) {
  return (
    <a
      className={`w-full rounded-md transition-all p-3 ${
        variant === 'primary'
          ? 'bg-yellow-500 hover:bg-yellow-600'
          : 'bg-transparent border border-gray-400 hover:bg-gray-200'
      }`}
    >
      {text}
    </a>
  )
}
