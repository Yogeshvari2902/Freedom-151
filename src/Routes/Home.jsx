import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Link to="/login">
        <h3 data-testid="login-link">Admin</h3>
      </Link>
      <Link to="/signup">
        <h3 data-testid="home-link">User</h3>
      </Link>
    </div>
  );
}
export default Home;
