import { Cpu, Lock, Sparkles, Zap } from "lucide-react";

import Button from "@/components/ui/button";

export default function Features() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto container space-y-10 px-6">
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-semibold text-emerald-900 dark:text-emerald-100">
            Run Your Business Smarter
            <br /> with One ERP Platform
          </h2>
          <p className="sm:ml-auto space-y-5">
            <p className="text-lg text-emerald-900/90 dark:text-emerald-100/85">
              Streamline your operations, manage your teams, and gain full
              visibility across your business with a powerful all-in-one ERP
              application.
            </p>
            <div className="flex flex-row items-center gap-3">
              <Button
                type="link"
                className="!py-2 bg-emerald-600 hover:bg-emerald-700 text-white"
                href="#why-animux"
              >
                Get Started
              </Button>
              <Button
                href="https://wa.me/8801874319116"
                target="_blank"
                rel="noopener noreferrer"
                outline
                className="!py-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950/30"
              >
                Request a Demo
              </Button>
            </div>
          </p>
        </div>
        <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
          <div className="aspect-[88/36] relative">
            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-white via-transparent to-transparent dark:from-black  dark:to-transparent rounded-br-lg rounded-bl-lg"></div>
            <img
              src="/erp/2w.png"
              className="absolute inset-0 z-10 dark:hidden rounded-lg"
              alt="payments illustration dark"
              width={2797}
              height={1137}
            />
            <img
              src="/erp/2d.png"
              className="hidden dark:block rounded-lg"
              alt="payments illustration dark"
              width={2797}
              height={1137}
            />
            <img
              src="/erp/2w.png"
              className="dark:hidden rounded-lg"
              alt="payments illustration light"
              width={2797}
              height={1137}
            />
          </div>
        </div>
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-sm font-medium text-emerald-900 dark:text-emerald-100">
                Faaast
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Built for speed, so your team can work faster and get more done
              every day.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-sm font-medium text-emerald-900 dark:text-emerald-100">
                Powerful
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Packed with essential ERP tools to manage operations, data, and
              workflows with ease.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-sm font-medium text-emerald-900 dark:text-emerald-100">
                Security
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Designed to protect your business data with secure access and
              reliable system controls.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-emerald-600 dark:text-emerald-400" />

              <h3 className="text-sm font-medium text-emerald-900 dark:text-emerald-100">
                Integrated
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Unify your workflows, teams, and data in one connected ERP
              platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
