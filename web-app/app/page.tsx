"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Sparkles,
  Zap,
  TrendingUp,
  BarChart3,
  Activity,
  Brain,
  Shield,
} from "lucide-react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { useEffect, useState, useMemo } from "react";

const radarData = [
  { metric: "Detection", Aarchid: 95, Industry: 72 },
  { metric: "Citations", Aarchid: 92, Industry: 60 },
  { metric: "Latency", Aarchid: 88, Industry: 65 },
  { metric: "Growth Tracking", Aarchid: 94, Industry: 58 },
  { metric: "Accuracy", Aarchid: 96, Industry: 75 },
];

const healthScoreData = [
  { week: "W0", score: 52 },
  { week: "W1", score: 58 },
  { week: "W2", score: 67 },
  { week: "W3", score: 74 },
  { week: "W4", score: 81 },
  { week: "W5", score: 86 },
  { week: "W6", score: 92 },
];

export default function LandingPage() {
  const radarConfig = useMemo(() => ({ outerRadius: 105 }), []);
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setGlow((g) => !g), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-green-50 text-gray-800">
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center pt-24 md:pt-32 px-4 sm:px-8 overflow-hidden">
        {/* Animated background visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#a7f3d0_0%,_transparent_70%)]"
        />
        <motion.div
          className={`absolute w-72 h-72 rounded-full blur-3xl bg-green-300/40 ${
            glow ? "opacity-60" : "opacity-20"
          }`}
          animate={{ scale: glow ? 1.3 : 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mb-3"
        >
          <Leaf className="h-8 w-8 text-green-600" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
            Aarchid
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mt-4"
        >
          Your Digital Botanist. Forensic plant diagnostics with AI vision, environmental intelligence, and expert citations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex gap-4 flex-wrap justify-center"
        >
          <a
            href="/auth/signup"
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-all"
          >
            Get Started Free
          </a>
          <a
            href="#features"
            className="px-8 py-3 border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold rounded-lg transition-all"
          >
            Learn More
          </a>
        </motion.div>

      </section>

      {/* FEATURES */}
      <section id="features" className="px-4 sm:px-8 md:px-16 mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center max-w-6xl mx-auto">
        {[
          {
            icon: <Brain className="h-6 w-6 mx-auto text-green-600" />,
            title: "Forensic Health Audit",
            desc: "AI vision identifies pests, diseases, and deficiencies. Environmental context + citations from peer-reviewed sources.",
          },
          {
            icon: <TrendingUp className="h-6 w-6 mx-auto text-green-600" />,
            title: "Growth Velocity Tracking",
            desc: "Pixel-based measurements track leaf expansion and stem growth. Species-specific benchmarking.",
          },
          {
            icon: <Shield className="h-6 w-6 mx-auto text-green-600" />,
            title: "Asset Management",
            desc: "Manage 50+ plants with batch actions. Generate health certificates, maintain care history archives.",
          },
          {
            icon: <Activity className="h-6 w-6 mx-auto text-green-600" />,
            title: "Real-Time Monitoring",
            desc: "Severity scoring (1-100). Environmental data correlation over 7 days.",
          },
          {
            icon: <Sparkles className="h-6 w-6 mx-auto text-green-600" />,
            title: "Smart Recommendations",
            desc: "Actionable care interventions backed by botanical expertise and research.",
          },
          {
            icon: <BarChart3 className="h-6 w-6 mx-auto text-green-600" />,
            title: "Performance Analytics",
            desc: "Visualize health trends, growth trajectories, and seasonal variations in one dashboard.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition-all"
          >
            {feature.icon}
            <h3 className="font-semibold text-gray-900 mt-3 text-lg">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* BENCHMARK SECTION */}
      <section className="px-4 sm:px-8 md:px-20 mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Radar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-green-100 bg-green-50 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Diagnostic Accuracy Benchmark
            </h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} outerRadius={radarConfig.outerRadius}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <Radar
                  name="Aarchid"
                  dataKey="Aarchid"
                  fill="#16a34a"
                  fillOpacity={0.35}
                  stroke="#16a34a"
                />
                <Radar
                  name="Industry Avg"
                  dataKey="Industry"
                  fill="#9ca3af"
                  fillOpacity={0.25}
                  stroke="#9ca3af"
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Health Score Improvement
            </h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={healthScoreData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#16a34a"
                  strokeWidth={2.5}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Average improvement trajectory over 6 weeks with Aarchid guidance
          </p>
        </motion.div>
      </section>

  

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-green-100 bg-white">
        <p>
          Built with 🌱 for pro-sumers and rare plant collectors.
        </p>
      </footer>
    </div>
  );
}