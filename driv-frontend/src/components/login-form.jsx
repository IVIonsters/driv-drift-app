import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function LoginForm({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-900">
            Login to your account
          </CardTitle>
          <CardDescription className="text-slate-600">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel
                  htmlFor="email"
                  className="text-slate-900 font-medium"
                >
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="border-slate-200 text-slate-900 placeholder:text-slate-400"
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel
                    htmlFor="password"
                    className="text-slate-900 font-medium"
                  >
                    Password
                  </FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm text-blue-600 underline-offset-4 hover:underline hover:text-blue-700"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                  className="border-slate-200 text-slate-900 placeholder:text-slate-400"
                />
              </Field>
              <Field>
                <Button
                  type="submit"
                  className="w-full bg-slate-900 text-white hover:bg-slate-800"
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  className="w-full border-slate-200 text-slate-700 hover:bg-slate-50"
                >
                  Login with Google
                </Button>
                <FieldDescription className="text-center text-slate-600">
                  Don&apos;t have an account?{" "}
                  <a
                    href="/register"
                    className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                  >
                    Sign up
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
