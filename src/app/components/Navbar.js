import Link from 'next/link';

export default function Navbar() {


  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a><img src='/img/logo.png'></img></a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href='#inicio' class="mr-5 hover:text-gray-900">Inicio</a>
          <a href='#sobremi' class="mr-5 hover:text-gray-900">Sobre mi</a>
          <a href='#habilidades' class="mr-5 hover:text-gray-900">Habilidades</a>
          <a href='#proyectos' class="mr-5 hover:text-gray-900">Proyectos</a>
        </nav>
        <a href='#contacto' class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contactame
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </header>
  );
}
