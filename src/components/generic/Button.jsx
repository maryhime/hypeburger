import React from 'react'


const Button = ({text, style}) => {
  return (
    <div className={`h-button w-fit flex flex-row gap-8 rounded-button justify-center items-center px-20 hover:bg-accent-2 ${style}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.0074 5.02083C17.2556 3.14583 14.6793 2 12 2C9.3207 2 6.74444 3.04167 4.99259 5.02083C3.54989 6.6875 2.82854 8.77083 3.03464 10.8542C3.03464 11.2708 3.13769 11.6875 3.24074 12C4.16819 16.375 8.9085 20.2292 10.9695 21.6875C11.2786 21.8958 11.5878 22 12 22C12.4122 22 12.7214 21.8958 13.0305 21.6875C14.9885 20.2292 19.8318 16.375 20.7593 12C20.8623 11.6875 20.8623 11.2708 20.9654 10.8542C21.1715 8.77083 20.4501 6.6875 19.0074 5.02083ZM12 13.9792C10.4542 13.9792 9.1146 12.7292 9.1146 11.0625C9.1146 9.39583 10.3512 8.14583 12 8.14583C13.6488 8.14583 14.8854 9.39583 14.8854 11.0625C14.8854 12.7292 13.5458 13.9792 12 13.9792Z" fill="#FDFBFA" />
      </svg>
      <div className={`text-button uppercase ${style}`}>
        {text}
      </div>
    </div>
  )
}

export default Button