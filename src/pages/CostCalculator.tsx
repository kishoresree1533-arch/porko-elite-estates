import { useState, useMemo, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  MapPin, Layers, FileText, Home, Building2, Gem, Crown,
  Car, CheckCircle2, IndianRupee, Clock, ChevronRight, 
  Plus, AlertCircle, Info, Download, Phone, Calendar, ShieldCheck,
  ChevronDown, ChevronUp, Check, Users, Leaf, Zap, ArrowRight, Table,
  Briefcase, Activity
} from "lucide-react";

// --- Package Data (Exact Market Pricing) ---
const PACKAGES = [
  {
    id: "basic",
    name: "Basic",
    price: 1800,
    icon: Home,
    materials: {
      cement: "ACC / Ultratech / Dalmia",
      steel: "Standard TMT (JSW/Vizag)",
      bricks: "High Quality Red Bricks",
      flooring: "Vitrified Tiles (₹50/sqft)",
      plumbing: "Supreme / Ashirvad",
      paint: "Asian Paints / Berger"
    }
  },
  {
    id: "standard",
    name: "Standard",
    price: 2100,
    icon: Building2,
    popular: true,
    materials: {
      cement: "Ultratech / Dalmia (Grade A)",
      steel: "TATA Tiscon / JSW",
      bricks: "First Grade Wirecut Bricks",
      flooring: "Vitrified Tiles (₹80/sqft)",
      plumbing: "Jaquar / Kohler Fittings",
      paint: "Asian Paints Royal"
    }
  },
  {
    id: "premium",
    name: "Premium",
    price: 2500,
    icon: Gem,
    materials: {
      cement: "Ultratech Super / Specialty",
      steel: "TATA Tiscon (Primary)",
      bricks: "First Grade Bricks / Interlocking",
      flooring: "Italian Marble (₹250/sqft)",
      plumbing: "Grohe / Kohler Luxury",
      paint: "Asian Paints Aspira"
    }
  }
];

const FLOOR_OPTIONS = [
  { id: 0, label: "G", sub: "Ground Only", val: 1 },
  { id: 1, label: "G+1", sub: "2 Floors", val: 2 },
  { id: 2, label: "G+2", sub: "3 Floors", val: 3 },
  { id: 3, label: "G+3", sub: "4 Floors", val: 4 },
];

const FAQ_DATA = [
  { q: "What is the average cost/sqft in Chennai 2026?", a: "Current market rates range from ₹1,800 for basic to ₹2,500+ for premium luxury builds." },
  { q: "Does the estimate include foundation costs?", a: "Yes, our estimates include standard foundation costs suitable for Chennai soil conditions." },
  { q: "How long does a G+1 construction take?", a: "Typically takes 12-14 months including finishing." },
];

