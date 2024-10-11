import Btn from "./Btn"
import Countainer from "./Countainer"


function Header() {
  return (
    <>
    <header className="bg-backgroundContrast    text-white ">
    <Countainer className="flex items-center min-h-[--header-row-height]  ">
      <a href="/" className="h-[--header-row-height] flex items-center ">
      <span className="sr-only">Back To Home</span>
      </a>
      </Countainer>
    </header>
    <div className="bg-backgroundContrast z-20  sticky top-0 text-white  ">
      <Countainer className="flex items-center min-h-11 justify-between ">
      <p className="text-lg">Apple tv+</p>
      <Btn size="sm">Stream Now</Btn>
      </Countainer>
      </div>


    </>
  )
}

export default Header