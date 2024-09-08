import Button from "../widgets/Button"

const TitleDiscover =() => {
  return (
    <div className="h-screen w-full flex flex-col justify-center">
        <div className="flex justify-between w-full">
            <div className="max-w-[600px]  ">
                <div className="text-8xl font-bold text-[#1B6270]">
                    Bibendum et sit aliquam!
                </div>
                <div className="text-slate-500 font-semibold mt-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
                </div>

                <div className="max-w-[192px] mt-10 bg-[#DD9BA3] hover:bg-[#f3bfc5] rounded-full">
                    <Button name="Discover Menu" />
                </div>
            </div>
            <img src="https://via.placeholder.com/372x372"  alt="" className="rounded-3xl"/>
        </div>
    </div>
  )
}

export default TitleDiscover
