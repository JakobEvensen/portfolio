import React from "react";
import { contact } from "../data/portfolio";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#070816] px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_10%,rgba(103,232,249,0.15),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid overflow-hidden border border-white/10 bg-white/[0.05] shadow-2xl shadow-black/30 backdrop-blur-2xl lg:grid-cols-[1fr_0.8fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200">Hiring / collaboration</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {contact.headline}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {contact.pitch}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${contact.email}`} className="inline-flex items-center justify-center bg-cyan-300 px-6 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-white">
                Email me
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/15 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                LinkedIn profile
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 bg-[#0b1020]/80 p-8 sm:p-12 lg:border-l lg:border-t-0">
            {[
              ["Email", contact.email],
              ["Location", contact.location],
              ["Focus", contact.focus],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-white/10 py-6 first:pt-0 last:border-b-0">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{label}</p>
                <p className="mt-2 text-lg font-medium text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
