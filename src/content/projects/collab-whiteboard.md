---
title: "Real-Time Collab Whiteboard"
description: "An infinite canvas whiteboard enabling multiple users to brainstorm, draw, and diagram simultaneously."
tags: ["React", "TypeScript", "WebSocket", "Canvas"]
date: 2026-03-05
image: "/images/placeholder.svg"
github: "https://github.com/example/collab-whiteboard"
live: "https://collab-whiteboard-demo.vercel.app"
featured: true
---

A collaborative virtual whiteboard application designed for remote engineering and design teams. Users can join shared rooms to sketch diagrams, add sticky notes, and collaborate with real-time multi-cursor presence.

## Highlights
- 60 FPS hardware-accelerated canvas rendering with pan and infinite zoom
- Operational Transformation (OT) conflict resolution for concurrent edits
- Multi-user live cursor indicators and presence detection
- Export boards to SVG, PNG, or JSON formats
- Offline fallback with automatic synchronization upon reconnection

## Engineering Details
The frontend leverages the HTML5 Canvas API coupled with custom spatial index partitioning (R-Tree) to render thousands of shapes smoothly without frame drops. WebSockets powered by Node.js handle broadcasting delta changes across clients with sub-50ms latency.
