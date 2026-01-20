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
import { Link } from "react-router-dom";

export default function SignupForm({ ...props }) {
  return (
    <Card
      {...props}
      className="border-slate-200"
    >
      <CardHeader className="pb-4">
        <CardTitle className="text-xl text-slate-900">
          Create an account
        </CardTitle>
        <CardDescription className="text-slate-600 text-sm">
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup className="gap-4">
            <Field>
              <FieldLabel
                htmlFor="name"
                className="text-slate-900 font-medium text-sm"
              >
                Full Name
              </FieldLabel>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                className="border-slate-200 text-slate-900 placeholder:text-slate-400 h-9"
              />
            </Field>
            <Field>
              <FieldLabel
                htmlFor="email"
                className="text-slate-900 font-medium text-sm"
              >
                Email
              </FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="border-slate-200 text-slate-900 placeholder:text-slate-400 h-9"
              />
            </Field>
            <Field>
              <FieldLabel
                htmlFor="password"
                className="text-slate-900 font-medium text-sm"
              >
                Password
              </FieldLabel>
              <Input
                id="password"
                type="password"
                placeholder="********"
                required
                className="border-slate-200 text-slate-900 placeholder:text-slate-400 h-9"
              />
            </Field>
            <Field>
              <FieldLabel
                htmlFor="confirm-password"
                className="text-slate-900 font-medium text-sm"
              >
                Confirm Password
              </FieldLabel>
              <Input
                id="confirm-password"
                type="password"
                placeholder="********"
                required
                className="border-slate-200 text-slate-900 placeholder:text-slate-400 h-9"
              />
            </Field>
            <div className="space-y-2 pt-2">
              <Button
                type="submit"
                className="w-full bg-slate-900 text-white hover:bg-slate-800 h-9"
              >
                Create Account
              </Button>
              <Button
                variant="outline"
                type="button"
                className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 h-9"
              >
                Sign up with Google
              </Button>
              <FieldDescription className="text-center text-slate-600 text-xs pt-2">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                >
                  Sign in
                </a>
              </FieldDescription>
            </div>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
