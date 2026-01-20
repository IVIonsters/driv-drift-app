import LoginForm from "@/components/login-form";

function LoginPage() {
  return (
    <div className="min-h-screen text-center flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
