export default function Button({ className, children }) {
  const addClassname = className ? `${className}` : "";
  return (
    <button
      className={`${className} bg-orange text-white border border-transparent hover:border-orange hover:bg-white hover:text-orange`}
    >
      {children}
    </button>
  );
}
