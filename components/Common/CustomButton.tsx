import { FC } from 'react'

type CustomButtonProps = {
  title: string
  bg?: string
  color?: string
  showIcon?: boolean
  handleClick?(): void
}

const CustomButton: FC<CustomButtonProps> = ({
  title,
  handleClick,
  showIcon = false,
  bg = 'bg-white',
  color
}) => {
  return (
    <button className={`custom__button ${bg} ${color}`} onClick={handleClick}>
      {title}
      {showIcon && (
        <div className="custom__button__add text-white">
          <i className="fa fa-plus" aria-hidden="true" />
        </div>
      )}
    </button>
  )
}

export default CustomButton
