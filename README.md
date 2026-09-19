# 🚀 DevStack

### Build Your Ideal Development Stack

DevStack is a React-based web application where users can explore different technologies and create their own preferred development stack. Users can view information such as category, difficulty, rating, and badges, then add technologies to their selected stack.

---

## 🛠️ Technologies Used

* ⚛️ React
* 🔷 TypeScript
* ⚡ Vite
* 🎨 Tailwind CSS
* 🌼 DaisyUI
* 🎯 React Icons
* 📄 JSON Data

---

## ✨ Features

### 1. Explore Technologies

Users can explore different frontend, backend, database, language, styling, and DevOps technologies. Each technology card shows its name, description, category, difficulty, rating, and badge.

### 2. Build Your Own Stack

Users can add technologies to their selected development stack. The same technology cannot be added more than once.

### 3. Manage Selected Stack

Users can remove a single technology or clear the entire selected stack. The selected technology count and empty-stack message update automatically.

---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write, read, and understand.

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component. **State** stores data inside a component that can change and cause the UI to update.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data inside a React component. In this project, I used it in `App.tsx` to store the technologies that the user adds to the selected stack.

```tsx
const [saved, setSaved] = useState<Stack[]>([]);
```

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is normally used for side effects such as fetching data after a component renders. In my current project, I did not use `useEffect`; instead, I loaded `stacks.json` using `fetch()`, a Promise, React `use()`, and `Suspense`.

```tsx
const fetchStacks = async (): Promise<Stack[]> => {
  const res = await fetch("/stacks.json");
  const data: Stack[] = await res.json();
  return data;
};
```

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify which item has been added, removed, or changed. It allows React to update lists efficiently without unnecessarily re-rendering every item.

```tsx
<StackCard
  key={singleStack.id}
  stack={singleStack}
/>
```

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. I used it in the selected stack section to show an empty message when no technology has been selected.

```tsx
{stacks.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <div>{/* Selected technologies */}</div>
)}
```

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using **props**. A child can communicate back to the parent by calling a function that the parent passes to it as a prop.

```tsx
<SelectedStack
  stacks={saved}
  handleRemoveStack={handleRemoveStack}
  handleClearAll={handleClearAll}
/>
```

Here, `App.tsx` passes data and functions to `SelectedStack`. The child calls those functions when the user removes a technology or clears the stack.

---

## 📌 Project Purpose

The main purpose of DevStack is to help developers explore popular technologies and organize the tools they may want to use for their next development project.

---

### ⭐ DevStack — Explore, Select, and Build Your Perfect Development Stack
