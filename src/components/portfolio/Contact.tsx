import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import AnimatedText from "../animatedText";

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-card-foreground/70 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-xl bg-background/20 border border-card-foreground/15 px-4 py-3 2xl:py-5 text-card-foreground 2xl:text-lg placeholder:text-card-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/60"
      />
    </div>
  );
}

export function Contact() {
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent — I'll reply within 24 hours.");
      form.reset();
    }, 600);
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 sm:px-6 py-20 md:py-32 2xl:py-48">
      <div className="text-center mb-10 md:mb-12 2xl:mb-20">
        <p className="text-sm 2xl:text-base uppercase tracking-[0.25em] text-foreground/60 mb-3 2xl:mb-5">
          Contact
        </p>
        <AnimatedText text="Let's build something good." className="font-display text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-semibold" animationType="words" staggerDelay={0.08} duration={0.6} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl bg-card text-card-foreground p-6 sm:p-8 md:p-10 space-y-6"
      >

        <div className="grid md:grid-cols-2 gap-6">
          <Field label="Name" name="name" placeholder="Jane Doe" />
          <Field label="Email" name="email" type="email" placeholder="jane@studio.com" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-card-foreground/70 mb-2">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell me about the project…"
            className="w-full rounded-xl bg-background/20 border border-card-foreground/15 px-4 py-3 2xl:py-5 text-card-foreground 2xl:text-lg placeholder:text-card-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/60 resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center gap-2 2xl:gap-4 rounded-full bg-primary text-primary-foreground px-6 py-3 2xl:px-10 2xl:py-5 text-sm 2xl:text-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {sending ? "Sending…" : "Let's Talk"}
          <Send className="h-4 w-4 2xl:h-6 2xl:w-6" />
        </button>
      </form>
    </section>
  );
}
