

export default function Inicio() {
  return (

    // <div class="sm:flex md:flex lg:flex sm:px-20 md:px-32 lg:px-40 sm:py-20 md:py-32 lg:py-40 sm:justify-around md:justify-around lg:justify-around">
    //     <div className="w-96">
    //       <div class="text-gray-900 font-extrabold font-poppins text-5xl leading-9 tracking-tighter">
    //         Carlos Alberto <br></br> Barrera Acuña
    //       </div>
    //       <div className="py-4">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </div>
    //       <div className="flex gap-2">
    //         <a href="https://www.youtube.com"><img src="/img/instagram.png" alt=""></img></a>
    //         <img src="/img/linkedin.png" alt=""></img>
    //         <img src="/img/github.png" alt=""></img>
    //       </div>
    //     </div>  
    //   <div class="justify-end ps-20">
    //     <img src="/img/Foto.png" alt="Foto de Carlos Alberto Barrera Acuña" width={400} height={410}></img>
    //   </div>
    // </div>

    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl mb-4 text-gray-900 font-extrabold font-poppins text-5xl">Carlos Alberto Barrera Acuña
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-customGreen border-0 py-2 px-6 focus:outline-none hover:bg-customGreen rounded text-lg">Descargar HV</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/img/Foto.png"/>
    </div>
  </div>
</section>









  )
}
