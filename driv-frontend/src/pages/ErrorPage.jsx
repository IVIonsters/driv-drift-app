import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function ErrorPage() {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button variant="default">Click me</Button>
        <Button variant="outline">Outline</Button>
        <Button size="lg">Large Button</Button>
        <Link to="/">Back To Home</Link>
      </div>
      ,
    </>
  );
}

export default ErrorPage;
