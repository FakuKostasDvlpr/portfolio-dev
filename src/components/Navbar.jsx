import React from 'react'
import "./NavbarStyles.css"

const Navbar = () => {
  const navItems = [
    {
      title: "Experiencia",
      label: "experiencia",
      url: "/#experiencia",
    },
    {
      title: "Proyectos",
      label: "proyectos",
      url: "/#proyectos",
    },
    {
      title: "Sobre mí",
      label: "sobre-mi",
      url: "/#sobre-mi",
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "/#contacto",
    },
  ];

  return (
    <>
   <header
  class="h-14 flex justify-center items-center mt-5  sticky  w-full z-10"
>
  <nav id='navbarList'
    class={`
    font-bold text-
    gap-3 text-white
      w-fit md:w-3/4 lg:w-1/2 xl:w-2/5 h-full
      border-2 border-transparent rounded-full md:px-6 px-3 py-1
      flex flex-wrap flex-row items-center justify-center
    `}
  >
    {
      navItems.map((link) => (
        <a
          class="hover:bg-purple-300  p-1 rounded-full px-2 sm:px-3 transition ease-in text-sm sm:text-base capitalize"
          aria-label={link.label}
          href={link.url}
        >
          {link.title}
        </a>
      ))
    }
  </nav>
</header>
     
    </>
  )
}

export default Navbar