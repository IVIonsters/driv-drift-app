import SignUpForm from "@/components/signup-form";
import { AppLayout } from "@/features/applayout/AppLayout";
import { SidebarNav } from "@/features/applayout/SidebarNav";
import { CenterColumn } from "@/features/applayout/CenterColumn";
import { RightPreviewPanel } from "@/features/applayout/RightPreviewPanel";

function SignUp() {
  return (
    <AppLayout
      sidebar={<SidebarNav />}
      center={
        <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
          <div className="w-full max-w-md">
            <div className="text-center mb-4">
              <h1 className="text-3xl font-bold text-slate-900 mb-1">
                Join DRIV 🚗
              </h1>
              <p className="text-slate-600 text-sm">
                Start your drift racing journey today
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-lg border border-slate-200">
              <SignUpForm />
            </div>
          </div>
        </div>
      }
      right={
        <RightPreviewPanel>
          <div className="h-full w-full flex flex-col items-center justify-center gap-6 p-8 text-center">
            <div className="text-8xl">🎯</div>
            <h3 className="text-white text-2xl font-bold">
              Join the Community
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Become part of the ultimate drift racing platform
            </p>
            <div className="grid grid-cols-2 gap-3 w-full mt-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl mb-1">500+</div>
                <div className="text-xs text-white/70">Active Drivers</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl mb-1">50+</div>
                <div className="text-xs text-white/70">Events Monthly</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl mb-1">1000+</div>
                <div className="text-xs text-white/70">Media Posts</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl mb-1">24/7</div>
                <div className="text-xs text-white/70">Community</div>
              </div>
            </div>
          </div>
        </RightPreviewPanel>
      }
    />
  );
}

export default SignUp;
