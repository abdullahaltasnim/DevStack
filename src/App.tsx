import { Suspense, useState } from "react";

import Footer from "./Component/Footer.tsx";
import Nav from "./Component/Nav.tsx";
import Hero from "./Component/Hero.tsx";
import Stacks from "./Component/StackSection/Stacks.tsx";
import SelectedStack from "./Component/StackSection/SelectedStack.tsx";

import type { Stack } from "./Component/types/stackTypes";

// Fetch stack data
const fetchStacks = async (): Promise<Stack[]> => {
  const res = await fetch("/stacks.json");

  if (!res.ok) {
    throw new Error("Failed to fetch stacks");
  }

  const data: Stack[] = await res.json();

  return data;
};

const stacksPromise = fetchStacks();

function App() {
  const [saved, setSaved] = useState<Stack[]>([]);

  // Add a stack
  const handleSavedStack = (stack: Stack) => {
    setSaved((previousStacks) => {
      const alreadyAdded = previousStacks.some(
        (item) => item.id === stack.id
      );

      if (alreadyAdded) {
        return previousStacks;
      }

      return [...previousStacks, stack];
    });
  };

  // Remove one stack
  const handleRemoveStack = (id: string) => {
    setSaved((previousStacks) =>
      previousStacks.filter((stack) => stack.id !== id)
    );
  };

  // Remove all selected stacks
  const handleClearAll = () => {
    setSaved([]);
  };

  return (
    <>
      <Nav />

      <Hero />

      <main>
        <section
          id="technologies"
          className="container mx-auto my-12"
        >
          {/* Section heading */}
          <div className="mb-8">
            <h2 className="text-5xl font-bold text-slate-900">
              Explore the{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>

            <p className="mt-2 text-xl text-slate-500">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Technology cards and selected stack */}
          <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-4">
            <Suspense fallback={<div>Loading...</div>}>
              <Stacks
                stacksPromise={stacksPromise}
                handleSavedStack={handleSavedStack}
                saved={saved}
              />
            </Suspense>

            {/* Sticky selected stack */}
            <div className="self-start lg:sticky lg:top-24 lg:col-span-1">
              <SelectedStack
                stacks={saved}
                handleRemoveStack={handleRemoveStack}
                handleClearAll={handleClearAll}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;