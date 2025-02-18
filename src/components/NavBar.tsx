import { AiFillHome } from "react-icons/ai";
import { MdPhotoLibrary, MdLocalPhone } from "react-icons/md";
import { IconContext } from "react-icons";


export default function NavBar() {

    return (
        <nav className="flex items-center rounded-t-2xl justify-center h-[10dvh] w-[100dvw] bg-(--nav-bar-color)  fixed top-[90dvh]" role="navigation">
            <div className="flex items-center justify-evenly w-[90%]">
                <IconContext.Provider value={{size: "40%"}}>
                    <a href="/" className="media-icon"><AiFillHome />Inicio</a>
                    <a href="/about" className="media-icon"><MdPhotoLibrary className="relative left-1" />Galeria</a>
                    <a href="/contact" className="media-icon "><MdLocalPhone className="relative -bottom-1"/>Contacto</a>
                </IconContext.Provider>
            </div>
        </nav>
    )
}