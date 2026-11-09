import { Contact } from "@/components/sections/Contact";
import { DishGallery } from "@/components/sections/DishGallery";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { History } from "@/components/sections/History";
import { Hours } from "@/components/sections/Hours";
import { OrganicBackground } from "@/components/ui/OrganicBackground";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Pulls up by the header height so the background starts at the top of the screen. */}
        <div className="relative isolate -mt-28 overflow-hidden pt-28 md:-mt-36 md:pt-36">
          <OrganicBackground />
          <Hero />
          <div className="mx-auto max-w-6xl px-4 pt-8 pb-16 md:pt-0">
            <div className="grid gap-8 rounded-large bg-surface p-4 shadow-card md:grid-cols-5 md:p-8">
              <div className="md:col-span-3">
                <Contact />
              </div>
              <div className="md:col-span-2">
                <Hours />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 pt-16">
          <DishGallery />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-16">
          <History />
        </div>
      </main>
      <Footer />
    </>
  );
}
