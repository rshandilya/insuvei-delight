
const features = [
    {title: "Fast and convenient delivery", 
    description: "Sizzling meals at your doorstep in no time – skip the queues and enjoy restaurant-quality food from the comfort of your couch, anytime you crave it."},
    {title: "Multi-cuisine offerings", description: "From spicy Indian to cheesy Italian, our cloud kitchen serves a world of flavors under one digital roof – your taste buds will never get bored."},
    {title: "Cost-effective pricing", description: "Why pay for fancy décor? We cut the overhead, not the flavor – get gourmet meals at prices that make sense for your pocket and your palate."},
    {title: "Hygiene and technology-driven operations", description: "Every dish is prepared with precision, hygiene, and technology at its core – because your health and satisfaction are always our top priorities."},
    {title: " Extended availability hours", description: "Late-night hunger doesn't stand a chance – our cloud kitchen is ready whenever you are, serving hot, delicious food long after others have closed."},
    {title: "Sustainable and eco-conscious practices", description: "Great taste, green promise – we deliver with eco-friendly packaging so you can enjoy your meal while caring for the planet."}
]



export default function Features(){
    return (
        <div>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our competitive advantage</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
      We combine speed, variety, and technology to deliver fresh, restaurant-quality meals at unbeatable prices. Our smart kitchen operations ensure consistency, hygiene, and customer satisfaction with every order.
      </p>
    </div>
    

    <div class="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
        
    {features.map((item, _) => (
      <div class="flex divide-x rounded-lg border bg-gray-50">
      <div class="flex items-center p-2 text-red-500 md:p-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div class="p-4 md:p-6">
        <h3 class="mb-2 text-lg font-semibold md:text-xl">{item.title}</h3>
        <p class="text-gray-500">{item.description}</p>
      </div>
    </div>
    ))
    }
    </div>
  </div>
</div>
</div>
    )
}