const Button = ({ count, setCount, children }) => {
  
  const handleClick = () => {
    switch (children) {
      case "+ 1":
        return setCount(count + 1);
      case "- 1":
        if (count > 0) setCount(count - 1);
        break;
      default:
        return count;
    }
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
