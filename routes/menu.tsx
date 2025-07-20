import { Head } from "$fresh/runtime.ts";
import MenuItemCard from "../islands/MenuItemCard.tsx";

export default function MenuPage() {
  const menuItems = [
    {
      title: "Margherita Pizza",
      description:
        "Classic delight with 100% real mozzarella cheese, fresh tomatoes, and basil.",
      imageSrc:
        "https://res.cloudinary.com/du3axdiyl/image/upload/v1753022716/PIZZA_yscaqd.jpg",
    },
    {
      title: "Spicy Pepperoni",
      description:
        "A fiery mix of spicy pepperoni, jalapeños, and a blend of Italian cheeses.",
      imageSrc:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1935",
    },
    {
      title: "Veggie Supreme",
      description:
        "A garden-fresh medley of bell peppers, onions, olives, mushrooms, and corn.",
      imageSrc:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981",
    },
    {
      title: "Gourmet Burger",
      description:
        "Juicy beef patty with cheddar cheese, crispy bacon, lettuce, and our special sauce.",
      imageSrc:
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072",
    },
    {
      title: "Chicken Alfredo",
      description:
        "Creamy Alfredo sauce over fettuccine pasta, topped with grilled chicken breast.",
      imageSrc:
        "https://res.cloudinary.com/du3axdiyl/image/upload/v1753022715/chicken_giao2v.jpg",
    },
    {
      title: "Chocolate Lava Cake",
      description:
        "Decadent chocolate cake with a molten chocolate center, served with a scoop of vanilla ice cream.",
      imageSrc:
        "https://res.cloudinary.com/du3axdiyl/image/upload/v1753022714/cake_oy9ukq.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Our Menu</title>
        <meta name="description" content="Browse our delicious menu items." />
      </Head>
      <div class="bg-gray-100">
        <div class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-bold text-center text-gray-800 mb-4">
            Our Menu
          </h1>
          <p class="text-lg text-center text-gray-600 mb-12">
            Delicious meals, made fresh for you.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <MenuItemCard
                key={index}
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}