import { Link } from "react-router-dom";

function RouteButton({ to, label = "View" }) {
  return (
    <Link to={to}>
      <button
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "8px",
          backgroundColor: "light brown",
          color: "white",
          border: "black",
        }}
      >
        {label}
      </button>
    </Link>
  );
}

export default RouteButton;