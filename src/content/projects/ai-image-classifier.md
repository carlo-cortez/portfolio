---
title: "AI Vision Classifier"
description: "A deep learning image classification web application with real-time inference and model performance metrics."
tags: ["Python", "PyTorch", "React", "API"]
date: 2026-04-18
github: "https://github.com/example/ai-vision-classifier"
live: "https://vision-classifier-demo.vercel.app"
featured: false
---

An end-to-end computer vision application that allows users to upload photos or use their webcam to classify objects in real time. The project combines a custom PyTorch model trained on Vision Transformers (ViT) with a sleek React frontend.

## Key Features
- Instant image classification with top-5 confidence predictions
- Drag-and-drop image upload and live camera stream support
- Interactive heatmap visualization explaining model attention
- Model benchmark dashboard comparing latency across model variants

## Tech Stack
- **Model**: PyTorch, TorchVision, Hugging Face Transformers
- **API**: FastAPI with ONNX Runtime for accelerated CPU/GPU inference
- **Frontend**: React, TypeScript, Chart.js, Tailwind CSS
- **Deployment**: Docker container on cloud compute instance
