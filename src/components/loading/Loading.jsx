import "./Loading.css"

const Loading = ({count=4}) => {
  return (
    <div className="flex gap-2 flex-wrap ">
      {
        Array(count).fill("").map((_, inx)=> (
          <div key={inx} className="w-96  p-3 border border-slate-400">
            <div className="w-full h-60 bg-slate-300"></div>
            <div className="w-10/12 h-6 bg-slate-300 mt-3"></div>
            <div className="w-8/12 h-6 bg-slate-300 mt-3"></div>
          </div>
        ))
      }
    </div>
    // <div className="flex justify-center">
    //     <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    // </div>
  )
}

export default Loading