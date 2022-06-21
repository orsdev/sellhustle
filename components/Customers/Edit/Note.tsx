const Note = () => {
  return (
    <div className="customer__note">
      <h3 className="customer__note__heading">Notes</h3>
      <p className="font-xs my-6">
        Enter any extra information regarding this customer
      </p>
      <textarea
        name="notes"
        rows={5}
        className="w-full p-6 cm-border rounded-lg font-base"
      />
    </div>
  )
}

export default Note
