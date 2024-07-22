const NavHeader = ({text}) => {
    return (
        <>
        <a className="md:relative -translate-x-8 md:translate-x-0 px-10 md:px-0 pr-64 md:pr-0 bg-white py-12 md:py-8 group" href="">
        <span className="group-hover:text-black text-gray-400">{text}</span>
        <span className="md:absolute bottom-0 group-hover:bg-orange-500 h-2 w-full block"></span>
        </a>
        </>
    )
}

export default NavHeader