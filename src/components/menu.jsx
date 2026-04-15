export default function Menu({ active, setActive }) {
  const items = ["About", "Projects", "Experience", "Resume", "Contact"];

  return (
    <div>
      {items.map((item) => (
        <h1
          key={item}
          onMouseEnter={() => setActive(item)}
          style={{
            opacity: active === item ? 1 : 0.4,
            fontSize: "3rem",
            cursor: "pointer",
            textShadow: "0px 4px 10px rgba(0, 0, 0, 25)",
          }}
        >
          {item}
        </h1>
      ))}
    </div>
  );
}