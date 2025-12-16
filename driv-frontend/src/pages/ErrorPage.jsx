import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function ErrorPage() {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <p className="p-4">ERROR! 404 PAGE NOT FOUND, SORRY!</p>
        <Button
          variant="outline"
          className="p-8"
          aria-label="submit"
          asChild
        >
          <Link to="/">Back To Home</Link>
        </Button>
      </div>
      ,
    </>
  );
}

export default ErrorPage;
