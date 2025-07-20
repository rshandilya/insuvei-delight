import { PageProps } from "$fresh/server.ts";
import Nav from "../islands/Navbar.tsx";
//import { Partial } from "$fresh/runtime.ts";

export default function Layout({ Component,  }: PageProps) {
  return (
    <div class="flex flex-col min-h-screen">
      <Nav />
      <main class="flex-grow">
        <Component />
      </main>
      <footer class="bg-red-900 text-white p-4 text-center">
        <p>&copy; 2025 Insuvei Delight. All rights reserved.</p>
      </footer>
    </div>
  );
}
