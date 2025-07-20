
export default function Hero(){
    return (
        <div>
          <section class="relative h-screen w-full overflow-hidden">
          <img
            src="https://res.cloudinary.com/dvkaijxgo/image/upload/v1735960073/cld-sample-4.jpg"         
            alt="Hero background"
            class="absolute inset-0 w-full h-full object-cover
                  scale-110 
                  blur-sm                               
                  shadow-[0_0_60px_20px_rgba(0,0,0,0.7)]
                  "
          />
          <div class="absolute inset-0 bg-black/40"></div>

          <div
            class="relative z-10 flex flex-col items-center justify-center
                  h-full text-center text-gray-50 px-4"
          >
           
           <img
            src="/insuvei.png"
            alt="Insuvei Delight Logo"
            class="w-11/12 max-w-xl md:max-w-xl"
          />

            <h2 class="text-xl md:text-2xl font-extrabold drop-shadow-lg">
            Crave. Click. Delivered!
            </h2>
            <p class="mt-4 max-w-lg text-md md:text-lg text-gray-200/90">
            Delicious, chef-crafted meals delivered hot and fresh straight from our kitchen to your doorstep.
            No delays. No fuss. Just flavor.
            </p>
            <a
              href="/menu"
              class="mt-6 inline-block rounded-lg bg-red-300 py-1 px-4
                    text-base font-semibold tracking-wide text-white
                    shadow-lg ring-2 ring-red-500/60 ring-offset-2
                    transition hover:bg-red-700 focus:outline-none
                    focus-visible:ring-offset-0"
            >
             Order Now
            </a>
          </div>
        </section>  
        </div>
    )
}