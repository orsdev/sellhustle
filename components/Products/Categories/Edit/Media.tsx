const Media = () => {
  return (
    <div className="edit__category__media cm-border">
      <h3 className="edit__category__media__heading">General Information</h3>
      <div className="mt-7">
        <p className="text-primary-blue_dark_1 mb-7 block font-xs">
          Category Image
        </p>
        <div className="edit__category__media__image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/coca.png" alt="Category Image" />
        </div>
      </div>
    </div>
  )
}

export default Media
