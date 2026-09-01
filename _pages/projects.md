---
title: "Projects"
permalink: /projects/
lede: "Selected work in GPU computing, high-performance systems, machine learning, and real-time edge AI."
---

<div class="project-sections">
  <section class="project-section" aria-labelledby="gpu-projects-title">
    <header class="section-heading">
      <h2 id="gpu-projects-title">GPU/CUDA/HPC Systems</h2>
    </header>

    <div class="project-grid">
      <article class="project-card">
        <h3>GPU-Accelerated SUSP Search</h3>
        <dl class="project-meta">
          <div>
            <dt>Status</dt>
            <dd><span class="status-badge">Research Assistant, Union College Computer Lab</span></dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>C++, CUDA, OpenMP, pinned host memory, multi-GPU scheduling, Nsight Systems</dd>
          </div>
          <div>
            <dt>Code</dt>
            <dd><a class="project-repository-link" href="https://github.com/kaitophuc/matrix-multiplication-search">View repository on GitHub</a></dd>
          </div>
        </dl>
        <ul class="project-achievements">
          <li>Accelerated searches for SUSP tensors—algebraic structures that support faster matrix multiplication—with a packed, batched CUDA pipeline and asynchronous data transfers.</li>
          <li>Ran large-scale searches across two NVIDIA GeForce RTX 5070 Ti GPUs using device-aware scheduling, achieving up to 5.75× higher end-to-end throughput with one GPU and 11.58× with two GPUs compared with the original search implementation.</li>
          <li>Used Nsight Systems to profile the CPU–GPU pipeline, identify bottlenecks, and improve device utilization.</li>
        </ul>
      </article>

      <article class="project-card">
        <h3>GPU-Accelerated OFDM-IM Simulation</h3>
        <dl class="project-meta">
          <div>
            <dt>Status</dt>
            <dd><span class="status-badge">GPU and Communications Research Project</span></dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>CUDA C++, CUB, cuRAND, Nsight Systems, Python</dd>
          </div>
          <div>
            <dt>Code</dt>
            <dd><a class="project-repository-link" href="https://github.com/kaitophuc/ECE-WorkStudy">View repository on GitHub</a></dd>
          </div>
        </dl>
        <ul class="project-achievements">
          <li>Built CPU and persistent-kernel CUDA simulators for orthogonal frequency-division multiplexing with index modulation (OFDM-IM).</li>
          <li>Used CUB reductions and cuRAND generation to keep Monte Carlo trials on the GPU and reduce kernel-launch and data-transfer overhead.</li>
          <li>Added reproducible BER, runtime, GFLOPS, and resource-usage tooling; the repository-recorded largest-workload benchmark achieved a 474.5× median speedup (19.68 s CPU versus 41.47 ms GPU at <em>L</em> = 102,400,000).</li>
        </ul>
      </article>

      <article class="project-card">
        <h3>CUDA-Based Real-Time Video Stream Filtering</h3>
        <dl class="project-meta">
          <div>
            <dt>Status</dt>
            <dd><span class="status-badge">Personal Project</span></dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>CUDA, CUB, Thrust, CUDA Streams, OpenCV, shared memory, pinned host memory</dd>
          </div>
          <div>
            <dt>Code</dt>
            <dd><a class="project-repository-link" href="https://github.com/kaitophuc/CUDA-based-Real-Time-Video-Stream-Filtering">View repository on GitHub</a></dd>
          </div>
        </dl>
        <ul class="project-achievements">
          <li>Built a modular benchmark for five CUDA face-blurring implementations: naive, multi-stream, CUB, custom Brent–Kung prefix sum, and Thrust.</li>
          <li>Combined OpenCV DNN face detection with CUDA kernels, asynchronous memory transfers, shared-memory tiling, and pinned host buffers for 1080p video.</li>
          <li>Repository benchmarks report CUB at 52% higher average FPS than the naive implementation, while the custom Brent–Kung scan remained competitive with CUB.</li>
        </ul>
      </article>
    </div>
  </section>

  <section class="project-section" aria-labelledby="ml-projects-title">
    <header class="section-heading">
      <h2 id="ml-projects-title">AI/ML Systems</h2>
    </header>

    <div class="project-grid">
      <article class="project-card">
        <h3>ktorch: CUDA Tensor Runtime</h3>
        <dl class="project-meta">
          <div>
            <dt>Status</dt>
            <dd><span class="status-badge">In-Progress Private Project</span></dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>C++, CUDA, cuBLASLt, pybind11, CMake, GoogleTest, Google Benchmark</dd>
          </div>
          <div>
            <dt>Code</dt>
            <dd><span class="project-repository-private">Private repository</span></dd>
          </div>
        </dl>
        <ul class="project-achievements">
          <li>Built a CUDA-first C++ tensor runtime and exposed it as a Python package through pybind11 bindings.</li>
          <li>Implemented F32 linear, layer-normalization, ReLU, softmax, and in-place SGD update operations alongside tensor views, cloning, and host–device copy helpers.</li>
          <li>Added C++ and Python correctness tests, native performance benchmarks, and manual MLP and FashionMNIST smoke-training workflows.</li>
        </ul>
      </article>

    </div>
  </section>

  <section class="project-section" aria-labelledby="edge-projects-title">
    <header class="section-heading">
      <h2 id="edge-projects-title">Embedded Vision and Edge AI</h2>
    </header>

    <div class="project-grid">
      <article class="project-card">
        <h3>VANFIST Autonomous Driving Perception</h3>
        <dl class="project-meta">
          <div>
            <dt>Status</dt>
            <dd><span class="status-badge">Embedded Vision Project</span></dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>SegFormer, PyTorch, TensorRT, CUDA, GStreamer, Jetson Orin Nano</dd>
          </div>
          <div>
            <dt>Code</dt>
            <dd><a class="project-repository-link" href="https://github.com/kaitophuc/semantic_segmentation">View repository on GitHub</a></dd>
          </div>
        </dl>
        <ul class="project-achievements">
          <li>Fine-tuned a SegFormer model for binary drivable-area segmentation and exported it through ONNX for TensorRT deployment on a Jetson Orin Nano.</li>
          <li>Engineered a persistent TensorRT execution context with reusable CUDA buffers and fused kernels, plus an NVDEC/VIC video path for hardware decode and color conversion.</li>
          <li>Processed the complete 3,749-frame 1080p evaluation video in 88.84 seconds—42.20 FPS end to end, including decode, preprocessing, inference, overlay, and encoding.</li>
        </ul>
      </article>
    </div>
  </section>
</div>
