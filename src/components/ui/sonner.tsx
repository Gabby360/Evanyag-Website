import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-ink group-[.toaster]:text-white group-[.toaster]:border-white/20 group-[.toaster]:shadow-lg font-sans",
          description: "group-[.toast]:text-white/70",
          actionButton:
            "group-[.toast]:bg-ember group-[.toast]:text-white font-medium",
          cancelButton:
            "group-[.toast]:bg-white/10 group-[.toast]:text-white",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
