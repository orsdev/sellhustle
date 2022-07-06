const SubmitButton = ({
  title,
  disabled = false
}: {
  title: string
  disabled?: boolean
}) => {
  return (
    <div className="w-full text-center">
      <button className="cm__submit__button" type="submit" disabled={disabled}>
        {title}
      </button>
    </div>
  )
}

export default SubmitButton
