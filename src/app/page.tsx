import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Customer } from "./components/customer/customer";
import { Hero } from "./components/Home/hero";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <About />
        <Customer />
        <Contact />
      </div>
    </main>
  );
}
