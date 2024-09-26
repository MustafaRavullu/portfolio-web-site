import { Globe } from "lucide-react";

export default function Dock() {
  return (
    <div className="fixed bottom-4 h-14 inset-x-0 flex justify-center items-center">
      <div className="fixed inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white/60 dark:from-black/60 to-transparent z-30"></div>
      <div className="w-fit p-3 h-fit rounded-full  z-50 flex gap-3 border bg-background shadow"></div>
    </div>
  );
}
