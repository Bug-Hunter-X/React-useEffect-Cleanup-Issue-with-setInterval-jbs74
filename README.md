# React useEffect Cleanup Issue with setInterval

This repository demonstrates a common issue in React's `useEffect` hook when using `setInterval`.  The provided code creates a memory leak because the cleanup function isn't correctly clearing the interval.  The solution shows how to fix this by correctly utilizing the cleanup function within the `useEffect` hook.