import LoginForm from "@/components/login-form";
import { AppLayout } from "@/features/applayout/AppLayout";
import { SidebarNav } from "@/features/applayout/SidebarNav";
import { CenterColumn } from "@/features/applayout/CenterColumn";
import { RightPreviewPanel } from "@/features/applayout/RightPreviewPanel";

function LoginPage() {
  return (
    <AppLayout
      sidebar={<SidebarNav />}
      center={
        <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Welcome Back 🏎️
              </h1>
              <p className="text-slate-600">
                Login to continue your drift journey
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg border border-slate-200">
              <LoginForm />
            </div>
          </div>
        </div>
      }
      right={
        <RightPreviewPanel>
          <div className="h-full w-full flex flex-col items-center justify-center gap-6 p-8 text-center">
            <div className="text-8xl">🔐</div>
            <h3 className="text-white text-2xl font-bold">Secure Access</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Your drift stats, tournament history, and community connections
              are waiting for you
            </p>
            <div className="space-y-2 text-white/70 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Track your drift scores</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Join tournaments</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Connect with drivers</span>
              </div>
            </div>
          </div>
        </RightPreviewPanel>
      }
    />
  );
}

export default LoginPage;
