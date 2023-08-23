interface NotificationLenghtProps {
  length: number
}

export function NotificationLenght({ length }: NotificationLenghtProps) {
  return (
    <>
      {length > 0 && (
        <div className="bg-yellow-500 absolute top-[-1rem] right-1 p-1 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-semibold">
          {length > 9 ? '9+' : length}
        </div>
      )}
    </>
  )
}
