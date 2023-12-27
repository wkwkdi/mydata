import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
  <h1>hello</h1>
  <ul>
    <Link to="01">
    <li>1.styled components Basic</li>
    </Link>
    <Link to="02">
    <li>2.Nesting 문법</li>
    </Link>
    <Link to="03">
    <li>3.Practice</li>
    </Link>
    <Link to="04">
    <li>4.Practice</li>
    </Link>
  </ul>
  <Outlet/>
  </>
  );
}

export default App;
