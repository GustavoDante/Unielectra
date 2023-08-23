export function SenderButton() {
  return (
    <div className="bg-black rounded-md w-[161px] h-[40px] flex justify-center items-center cursor-pointer hover:scale-105 transition-all">
      <div className="flex space-x-2 items-center">
        <span className="text-sm text-white">Seja um vendedor</span>
        <span>
          <svg
            className="fill-current"
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.08984"
              width="6.94106"
              height="1.54246"
              transform="rotate(45 1.08984 0)"
              fill="white"
            ></rect>
            <rect
              x="6"
              y="4.9082"
              width="6.94106"
              height="1.54246"
              transform="rotate(135 6 4.9082)"
              fill="white"
            ></rect>
          </svg>
        </span>
      </div>
    </div>
  )
}
