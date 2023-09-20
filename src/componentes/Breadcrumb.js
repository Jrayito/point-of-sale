import { Link } from "react-router-dom";
import { Icon } from "./Icon";

export const Breadcrumb = ({ paths }) => {
  return (
    <nav aria-label="breadcrumb" className="mt-2">
      <ol className="breadcrumb">
        <li className="breadcrumb-item" style={{ fontSize: "0.2rem" }}>
          <Link to="/" className="text-primary">
            <Icon name="home" />
          </Link>
        </li>
        {paths.map((pat) => (
          <li
            className="breadcrumb-item active"
            aria-current="page"
            key={pat.head}
          >
            <Link to={pat.path} className="text-primary">
              {pat.head}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};
