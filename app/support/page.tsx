"use client"

import {useEffect, useState} from "react"
import {PrivacyHeader} from "@/components/privacy-header"
import {Footer} from "@/components/footer"

export default function ContactPage() {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const [sent, setSent] = useState(false)

    const SEND_TO = "zholdas.alnur@gmail.com"

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        // compose mailto
        const safe = (v: string) => encodeURIComponent(v.trim())
        const composedSubject = subject || `Message from ${fullName || "Qutty Band user"}`
        const lines = [
            `Full Name: ${fullName || "-"}`,
            `Email: ${email || "-"}`,
            `Phone: ${phone || "-"}`,
            "",
            "Message:",
            message || "-",
        ].join("\n")

        const href = `mailto:${SEND_TO}?subject=${safe(composedSubject)}&body=${safe(lines)}`
        window.location.href = href

        // optimistic success + clear form
        setFullName("")
        setEmail("")
        setPhone("")
        setSubject("")
        setMessage("")
        setSent(true)
    }

    // auto-hide success banner
    useEffect(() => {
        if (!sent) return
        const t = setTimeout(() => setSent(false), 6000)
        return () => clearTimeout(t)
    }, [sent])

    const formValid = fullName.trim() && email.trim() && subject.trim() && message.trim()

    return (
        <div className="min-h-screen bg-background">
            <PrivacyHeader/>

            <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* Left rail — contacts */}
                        <aside className="lg:col-span-4">
                            <div className="bg-muted/30 rounded-2xl p-6 lg:sticky lg:top-28">
                                <h2 className="text-3xl font-bold tracking-tight">Qutty Band</h2>
                                <p className="text-muted-foreground mt-1">Get in Touch</p>

                                <div className="mt-6 space-y-3 text-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="i-lucide-mail size-4"/>
                                        <a className="underline underline-offset-4"
                                           href="mailto:zholdas.alnur@gmail.com">
                                            zholdas.alnur@gmail.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="i-lucide-phone size-4"/>
                                        <a className="underline underline-offset-4" href="tel:+77064460112">
                                            +7 (706) 446-01-12
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="i-lucide-clock size-4"/>
                                        <span>Mon–Fri: 9:00 AM – 6:00 PM</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="i-lucide-map-pin size-4"/>
                                        <span>Kazakhstan</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h3 className="font-semibold mb-2">Why Contact Us?</h3>
                                    <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                                        <li>Product inquiries</li>
                                        <li>Service & app support</li>
                                        <li>Partnership opportunities</li>
                                        <li>General information</li>
                                    </ul>
                                </div>
                            </div>
                        </aside>

                        {/* Right — form */}
                        <section className="lg:col-span-8">
                            <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
                            <p className="text-muted-foreground mb-8">
                                Send us a message and we’ll get back to you soon.
                            </p>

                            {/* success banner */}
                            {sent && (
                                <div
                                    role="status"
                                    aria-live="polite"
                                    className="mb-6 border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 rounded-2xl px-4 py-3 flex items-start gap-3"
                                >
                                    <span className="i-lucide-check-circle size-5 mt-0.5"/>
                                    <div className="flex-1">
                                        <p className="font-medium">Message ready in your mail client</p>
                                        <p className="text-sm opacity-80">
                                            We opened your default email app with the message. You can edit and send it
                                            there.
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setSent(false)}
                                        className="opacity-70 hover:opacity-100 transition"
                                        aria-label="Dismiss"
                                    >
                                        <span className="i-lucide-x size-5"/>
                                    </button>
                                </div>
                            )}

                            <form onSubmit={onSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                                        <input
                                            required
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            placeholder="Your name"
                                            className="w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@example.com"
                                            className="w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                                        <input
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="+7 ..."
                                            className="w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Subject *</label>
                                        <input
                                            required
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            placeholder="How can we help?"
                                            className="w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Message *</label>
                                    <textarea
                                        required
                                        rows={6}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Please describe your inquiry in detail…"
                                        className="w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={!formValid}
                                    className="w-full md:w-auto rounded-2xl px-6 py-3 font-semibold bg-foreground text-background hover:opacity-90 active:opacity-80 disabled:opacity-40 transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </section>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    )
}
