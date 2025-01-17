```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;
    // Correct asynchronous operation
    intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  }, []);

  return <div>Count: {count}</div>;
}
```