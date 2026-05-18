"use client";

import React from "react";

export default function TerminalWatermark() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Scattered Terminal Logs & Commands */}
      <div 
        className="absolute top-[10%] left-[5%] font-mono text-[11px] text-purple-500/4 opacity-[0.05] blur-[0.5px] whitespace-pre"
      >
{`$ git log --oneline -n 5
* a8b21c4 feat: implement interactive terminal workspace
* 7d3f2e1 refactor: modularize header and badge rendering
* f4c29a0 style: introduce glassmorphic background blur
* 19d83e2 fix: responsive design container breakpoints`}
      </div>

      <div 
        className="absolute top-[25%] right-[8%] font-mono text-[10px] text-purple-500/4 opacity-[0.04] blur-[1px] whitespace-pre text-right"
      >
{`$ docker ps --format "table {{.Names}}\\t{{.Status}}"
NAMES                  STATUS
antigravity-api        Up 4 hours (healthy)
qdrant-vector-db       Up 4 hours
nextjs-portfolio-dev   Up 12 minutes`}
      </div>

      <div 
        className="absolute top-[48%] left-[2%] font-mono text-[11px] text-purple-500/4 opacity-[0.05] blur-[0.5px] whitespace-pre"
      >
{`$ npm run build
> portfolio@0.1.0 build
> next build

   ▲ Next.js 16.2.6
   - Env: production
   
✓ Generating static pages (5/5)
✓ Collecting page data
✓ Finalizing page optimization`}
      </div>

      <div 
        className="absolute top-[65%] right-[5%] font-mono text-[10px] text-purple-500/4 opacity-[0.04] blur-[0.8px] whitespace-pre text-right"
      >
{`$ kubectl get pods -n production
NAME                               READY   STATUS    RESTARTS
antigravity-engine-67f78c94-x2p1b  1/1     Running   0
redis-cache-cluster-0              1/1     Running   0
postgres-db-replica-7c5b6b8b-d7n1w 1/1     Running   0`}
      </div>

      <div 
        className="absolute bottom-[10%] left-[8%] font-mono text-[10px] text-purple-500/4 opacity-[0.05] blur-[1px] whitespace-pre"
      >
{`$ cat /sys/class/thermal/thermal_zone0/temp
42800 mC (Core Temp OK)
$ neofetch --stdout
OS: Antigravity Core OS x86_64
Kernel: 6.8.0-1012-aws
Shell: bash 5.2.21
Resolution: 2560x1440`}
      </div>

      <div 
        className="absolute bottom-[28%] right-[10%] font-mono text-[11px] text-purple-500/4 opacity-[0.04] blur-[0.5px] whitespace-pre text-right"
      >
{`$ ping -c 3 google.com
64 bytes from 142.251.42.78: icmp_seq=1 ttl=118 time=12.4 ms
64 bytes from 142.251.42.78: icmp_seq=2 ttl=118 time=14.1 ms
64 bytes from 142.251.42.78: icmp_seq=3 ttl=118 time=13.8 ms

--- google.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
rtt min/avg/max/mdev = 12.421/13.435/14.088/0.742 ms`}
      </div>
      
      {/* Extra glowy accent gradient overlay grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/5 via-[#0d0214]/0 to-[#0d0214]/0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/5 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
