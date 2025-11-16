import React, { useState } from "react";
import {
  Cpu, Factory, ShoppingBag, Package, Handshake, ChevronRight,
  Truck, PackageCheck, Undo2, TrainFront, Plane, Gift, CalendarCheck, Users, Laptop,
  FolderUp, PanelsTopLeft, ThumbsUp, Gauge, ChevronDown
} from "lucide-react";
import ContactSection from "../components/sections/ContactSection";
import { Link } from "react-router-dom";

import workflowImg from "../components/assets/images/workflow.png"; // verify path

const BRAND = "#246bed";

export default function YourBusinesses() {
  const [active, setActive] = useState(0);

  const palettes = [
    { from: "#EEF4FF", to: "#F9FBFF", ring: "#2D5DD5" },
    { from: "#FFF4EF", to: "#FFFAF7", ring: "#EA580C" },
    { from: "#FFF9EB", to: "#FFFCF3", ring: "#C27803" },
    { from: "#EFFFF6", to: "#F8FFFB", ring: "#10B981" },
    { from: "#EEF4FF", to: "#F7FAFF", ring: "#2563EB" },
  ];

  const industries = [
    { icon: <Cpu className="w-4 h-4" />, title: "IT Industry", sub: "Smart sourcing • SLA-backed delivery",
      body: "ProDiligix helps IT companies simplify and centralize their indirect procurement—from IT hardware and peripherals to logistics, events, and employee onboarding kits. With smart sourcing, verified vendors, and SLA-backed delivery, we ensure cost efficiency, speed, and transparency, so IT teams can focus on innovation." },
    { icon: <Factory className="w-4 h-4" />, title: "Manufacturing", sub: "24–48h critical spares",
      body: "Get critical spare parts delivered within 24–48 hours anywhere in India to minimize downtime during breakdowns and maintenance. Our centralized platform streamlines logistics, gifting, and operational needs from a single dashboard—reducing delays and vendor chaos to keep production running smoothly." },
    { icon: <ShoppingBag className="w-4 h-4" />, title: "eCommerce", sub: "Faster dispatch • Live tracking",
      body: "Streamline logistics, packaging, gifting, and operations through one platform. With fast dispatches, real-time tracking, and SLA-backed deliveries, we cut costs, reduce vendor chaos, and keep your fulfillment smooth—so you can focus on sales and customer delight." },
    { icon: <Package className="w-4 h-4" />, title: "FMCG", sub: "Pan-India supply consistency",
      body: "Run faster and smarter with a centralized procurement platform that streamlines logistics, corporate gifting, and event management. Verified vendors, SLA-backed delivery, and real-time tracking ensure timely distribution, reduced downtime, and consistent supply across India—keeping operations smooth and customers happy." },
    { icon: <Handshake className="w-4 h-4" />, title: "Service Sectors", sub: "Centralized indirect procurement",
      body: "Centralize indirect procurement for logistics, gifting, events, and IT solutions. Manage multiple vendors, track operations in real time, and ensure SLA-backed performance—reducing costs, improving efficiency, and letting teams focus on exceptional service instead of coordination." },
  ];

  const expertise = [
    { title: "Shipping and\nreceiving",  bg: "#6D63F3", icon: <PackageCheck className="w-9 h-9 text-white" /> },
    { title: "FTL and PTL\nfreight shipping", bg: "#B36A53", icon: <Truck className="w-9 h-9 text-white" /> },
    { title: "Reverse\nlogistics",      bg: "#EB5F5E", icon: <Undo2 className="w-9 h-9 text-white" /> },
    { title: "Train & Air\nServices",     bg: "#0EA5E9", icon: (
        <div className="relative"><TrainFront className="w-8 h-8 text-white" /><Plane className="w-4 h-4 text-white absolute -right-2 -top-1 opacity-90" /></div>
      ) },
    { title: "Gifting",          bg: "#F59E0B", icon: <Gift className="w-9 h-9 text-white" /> },
    { title: "Event\nManagement", bg: "#10B981", icon: <CalendarCheck className="w-9 h-9 text-white" /> },
    { title: "Team Outing",      bg: "#6366F1", icon: <Users className="w-9 h-9 text-white" /> },
    { title: "IT Solutions",     bg: "#2563EB", icon: <Laptop className="w-9 h-9 text-white" /> },
  ];

  const howItWorks = [
    { title: "Send your requirement", color: "#EF4444", icon: <FolderUp className="w-6 h-6" /> },
    { title: "Get multiple quotations", color: "#F59E0B", icon: <PanelsTopLeft className="w-6 h-6" /> },
    { title: "Receive samples & share your approval / feedback", color: "#EAB308", icon: <ThumbsUp className="w-6 h-6" /> },
    { title: "Raise PO & start tracking orders on the dashboard", color: "#10B981", icon: <Gauge className="w-6 h-6" /> },
    { title: "Completed/Delivered", color: "#0EA5E9", icon: <Truck className="w-6 h-6" /> },
  ];

  const heroImg = "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/a35eb6b9-f638-4c19-b8d9-0d5c54558c5c.png";

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }
        .fade-in { animation: fadeUp .35s ease-out both; }

        /* card surface */
        .card-surface { background: #fff; border-radius: 14px; box-shadow: 0 12px 36px rgba(2,6,23,0.06); border: 1px solid rgba(15,23,42,0.04); }

        /* HOW IT WORKS layout - flex columns match height */
        .hiw-split { display:block; }
        .hiw-left { width:100%; }
        .hiw-left-inner { display:flex; flex-direction:column; gap:18px; }

        /* Title centered in the left card */
        .hiw-title-wrap { display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; margin: 6px 0 8px; }
        .hiw-title { font-weight:800; font-size:22px; line-height:1; }
        .hiw-sub { color: #64748b; font-size:14px; margin-bottom:8px; text-align:center; }

        /* step box */
        .hiw-step-row { display:flex; justify-content:center; }
        .hiw-step-box {
          display:flex;
          align-items:center;
          gap:14px;
          padding:12px 16px;
          background: #fff;
          border-radius:12px;
          box-shadow: 0 12px 30px rgba(2,6,23,0.06);
          border:1px solid rgba(15,23,42,0.03);
          width:100%;
          max-width:520px;
        }
        .hiw-step-square {
          width:56px; height:56px; min-width:56px;
          border-radius:10px;
          display:flex; align-items:center; justify-content:center;
          box-shadow:0 8px 18px rgba(2,6,23,0.05);
        }
        .hiw-step-text { font-weight:700; color:#0f172a; white-space:pre-line; font-size:15px; }

        /* centered down arrow between steps */
        .hiw-down { display:flex; justify-content:center; margin-top:8px; }
        .hiw-down svg { color: rgba(15,23,42,0.45); }

        /* right image container */
        .hiw-right { display:flex; align-items:stretch; justify-content:center; }
        .hiw-img-wrap { flex:1 1 0%; display:flex; align-items:center; justify-content:center; }
        .hiw-img-wrap img { height:100%; width:auto; max-height:520px; object-fit:contain; border-radius:12px; box-shadow:0 16px 40px rgba(2,6,23,0.06); }

        /* --- EQUAL HEIGHT FLEX FOR "HOW IT WORKS" --- */
        @media (min-width: 900px) {
          .hiw-split {
            display:flex; gap:28px; align-items:stretch; min-height:420px;
          }
          .hiw-left, .hiw-right {
            flex:1 1 0; display:flex; flex-direction:column; align-items:stretch; justify-content:stretch; min-height: 420px;
          }
          .hiw-left-inner, .hiw-img-wrap {
            flex:1 1 auto; display:flex; flex-direction:column; justify-content:center; height:100%;
          }
          .hiw-img-wrap img {
            max-height:100%;
            height:100%;
            min-height: 320px;
          }
        }

        /* mobile */
        @media (max-width: 899px) {
          .hiw-split { display:block; }
          .hiw-step-box { padding:10px 12px; border-radius:12px; max-width:100%; }
          .hiw-step-square { width:48px; height:48px; min-width:48px; }
          .hiw-step-text { font-size:14px; }
          .hiw-img-wrap { padding:12px; }
          .hiw-img-wrap img { width:100%; height:auto; max-height:360px; }
          .hiw-left { padding:18px 12px; }
        }
      `}</style>

      {/* ===== HERO (unchanged) ===== */}
      <section className="relative h-[420px] md:h-[520px] w-full overflow-visible">
        <img src={heroImg} alt="Business solutions cover" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 z-20 w-full max-w-3xl px-4">
          <div className="bg-white/95 backdrop-blur rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.25)] px-6 md:px-10 py-5 md:py-6 text-center fade-in">
            <h1 className="font-extrabold leading-tight text-[30px] md:text-[44px]">
              <span className="text-black">Your</span>{" "}
              <span style={{ color: BRAND }}>Businesses</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES (unchanged) ===== */}
      <div className="max-w-6xl mx-auto px-6 pt-24 md:pt-40 pb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-center mb-8">
          Industries <span style={{ color: BRAND }}>We Power</span>
        </h2>
        <div role="tablist" aria-label="Industries" className="mx-auto w-full bg-white rounded-xl shadow-md p-1 fade-in">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {industries.map((it, i) => {
              const isActive = active === i;
              return (
                <button
                  key={it.title}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={`w-full flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm transition
                    ${isActive ? "bg-[#2D5DD5] text-white shadow" : "text-slate-700 hover:bg-slate-100"}`}
                >
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full
                      ${isActive ? "bg-white/15" : "bg-slate-100 text-slate-600"}`}>
                    {it.icon}
                  </span>
                  <span className="font-medium truncate">{it.title}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-4 fade-in">
          {industries.map((it, i) => {
            const pal = palettes[i % palettes.length];
            const isActive = active === i;
            return (
              <section
                key={it.title}
                role="tabpanel"
                hidden={!isActive}
                className="rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                style={{ background: `linear-gradient(180deg, ${pal.from}, ${pal.to})` }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white ring-1"
                      style={{ borderColor: `${pal.ring}33` }}
                    >
                      <span style={{ color: pal.ring }}>{it.icon}</span>
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{it.title}</h3>
                      <p className="text-sm text-slate-600">{it.sub}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-slate-800 leading-7">{it.body}</p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 transition">
                    Get started <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* ===== OUR EXPERTISE (unchanged) ===== */}
      <section className="max-w-6xl mx-auto px-6 pt-6 md:pt-10 pb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-center mb-8">
          Our <span style={{ color: BRAND }}>Expertise</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12 place-items-center">
          {expertise.map((item, i) => (
            <div key={i} className="group flex flex-col items-center pop-in" style={{ animationDelay: `${i * 70}ms` }}>
              <div
                className="tile relative w-20 h-20 rounded-2xl shadow-[0_12px_28px_rgba(0,0,0,0.12)] flex items-center justify-center transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.15)]"
                style={{ backgroundColor: item.bg }}
                aria-hidden
              >
                <div className="shine absolute inset-0 rounded-2xl" />
                <div className="transition-transform duration-200 group-hover:scale-110">{item.icon}</div>
              </div>
              <p className="mt-4 text-lg font-semibold text-slate-900 leading-tight text-center whitespace-pre-line">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS (vertical left + image right - flexbox ensures equal heights) ===== */}
      <section className="max-w-6xl mx-auto px-6 pt-2 pb-20">
        <div className="hiw-split">
          {/* LEFT: card surface with centered title */}
          <div className="hiw-left card-surface">
            <div className="hiw-left-inner p-8">
              <div className="hiw-title-wrap">
                <div className="hiw-title">
                  <span style={{ color: "#000" }}>How</span>{" "}
                  <span style={{ color: BRAND }}>it works?</span>
                </div>
                <div className="hiw-sub">Simple steps to get your purchase delivered.</div>
              </div>
              {/* Steps */}
              {howItWorks.map((s, i) => (
                <div key={i} className="mb-2">
                  <div className="hiw-step-row">
                    <div className="hiw-step-box">
                      <div
                        className="hiw-step-square"
                        style={{ background: `radial-gradient(60px 60px at 50% 50%, ${s.color}22, transparent 60%)`, color: s.color }}
                        aria-hidden
                      >
                        {s.icon}
                      </div>
                      <div className="hiw-step-text">{s.title}</div>
                    </div>
                  </div>
                  {/* centered down arrow between steps (except last) */}
                  {i < howItWorks.length - 1 && (
                    <div className="hiw-down">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT: image container - flex makes it match left height */}
          <div className="hiw-right">
            <div className="hiw-img-wrap">
              <img src={workflowImg} alt="How it works flow" />
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
