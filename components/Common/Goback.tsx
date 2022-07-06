import Router from 'next/router'

const Goback = () => {
  return (
    <div className="cm__goback">
      <button onClick={() => Router.back()}>
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
        <span className="font-xs ml-5">Back</span>
      </button>
    </div>
  )
}

export default Goback
