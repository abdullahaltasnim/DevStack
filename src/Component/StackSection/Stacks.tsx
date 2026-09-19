import { use } from "react";
import type { Stack } from "../types/stackTypes";
import StackCard from "./Stack";

interface StacksProps {
  stacksPromise: Promise<Stack[]>;
  handleSavedStack: (stack: Stack) => void;
  saved: Stack[];
}

const Stacks = ({
  stacksPromise,
  handleSavedStack,
  saved,
}: StacksProps) => {
  const allStacks = use(stacksPromise);

  return (
    <div className="col-span-3 grid grid-cols-3 gap-5">
      {allStacks.length === 0 ? (
        <p>No Stacks found</p>
      ) : (
        allStacks.map((singleStack) => (
          <StackCard
            key={singleStack.id}
            stack={singleStack}
            handleSavedStack={handleSavedStack}
            saved={saved}
          />
        ))
      )}
    </div>
  );
};

export default Stacks;