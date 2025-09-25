import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name") || "",
      email: form.get("email") || "",
      message: form.get("message") || "",
    };

    try {
      // Simple email fallback — opens the user's email client.
      const subject = encodeURIComponent(`Message from ${payload.name}`);
      const body = encodeURIComponent(`${payload.message}\n\nFrom: ${payload.name} <${payload.email}>`);
      window.location.href = `mailto:hello@wild-and-well.store?subject=${subject}&body=${body}`;
      setStatus("opened-mail");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input name="name" required className="mt-1 w-full rounded-md border p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" name="email" required className="mt-1 w-full rounded-md border p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea name="message" rows={5} required className="mt-1 w-full rounded-md border p-2" />
      </div>
      <button className="rounded-md bg-black px-4 py-2 text-white">Send</button>
      {status === "opened-mail" && (
        <p className="text-sm text-green-600">Your email app should be open with the message ready.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Email us at hello@wild-and-well.store.</p>
      )}
    </form>
  );
}
