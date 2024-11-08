import { RobotScene } from '@/components/robot-scene';
import { Copy } from 'lucide-react';
import { Terminal } from '@/components/terminal/terminal';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="absolute inset-0 pointer-events-none">
          <RobotScene />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
          <h1 className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 tracking-tight">
            NEXUS PROTOCOL
          </h1>
          <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
            <span className="text-gray-400">Contract Address</span>
            <div className="flex items-center gap-2 text-violet-300 font-mono">
              [<span>AVuxTH2qytc22SHrRYjQbGrwXtU6vtz9TdfcufYapump</span>]
              <Copy className="w-4 h-4 cursor-pointer hover:text-violet-200 transition-colors" />
            </div>
          </div>
        </div>
      </div>
      <Terminal />
    </main>
  );
}