import { useSignal } from "@preact/signals";
//import { NavButton } from "../components/Button.tsx";
//import { useEffect } from "preact/hooks";

export default function Nav() {

  const st = useSignal(false);
  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Home", path: "/" },
      { title: "Menu", path: "/menu" },
  ]
  
    return (
        <>
            <header>
                <nav class="items-center py-2 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
                    <div class="flex justify-between">
                        <a href="/">
                        <img
                            src="/insuvei.png"
                            alt="Insuvei Delight Logo"
                            class="w-2/4 max-w-lg md:max-w-md"
                        />

                        </a>
                        <button type="button"
                            class="text-gray-500 outline-none md:hidden"
                            onClick={ () => st.value = !st.value}
                        >
                            {
                                st.value ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (

                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                    <ul class={`flex-1 justify-between mt-12 md:flex md:mt-0 ${st.value ? '' : 'hidden'}`}>
                        <li class="order-2 pb-5 md:pb-0">
                            <a href="javascript:void(0)" class="py-2 px-4 rounded-md shadow-md text-white text-center bg-red-400 focus:shadow-none block md:inline">
                                Sign In
                            </a>
                        </li>
                        <div class="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
                            {
                                navigation.map((item, idx) => (
                                    <li class="text-gray-500 hover:text-red-600" key={idx}>
                                        <a href={item.path}>{item.title}</a>
                                    </li>
                                ))
                            }
                        </div>
                    </ul>
                </nav>
            </header>
            
        </>
    )
}