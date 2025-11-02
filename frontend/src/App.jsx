import React, { useRef } from "react";
import { motion } from "framer-motion";

/*
  Key features:
  - Top nav with smooth scrolling
  - Hero (animated gradient text)
  - Analytics, Demo, Pricing, Contact
  - Movable draggable Tabs (Dashboard / Algorithms / Settings / Wallet)
  - All files are ESM-safe; postcss is CommonJS (postcss.config.cjs)
*/

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{children}</h2>
);

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function App() {
  const tabsParent = useRef(null);

  return (
    <div className="relative">
      {/* Floating glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-10 -top-10 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-600 to-pink-500 opacity-10 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-6 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 opacity-10 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      {/* Top Navigation */}
      <header className="fixed top-4 left-0 right-0 z-30">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-black font-bold">AN</div>
            <div>
              <div className="font-semibold">AlgoNova</div>
              <div className="text-xs text-slate-400">Smarter Transactions. Intelligent Insights.</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollTo("home")} className="text-slate-300 hover:text-white">Home</button>
            <button onClick={() => scrollTo("features")} className="text-slate-300 hover:text-white">Features</button>
            <button onClick={() => scrollTo("pricing")} className="text-slate-300 hover:text-white">Pricing</button>
            <button onClick={() => scrollTo("contact")} className="text-slate-300 hover:text-white">Contact</button>
            <a href="#cta" className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500 text-black font-medium">Get Started</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center justify-center text-center pt-20 pb-24 px-6">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
          >
            <span className="gradient-text">AlgoNova</span>
            <br />
            <span className="text-slate-200">Smarter Transactions. Intelligent Insights.</span>
          </motion.h1>

          <motion.p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            A next-gen wallet combining fast payments, cross-chain swaps, and AI-driven spending insights —
            designed for power users and teams.
          </motion.p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <motion.button
              onClick={() => scrollTo("pricing")}
              whileHover={{ scale: 1.03 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-black font-semibold"
            >
              Get Started
            </motion.button>

            <motion.button
              onClick={() => scrollTo("demo")}
              whileHover={{ scale: 1.03 }}
              className="px-6 py-3 rounded-xl border border-slate-700 text-slate-200"
            >
              Watch Demo
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <SectionTitle>Features</SectionTitle>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-glass p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">Instant Transfers</h3>
            <p className="text-slate-300 mt-2">Send and receive globally with lightning speed and low fees.</p>
          </div>
          <div className="card-glass p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">AI Expense Insights</h3>
            <p className="text-slate-300 mt-2">Automatic categorization, budgets, and intelligent savings suggestions.</p>
          </div>
          <div className="card-glass p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">Cross-Chain Aggregation</h3>
            <p className="text-slate-300 mt-2">Hold and swap multiple assets seamlessly from one place.</p>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section id="analytics" className="py-20 px-6 bg-black/60">
        <SectionTitle>Analytics</SectionTitle>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="card-glass p-6 rounded-2xl">
            <div className="text-slate-400">Active Users</div>
            <div className="text-3xl font-bold mt-3">14,230</div>
          </div>
          <div className="card-glass p-6 rounded-2xl">
            <div className="text-slate-400">Volume (30d)</div>
            <div className="text-3xl font-bold mt-3">$3.9M</div>
          </div>
          <div className="card-glass p-6 rounded-2xl">
            <div className="text-slate-400">Retention</div>
            <div className="text-3xl font-bold mt-3">76%</div>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="py-20 px-6">
        <SectionTitle>Live Demo</SectionTitle>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="card-glass p-6 rounded-2xl">
            <p className="text-slate-300">Watch a quick walkthrough of AlgoNova: payments, swaps, and AI insights.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="AlgoNova Demo"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Draggable / Movable Tabs (interactive demo) */}
      <section id="interactive-demo" className="py-20 px-6 bg-black/50">
        <SectionTitle>Interactive Demo — Movable Tabs</SectionTitle>
        <div ref={tabsParent} className="max-w-6xl mx-auto h-72 relative border border-slate-800 rounded-2xl p-6 overflow-hidden bg-gradient-to-br from-transparent to-black/40">
          {/* Instructions */}
          <div className="absolute top-4 left-6 text-sm text-slate-400">Drag the panels around. Click items to open sections.</div>

          {/* Dashboard Tab */}
          <motion.div drag dragConstraints={tabsParent} dragMomentum className="card-glass w-72 p-4 rounded-2xl absolute left-6 top-12">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Dashboard</div>
              <div className="text-xs text-slate-400">Live</div>
            </div>
            <div className="mt-4 text-sm text-slate-300">
              Balance: <span className="font-bold">$12,482</span>
            </div>
            <div className="mt-4 flex gap-2">
              <button onClick={() => scrollTo("features")} className="text-xs px-3 py-1 rounded bg-indigo-600/80">Open Features</button>
              <button onClick={() => scrollTo("analytics")} className="text-xs px-3 py-1 rounded border border-slate-700">Open Analytics</button>
            </div>
          </motion.div>

          {/* Algorithms Tab */}
          <motion.div drag dragConstraints={tabsParent} dragMomentum className="card-glass w-64 p-4 rounded-2xl absolute right-6 top-8">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Algorithms</div>
              <div className="text-xs text-slate-400">Beta</div>
            </div>
            <ul className="mt-3 text-sm text-slate-300 space-y-2">
              <li>• Auto-budget v1</li>
              <li>• Smart-swap</li>
              <li>• Fraud-detect</li>
            </ul>
            <div className="mt-4">
              <button onClick={() => scrollTo("demo")} className="text-xs px-3 py-1 rounded bg-pink-500/80">View Demo</button>
            </div>
          </motion.div>

          {/* Settings Tab */}
          <motion.div drag dragConstraints={tabsParent} dragMomentum className="card-glass w-60 p-4 rounded-2xl absolute left-40 bottom-8">
            <div className="font-semibold">Settings</div>
            <div className="mt-2 text-sm text-slate-300">Security: <span className="font-semibold">2FA</span></div>
            <div className="mt-3">
              <button onClick={() => scrollTo("contact")} className="text-xs px-3 py-1 rounded border border-slate-700">Contact Sales</button>
            </div>
          </motion.div>

          {/* Wallet Tab */}
          <motion.div drag dragConstraints={tabsParent} dragMomentum className="card-glass w-56 p-4 rounded-2xl absolute right-40 bottom-6">
            <div className="font-semibold">Wallet</div>
            <div className="mt-2 text-sm text-slate-300">Assets: BTC, ETH, USDT</div>
            <div className="mt-3">
              <button onClick={() => scrollTo("pricing")} className="text-xs px-3 py-1 rounded bg-indigo-600/80">Upgrade</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <SectionTitle>Pricing</SectionTitle>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="card-glass p-6 rounded-2xl">
            <div className="text-xl font-semibold">Starter</div>
            <div className="mt-2 text-3xl font-bold">Free</div>
            <ul className="mt-4 text-slate-300 space-y-2">
              <li>• Basic wallet</li>
              <li>• Standard analytics</li>
            </ul>
            <div className="mt-6"><button className="px-4 py-2 rounded bg-indigo-600/80">Create Wallet</button></div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-pink-500 text-black shadow-lg">
            <div className="text-xl font-semibold">Pro</div>
            <div className="mt-2 text-3xl font-bold">$9.99/mo</div>
            <ul className="mt-4 space-y-2">
              <li>• Advanced insights</li>
              <li>• Faster transfers</li>
            </ul>
            <div className="mt-6"><button className="px-4 py-2 rounded bg-black text-white">Get Pro</button></div>
          </div>

          <div className="card-glass p-6 rounded-2xl">
            <div className="text-xl font-semibold">Enterprise</div>
            <div className="mt-2 text-3xl font-bold">Contact</div>
            <ul className="mt-4 text-slate-300 space-y-2">
              <li>• Custom integrations</li>
              <li>• Dedicated support</li>
            </ul>
            <div className="mt-6"><button className="px-4 py-2 rounded border border-slate-700">Contact</button></div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-black/60">
        <SectionTitle>Contact</SectionTitle>
        <div className="max-w-3xl mx-auto">
          <form action="https://formspree.io/f/yourformid" method="POST" className="grid gap-4">
            <input name="name" required placeholder="Name" className="p-3 rounded bg-gray-900 border border-slate-700" />
            <input name="email" type="email" required placeholder="Email" className="p-3 rounded bg-gray-900 border border-slate-700" />
            <textarea name="message" rows="5" required placeholder="Message" className="p-3 rounded bg-gray-900 border border-slate-700" />
            <div className="flex items-center gap-4">
              <button type="submit" className="px-5 py-3 rounded bg-gradient-to-r from-indigo-500 to-pink-500 text-black">Send Message</button>
              <div className="text-sm text-slate-400">Or email us at <a href="mailto:hello@algonova.app" className="text-indigo-400">hello@algonova.app</a></div>
            </div>
          </form>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-500 border-t border-slate-800">
        © {new Date().getFullYear()} AlgoNova — Smarter Transactions. Intelligent Insights.
      </footer>
    </div>
  );
}
