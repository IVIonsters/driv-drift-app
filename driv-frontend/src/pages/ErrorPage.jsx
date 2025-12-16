import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div>
        404 Not Found
        <Link to="/">Back To Home</Link>
      </div>
      ,
    </>
  );
}

export default ErrorPage;
