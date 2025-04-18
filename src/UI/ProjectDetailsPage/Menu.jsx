import MenuLink from "./MenuLink"

const Menu = () => {
  return (
    <nav className="hidden lg:block">
        <div className="flex items-center">
            <ul className="flex items-center gap-x-[2.5rem]">
                <MenuLink name = {"Overview"}/>
                <MenuLink name = {"Amenities"}/>
                <MenuLink name = {"Plans & Price"}/>
                <MenuLink name = {"Gallary"}/>
                <MenuLink name = {"Location"}/>
            </ul>
        </div>
    </nav>
  )
}

export default Menu