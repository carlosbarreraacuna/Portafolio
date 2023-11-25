import '../css/Sobremi.css'

export default function Sobremi() {
    return (
        // <div class="flex px-8 pt-80 ps-40">
        //         <div class="ps-20">
        //             <img src="/img/Foto.png" alt="Foto de Carlos Alberto Barrera Acuña" width={400} height={410}></img>
        //         </div>
        //     <div class="flex flex-col gap-y-8 lg:flex-row">


        //         <div class=" justify-center items-center px-5">
        //             <div className="w-96 h-96 flex-shrink-0 ms-96">
        //                 <div class="text-gray-900 font-extrabold font-poppins text-5xl leading-9 tracking-tighter">
        //                     Sobre mi
        //                 </div>
        //                 <div className="py-4">Soy una persona completamente enfocada al área de sistemas de información y el área de desarrollo de software dedicado a el aprendizaje de manera autodidacta adquiriendo conocimientos mediante recursos tecnológicos, teniendo en cuenta una identidad asertiva, disciplinada, responsable y con sentido de pertenencia. Estando siempre a la vanguardia de las tendencias en el campo tecnológico y laboral otorgando innovación y creatividad a lo proyectado a empresas, ayudando a la resolución de los problemas al interior de ella.</div>



        //             </div>


        //         </div>
        //     </div>
        // </div>
        <section class="text-gray-600 body-font px-5 py-24">
            <div class="container px-5 py-24 mx-auto flex flex-col">
                <div class="lg:w-4/6 mx-auto">
                <div className='text-gray-900 text-center font-poppins text-6xl font-bold leading-10 tracking-tighter'>
                Sobre mi
            </div>
                    <div class="flex flex-col sm:flex-row mt-10">
                        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                            <img src='/img/Perfil.jpg' className='m-auto'></img>
                            </div>
                            <div class="flex flex-col items-center text-center justify-center">
                                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Desarrolador FullStack</h2>
                                <div class="w-12 h-1 bg-customGreen rounded mt-2 mb-4"></div>
                                <p class="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                            </div>
                        </div>
                        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p class="leading-relaxed text-lg mb-4">Soy una persona completamente enfocada al área de sistemas de información y el área de desarrollo de software dedicado a el aprendizaje de manera autodidacta adquiriendo conocimientos mediante recursos tecnológicos, teniendo en cuenta una identidad asertiva, disciplinada, responsable y con sentido de pertenencia. Estando siempre a la vanguardia de las tendencias en el campo tecnológico y laboral otorgando innovación y creatividad a lo proyectado a empresas, ayudando a la resolución de los problemas al interior de ella.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}