import { FiTrash2, FiX } from "react-icons/fi";
import type { Stack } from "../types/stackTypes";

type SelectedStackProps = {
  stacks: Stack[];
  handleRemoveStack: (id: string) => void;
  handleClearAll: () => void;
};

const SelectedStack = ({
  stacks,
  handleRemoveStack,
  handleClearAll,
}: SelectedStackProps) => {
  return (
    <aside className="w-full">
      <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-purple-500">
              Your Stack
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              Selected Stack
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              {stacks.length}{" "}
              {stacks.length === 1 ? "technology" : "technologies"} selected
            </p>
          </div>

          {/* Counter */}
          <span className="grid h-8 w-8 place-items-center rounded-full bg-purple-100 text-xs font-bold text-purple-600">
            {stacks.length}
          </span>
        </div>

        {/* Empty State */}
        {stacks.length === 0 ? (
          <div className="py-12 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-dashed border-slate-300 text-xl text-slate-400">
              +
            </div>

            <p className="mt-4 text-sm font-bold text-slate-800">
              Your stack is empty
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Add technologies and they will appear here.
            </p>
          </div>
        ) : (
          /* Selected Stacks */
          <div className="my-3 grid gap-3">
            {stacks.map((stack) => (
              <div
                key={stack.id}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3"
              >
                {/* Icon */}
                <img
                  src={stack.icon}
                  alt={`${stack.name} logo`}
                  className="h-10 w-10 object-contain"
                />

                {/* Stack Info */}
                <div className="min-w-0">
                  <strong className="block truncate text-sm text-slate-900">
                    {stack.name}
                  </strong>

                  <span className="text-xs text-slate-500">
                    {stack.category}
                  </span>
                </div>

                {/* Remove Button */}
                <button
                  type="button"
                  onClick={() => handleRemoveStack(stack.id)}
                  aria-label={`Remove ${stack.name}`}
                  className="ml-auto cursor-pointer text-slate-400 transition hover:text-red-500"
                >
                  <FiX className="text-lg" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Clear All Button */}
        <button
          type="button"
          disabled={stacks.length === 0}
          onClick={handleClearAll}
          className="flex min-h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-red-200 text-xs font-bold text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FiTrash2 />
          Clear Stack
        </button>
      </div>
    </aside>
  );
};

export default SelectedStack;