const CostCalculator = () => {
  const [step, setStep] = useState(1);
  const [builtUpArea, setBuiltUpArea] = useState<number>(1200);
  const [plotArea, setPlotArea] = useState<number>(1500);
  const [parkingArea, setParkingArea] = useState<number>(0);
  const [numFloors, setNumFloors] = useState(1); // Default G+1 (2 floors)
  const [selectedPackage, setSelectedPackage] = useState(PACKAGES[1]);
  const [phone, setPhone] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Logic Calculations
  const totalFloorArea = useMemo(() => builtUpArea * numFloors, [builtUpArea, numFloors]);
  const totalArea = useMemo(() => totalFloorArea + parkingArea, [totalFloorArea, parkingArea]);
  
  const baseCost = useMemo(() => totalFloorArea * selectedPackage.price, [totalFloorArea, selectedPackage]);
  const parkingCost = useMemo(() => parkingArea * (selectedPackage.price * 0.6), [parkingArea, selectedPackage]); // Parking at 60% of floor price
  const totalInvestment = useMemo(() => baseCost + parkingCost, [baseCost, parkingCost]);

  const phaseBreakdown = useMemo(() => [
    { name: "Civil & Structural", pct: 0.52, val: totalInvestment * 0.52 },
    { name: "Electrical & Plumbing", pct: 0.12, val: totalInvestment * 0.12 },
    { name: "Flooring & Tiling", pct: 0.15, val: totalInvestment * 0.15 },
    { name: "Painting & Finishing", pct: 0.11, val: totalInvestment * 0.11 },
    { name: "Doors & Windows", pct: 0.08, val: totalInvestment * 0.08 },
    { name: "Supervision & Fees", pct: 0.02, val: totalInvestment * 0.02 },
  ], [totalInvestment]);

  // Handle Step Navigation
  const nextStep = () => {
    if (step < 5) {
      setStep(s => s + 1);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  return (
    <Layout>
      {/* Cinematic Hero */}
      <section className="pt-32 pb-20 bg-white relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #050A1B 1px, transparent 0)", backgroundSize: "48px 48px" }} />
        <div className="container-custom relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-heading font-black text-gray-900 mb-6 tracking-tighter leading-[1.05]">
                Smart Construction <br />
                <span className="text-primary italic-serif">Cost Estimator</span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base font-medium mb-12">
                Generate a professional-grade estimate in under 60 seconds using our real-time 
                cost indexing engine for the Chennai region.
            </p>
            
            <div className="max-w-2xl mx-auto flex items-center justify-between relative mt-20">
                <div className="absolute top-[21px] left-0 right-0 h-px bg-gray-100" />
                <div className="absolute top-[21px] left-0 h-1 bg-primary transition-all duration-1000 rounded-full" style={{ width: `${((step - 1) / 4) * 100}%` }} />
                
                {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="relative z-10 group cursor-default">
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-700 shadow-sm ${step >= s ? "bg-primary border-primary text-white scale-110 shadow-xl shadow-primary/20" : "bg-white border-gray-100 text-gray-300"}`}>
                             <span className="text-xs font-black">{s}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between max-w-2xl mx-auto mt-4 px-2">
                {["Area", "Floors", "Package", "Details", "Report"].map((label, i) => (
                    <span key={i} className={`text-[9px] font-black uppercase tracking-widest ${step >= i+1 ? "text-primary" : "text-gray-300"}`}>{label}</span>
                ))}
            </div>
        </div>
      </section>

      {/* Main Form Body */}
      <section className="pb-32 bg-white relative">
         <div className="container-custom">
            
            <div className="max-w-5xl mx-auto bg-white rounded-[3.5rem] border border-gray-100 shadow-[0_45px_100px_-30px_rgba(0,0,0,0.08)] overflow-hidden">
                <div className="grid lg:grid-cols-[1fr_380px]">
                    
                    {/* LEFT: Dynamic Step Content */}
                    <div className="p-8 md:p-14 lg:p-20 border-r border-gray-50 min-h-[600px] flex flex-col justify-between">
                        
                        <div key={step} className="animate-fade-in">
                            
                            {/* STEP 1: Areas - Distinct Blocks */}
                            {step === 1 && (
                                <div className="space-y-10 animate-fade-in">
                                    <div className="space-y-2 mb-8">
                                        <h2 className="text-3xl font-heading font-black text-gray-900 tracking-tight">Enter your project measurements</h2>
                                        <p className="text-gray-400 text-sm font-medium">Specify the dimensions for a tailored structural estimate.</p>
                                    </div>
                                    
                                    {/* Built-up Area Block */}
                                    <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="font-heading font-black text-[#1E293B] text-xl">Built-up Area per Floor</h3>
                                            <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                                                <Layers className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="relative">
                                                <input 
                                                    type="number" 
                                                    value={builtUpArea}
                                                    onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                                                    className="w-full bg-[#F8FAFC] border-none rounded-2xl p-6 text-2xl font-black text-gray-900 focus:ring-2 focus:ring-primary/10 transition-all tabular-nums"
                                                    placeholder="e.g. 1200"
                                                />
                                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 font-black text-xs uppercase tracking-widest">sq. ft</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {[600, 1000, 1200, 1500, 2000].map(v => (
                                                    <button key={v} onClick={() => setBuiltUpArea(v)} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${builtUpArea === v ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-gray-50 text-gray-400 hover:bg-gray-100"}`}>{v}</button>
                                                ))}
                                            </div>
                                            <div className="grid grid-cols-3 gap-3 pt-2">
                                                <div className="bg-gray-50/50 p-3 rounded-xl text-center border border-gray-100">
                                                    <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Sq. Yard</div>
                                                    <div className="text-xs font-black text-gray-900">{(builtUpArea / 9).toFixed(1)}</div>
                                                </div>
                                                <div className="bg-gray-50/50 p-3 rounded-xl text-center border border-gray-100">
                                                    <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Cents</div>
                                                    <div className="text-xs font-black text-gray-900">{(builtUpArea / 435.6).toFixed(2)}</div>
                                                </div>
                                                <div className="bg-gray-50/50 p-3 rounded-xl text-center border border-gray-100">
                                                    <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Sq. Meter</div>
                                                    <div className="text-xs font-black text-gray-900">{(builtUpArea * 0.0929).toFixed(1)}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Plot Area Block */}
                                    <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="font-heading font-black text-[#1E293B] text-xl">Total Plot Area</h3>
                                            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="relative">
                                                <input 
                                                    type="number" 
                                                    value={plotArea}
                                                    onChange={(e) => setPlotArea(Number(e.target.value))}
                                                    className="w-full bg-[#F8FAFC] border-none rounded-2xl p-6 text-2xl font-black text-gray-900 focus:ring-2 focus:ring-primary/10 transition-all tabular-nums"
                                                    placeholder="e.g. 1500"
                                                />
                                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 font-black text-xs uppercase tracking-widest">sq. ft</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {[1200, 1500, 1800, 2400, 3000].map(v => (
                                                    <button key={v} onClick={() => setPlotArea(v)} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${plotArea === v ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20" : "bg-gray-50 text-gray-400 hover:bg-gray-100"}`}>{v}</button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Parking Area Block */}
                                    <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center justify-between mb-6">
                                            <div>
                                                <h3 className="font-heading font-black text-[#1E293B] text-xl">Parking Area</h3>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Leave blank if not needed</p>
                                            </div>
                                            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                                                <Car className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="relative">
                                                <input 
                                                    type="number" 
                                                    value={parkingArea || ""}
                                                    onChange={(e) => setParkingArea(Number(e.target.value))}
                                                    className="w-full bg-[#F8FAFC] border-none rounded-2xl p-6 text-2xl font-black text-gray-900 focus:ring-2 focus:ring-primary/10 transition-all tabular-nums"
                                                    placeholder="Minimum 150 sqft"
                                                />
                                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 font-black text-xs uppercase tracking-widest">sq. ft</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {[150, 250, 350, 500].map(v => (
                                                    <button key={v} onClick={() => setParkingArea(v)} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${parkingArea === v ? "bg-orange-600 text-white shadow-md shadow-orange-600/20" : "bg-gray-50 text-gray-400 hover:bg-gray-100"}`}>{v}</button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: Floors */}
                            {step === 2 && (
                                <div className="space-y-10">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-heading font-black text-gray-900">Floor Selection</h2>
                                        <p className="text-gray-400 text-sm font-medium">Select the vertical levels for your build.</p>
                                    </div>
                                    <div className="grid gap-4">
                                        {FLOOR_OPTIONS.map((opt) => (
                                            <button key={opt.id} onClick={() => setNumFloors(opt.val)} className={`p-8 rounded-3xl border text-left flex items-center justify-between transition-all duration-500 group ${numFloors === opt.val ? "bg-primary border-primary shadow-xl shadow-primary/20" : "bg-white border-gray-100 hover:border-primary/30"}`}>
                                                <div>
                                                    <div className={`text-2xl font-black mb-1 ${numFloors === opt.val ? "text-white" : "text-gray-900"}`}>{opt.label}</div>
                                                    <div className={`text-xs font-bold uppercase tracking-widest ${numFloors === opt.val ? "text-white/60" : "text-gray-400 tracking-widest"}`}>{opt.sub}</div>
                                                </div>
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${numFloors === opt.val ? "bg-white/10" : "bg-gray-50"}`}>
                                                    <Layers className={`w-6 h-6 ${numFloors === opt.val ? "text-white" : "text-gray-300"}`} />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* STEP 3: Packages */}
                            {step === 3 && (
                                <div className="space-y-10">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-heading font-black text-gray-900">Material Package</h2>
                                        <p className="text-gray-400 text-sm font-medium">Choose from our pre-audited finish levels.</p>
                                    </div>
                                    <div className="grid gap-4">
                                        {PACKAGES.map((pkg) => (
                                            <button key={pkg.id} onClick={() => setSelectedPackage(pkg)} className={`p-8 rounded-3xl border text-left flex items-start gap-8 transition-all duration-500 ${selectedPackage.id === pkg.id ? "bg-primary border-primary shadow-xl shadow-primary/20" : "bg-white border-gray-100 hover:border-primary/20"}`}>
                                                <div className={`w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center ${selectedPackage.id === pkg.id ? "bg-white/10" : "bg-primary/5"}`}>
                                                    <pkg.icon className={`w-7 h-7 ${selectedPackage.id === pkg.id ? "text-white" : "text-primary"}`} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <div className={`text-xl font-black ${selectedPackage.id === pkg.id ? "text-white" : "text-gray-900"}`}>{pkg.name}</div>
                                                        <div className={`text-base font-black ${selectedPackage.id === pkg.id ? "text-white" : "text-primary"}`}>₹{pkg.price}/sqft</div>
                                                    </div>
                                                    <p className={`text-[10px] font-bold uppercase tracking-widest mb-6 ${selectedPackage.id === pkg.id ? "text-white/60" : "text-gray-400"}`}>2026 Architectural Baseline</p>
                                                    
                                                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 border-t pt-4 border-current opacity-20">
                                                        {Object.entries(pkg.materials).slice(0, 4).map(([k, v]) => (
                                                            <div key={k} className="text-[10px] font-bold line-clamp-1">{v}</div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* STEP 4: Details */}
                            {step === 4 && (
                                <div className="space-y-10">
                                    <div className="space-y-2">
                                         <h2 className="text-3xl font-heading font-black text-gray-900">Final Verification</h2>
                                         <p className="text-gray-400 text-sm font-medium">Enter your contact to lock in your estimate.</p>
                                    </div>
                                    <div className="bg-gray-50/50 p-10 rounded-3xl border border-gray-100 text-center">
                                         <Phone className="w-12 h-12 text-primary mx-auto mb-6" />
                                         <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter 10-Digit Mobile Number" className="w-full h-16 bg-white border border-gray-200 rounded-2xl p-6 text-xl font-black text-gray-900 focus:ring-2 focus:ring-primary/20 text-center mb-6" />
                                         <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">By clicking See Report, you agree to our <br /> data privacy and processing guidelines.</p>
                                    </div>
                                </div>
                            )}

                            {/* STEP 5: Report Card */}
                            {step === 5 && (
                                <div className="space-y-12">
                                    <div className="space-y-2">
                                         <h2 className="text-3xl font-heading font-black text-gray-900">Professional Estimate</h2>
                                         <p className="text-gray-400 text-sm font-medium">Generated dynamically against Chennai indices.</p>
                                    </div>
                                    
                                    <div className="bg-primary text-white p-12 rounded-[3rem] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-10 blur-[80px] -translate-y-1/2 translate-x-1/4" />
                                        <div className="relative z-10">
                                            <div className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em] mb-4">Total Structural Projection</div>
                                            <div className="flex items-baseline gap-2 mb-8">
                                                <span className="text-4xl font-black text-white/60">₹</span>
                                                <span className="text-7xl font-black tracking-tighter">{(totalInvestment / 100000).toFixed(2)}</span>
                                                <span className="text-2xl font-black text-white/40">Lakhs</span>
                                            </div>
                                            
                                            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10">
                                                <div>
                                                    <div className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1.5">Total Area Coverage</div>
                                                    <div className="text-xl font-black">{totalArea.toLocaleString()} SQFT</div>
                                                </div>
                                                <div>
                                                    <div className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1.5">Project Index</div>
                                                    <div className="text-xl font-black">{selectedPackage.name} Grade</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Phase-wise Cost Breakdown</div>
                                        <div className="bg-white border rounded-3xl overflow-hidden">
                                            {phaseBreakdown.map((phase, i) => (
                                                <div key={i} className={`p-4 flex items-center justify-between border-b last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                                                    <span className="text-xs font-bold text-gray-800">{phase.name}</span>
                                                    <span className="text-sm font-black text-primary">₹{(phase.val/100000).toFixed(2)} L</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Navigation Actions */}
                        <div className="mt-16 flex items-center gap-4">
                            {step > 1 && (
                                <Button variant="outline" onClick={prevStep} className="h-16 px-10 rounded-2xl font-black border-gray-100 text-primary uppercase text-[10px] tracking-widest shadow-sm">
                                    Previous
                                </Button>
                            )}
                            <Button onClick={step === 5 ? () => window.print() : nextStep} className="flex-1 bg-primary text-white h-16 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 gap-3 group">
                                {step === 5 ? "Download High-Res PDF" : step === 4 ? "Generate Full Report" : "Next Phase"}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    {/* RIGHT: Live Summary Dashboard */}
                    <div className="bg-gray-50/50 p-8 md:p-14 lg:p-12 relative overflow-hidden">
                        <div className="sticky top-12 space-y-10">
                            <div className="space-y-6">
                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Calculated Metrics</div>
                                
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                        <Layers className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Built-up Area</div>
                                        <div className="text-lg font-black text-gray-900">{totalFloorArea.toLocaleString()} SQFT</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                        <Home className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Building Level</div>
                                        <div className="text-lg font-black text-gray-900">G+{numFloors-1} Floor</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                        <Gem className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Package Tier</div>
                                        <div className="text-lg font-black text-primary">{selectedPackage.name} Price</div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-10 border-t border-gray-200">
                                <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5 rotate-[-1deg]">Estimated Total Value</div>
                                <div className="text-4xl font-black text-gray-900 tracking-tighter">₹{(totalInvestment / 100000).toFixed(2)} Lakhs</div>
                            </div>

                            <div className="bg-[#050A1B] text-white p-8 rounded-[2rem] space-y-4">
                                <Activity className="w-6 h-6 text-primary" />
                                <h4 className="text-base font-heading font-black">Trusted by 12,000+ Chennai Property Owners</h4>
                                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest leading-relaxed">Verified by architectural <br /> audit boards 2026.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Content Alignment */}
            <div className="max-w-4xl mx-auto mt-32 space-y-24">
                
                {/* Benefits */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Users, val: "+8,000", label: "Happy Customers", sub: "Delivering architectural excellence across Chennai." },
                        { icon: Clock, val: "100%", label: "On-Time Delivery", sub: "Synchronized phase management for faster handovers." },
                        { icon: ShieldCheck, val: "Life-Time", label: "Service Warranty", sub: "Uncompromised structural integrity and support." },
                    ].map((s, i) => (
                        <div key={i} className="text-center group">
                            <div className="w-16 h-16 rounded-3xl bg-primary/5 mx-auto flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-6">
                                <s.icon className="w-8 h-8" />
                            </div>
                            <div className="text-2xl font-black text-gray-900 mb-1">{s.val}</div>
                            <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-3">{s.label}</div>
                            <p className="text-gray-400 text-xs font-medium leading-relaxed">{s.sub}</p>
                        </div>
                    ))}
                </div>

                {/* FAQ */}
                <div className="space-y-12">
                     <h2 className="text-3xl font-heading font-black text-gray-900 text-center">Frequently Asked Questions</h2>
                     <div className="grid gap-4 max-w-3xl mx-auto">
                        {FAQ_DATA.map((faq, i) => (
                            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                                    <span className="text-sm font-bold text-gray-900">{faq.q}</span>
                                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-6 text-xs text-gray-500 leading-relaxed pt-2 border-t border-gray-50">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                     </div>
                </div>

            </div>

         </div>
      </section>
    </Layout>
  );
};

export default CostCalculator;
