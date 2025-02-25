import { AiFillHome } from "react-icons/ai";
import { MdPhotoLibrary, MdLocalPhone } from "react-icons/md";
import { IconContext } from "react-icons";
import {usePage} from '../context/PageContext.tsx';

export default function NavBar() {
    const {setPage} = usePage();
    function handleClick(e: any) {
        let page = e.target.id;
        console.log(page);
        setPage(page);

    }

    return (
        <nav className="flex items-center rounded-t-2xl justify-center h-[10dvh] w-screen bg-(--nav-bar-color)  fixed top-[91dvh]" role="navigation">
            <div className="flex items-center justify-evenly w-[90%]">
                <IconContext.Provider value={{size: "40%"}}>
                    <button onClick={e => handleClick(e)} id="Inicio" className="media-icon"><AiFillHome className="pointer-events-none"/>Inicio</button>
                    <button onClick={e => handleClick(e)} id="Galeria" className="media-icon"><MdPhotoLibrary className="pointer-events-none relative left-1" />Galeria</button>
                    <button onClick={e => handleClick(e)} id="Conctacto" className="media-icon"><MdLocalPhone className="pointer-events-none relative -bottom-1"/>Contacto</button>
                </IconContext.Provider>
            </div>
        </nav>
    )
}