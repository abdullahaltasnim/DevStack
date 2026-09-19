import { FiCheck } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

import type { Stack } from "../types/stackTypes";

type StackCardProps = {
  stack: Stack;
  saved: Stack[];
  handleSavedStack: (stack: Stack) => void;
};

const StackCard = ({
  stack,
  saved,
  handleSavedStack,
}: StackCardProps) => {
  const {
    id,
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = stack;

  const selected = saved.some((item) => item.id === id);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Icon and Badge */}
      <div className="flex items-start justify-between">
        <img
          src={icon}
          alt={`${name} logo`}
          className="h-10 w-10 object-contain"
        />

        {badge && (
          <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-500">
            {badge}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {name}
      </h3>

      {/* Description */}
      <p className="mt-3 min-h-[84px] text-sm leading-6 text-slate-500">
        {description}
      </p>

      {/* Bottom Section */}
      <div className="mt-auto border-t border-slate-100 pt-4">
        {/* Category, Difficulty and Rating */}
        <div className="flex items-center justify-between gap-2">
          <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">
            {category}
          </span>

          <span className="text-xs text-slate-500">
            {difficulty}
          </span>

          <div className="flex items-center gap-1">
            <FaStar className="text-sm text-amber-400" />

            <span className="text-xs font-medium text-slate-700">
              {rating}
            </span>
          </div>
        </div>

        {/* Add to Stack Button */}
        <button
          type="button"
          disabled={selected}
          onClick={() => handleSavedStack(stack)}
          className={`mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-lg text-sm font-medium transition duration-200 ${
            selected
              ? "cursor-not-allowed bg-emerald-100 text-emerald-700"
              : "bg-slate-950 text-white hover:bg-slate-800"
          }`}
        >
          {selected ? (
            <>
              <FiCheck className="text-base" />
              Added to Stack
            </>
          ) : (
            "Add to Stack"
          )}
        </button>
      </div>
    </article>
  );
};

export default StackCard;