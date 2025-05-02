import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount }) {
  const handleCLick = () => {
    setCount((prev) => {
      if (type === "minus") {
        return prev - 1;
      } else {
        return prev + 1;
      }
    });
  }
  return (
    <div className="button-container">
      <button 
        onClick={handleCLick}
        className="count-btn">
          {type === "minus" ? (
            <MinusIcon className="count-btn-icon" />
          ) : (
            <PlusIcon className="count-btn-icon" />
          )}
      </button>

    </div>
  );
}