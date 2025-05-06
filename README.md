# 🔁 useCallback Child Component Optimization

This project demonstrates the use of React's `useCallback` hook to prevent **unnecessary re-renders** of child components that receive functions as props. It's a practical example for understanding performance optimization using `React.memo` and `useCallback`.

---

## 🚀 Features

- Tracks a counter in the parent component
- A toggle state to force parent re-renders
- A memoized child `<Button />` component
- Prevents child re-render unless the function prop truly changes

---

## 🧠 What is `useCallback`?

`useCallback` is a React Hook that returns a **memoized version** of the callback function. This is useful when:
- Passing functions to child components
- Avoiding unnecessary re-renders when the function does not change

```js
const memoizedFn = useCallback(() => {
  // function logic
}, [dependencies]);
