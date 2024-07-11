const NavHeader = ({text}) => {
    return (
        <>
        <a className="relative py-8 group" href="">
        <span className="group-hover:text-black text-gray-400">{text}</span>
        <span className="absolute bottom-0 group-hover:bg-orange-500 h-2 w-full block"></span>
        </a>
        </>
    )
}

export default NavHeader