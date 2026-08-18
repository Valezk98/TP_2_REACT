export default function Navbar(){
    return(
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-outline-variant/30 shadow-none transition-all duration-300" id="main-nav">
    <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-md max-w-360 mx-auto">
        <a className="font-display-lg-mobile text-display-lg-mobile font-black tracking-tighter text-primary" href="#">GLITCH_CORE</a>
        
        <div className="hidden md:flex gap-lg items-center">
            <a className="text-on-surface-variant font-medium font-body-md text-body-md active:scale-95 transition-transform hover:text-primary hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.3)] duration-300" href="#">Catalogo</a>
            <a className="text-on-surface-variant font-medium font-body-md text-body-md active:scale-95 transition-transform hover:text-primary hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.3)] duration-300" href="#">Nuevos Lanzamientos</a>
            <a className="text-on-surface-variant font-medium font-body-md text-body-md active:scale-95 transition-transform hover:text-primary hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.3)] duration-300" href="#">Ofertas</a>
            <a className="text-on-surface-variant font-medium font-body-md text-body-md active:scale-95 transition-transform hover:text-primary hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.3)] duration-300" href="#">Plataformas</a>
        </div>
    </div>
    </nav>
    )
}