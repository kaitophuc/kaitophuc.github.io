---
title: "Research"
permalink: /research/
lede: "My research focuses on applying CUDA/C++ and parallel computing techniques to improve the performance of computationally intensive workloads."
---

<ul class="research-list" aria-label="Research experiences">
  <li class="research-item">
    <span class="research-dot" aria-hidden="true"></span>
    <div>
      <h2>GPU-Accelerated SUSP Search</h2>
      <p class="research-time">Jan 2024–Feb 2026</p>
      <div class="research-materials" aria-label="SUSP materials by year">
        <p>
          I developed GPU-accelerated methods for searching Simplifiable Strong Uniquely Solvable Puzzles (SUSPs), combinatorial objects connected to upper bounds on the matrix multiplication exponent. The work evolved from an initial CUDA implementation into a batched, asynchronous CPU-GPU search pipeline.
        </p>
        <section class="research-year">
          <h3>2026</h3>
          <ul>
            <li>
              <a href="{{ '/research/SUSP/2026/Minh_Phuc_Nguyen_IEEE_HPEC_2026.pdf' | relative_url }}">GPU Pipeline for Accelerated Search of an Upper Bound on the Matrix Multiplication Exponent</a>
              <span>Unpublished manuscript, 2026.</span>
            </li>
            <li>
              <a href="{{ '/research/SUSP/2026/Minh_Phuc_Nguyen_sc26_acm_src_poster.pdf' | relative_url }}">Batched GPU Execution for High-Throughput Combinatorial Search</a>
              <span>Accepted to the SC26 ACM Student Research Competition on September 10, 2026.</span>
            </li>
          </ul>
        </section>

        <section class="research-year">
          <h3>2025</h3>
          <ul>
            <li>
              <a href="{{ '/research/SUSP/2025/main.pdf' | relative_url }}">Applying GPUs to SUSP Search</a>
              <span>Research paper on batched GPU acceleration for SUSP search.</span>
            </li>
          </ul>
        </section>

        <section class="research-year">
          <h3>2024</h3>
          <ul>
            <li>
              <a href="{{ "/research/SUSP/2024/Phuc%20Nguyen's%20Poster%20(2).pdf" | relative_url }}">Steinmetz poster</a>
              <span>Poster presentation for the early SUSP research work.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </li>
  <li class="research-item">
    <span class="research-dot" aria-hidden="true"></span>
    <div>
      <h2>Neural Receiver Design for MIMO-OFDM</h2>
      <p class="research-time">Mar 2026–Present</p>
      <div class="research-materials" aria-label="Neural receiver research materials">
        <p>
          I am developing an LS-assisted residual CNN receiver for a coded 2×2 MIMO-OFDM link that replaces conventional LMMSE equalization and APP demapping. So far, I have benchmarked the frozen model against the classical receiver across 45 3GPP TDL channel environments to study how BER and FER change with SNR, delay spread, and mobility.
        </p>
        <section class="research-year">
          <h3>2026</h3>
          <ul>
            <li>
              Full-Grid Neural Reception for Coded 2×2 MIMO-OFDM Across 3GPP TDL Channels
              <span>Unpublished manuscript, 2026.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </li>
  <li class="research-item">
    <span class="research-dot" aria-hidden="true"></span>
    <div>
      <h2>Approximate Nearest Neighbor Search</h2>
      <p class="research-time">Jan–Jun 2026</p>
      <div class="research-materials" aria-label="Approximate nearest neighbor search materials">
        <p>
          I built and evaluated a two-stage multi-GPU vector-search pipeline using NVIDIA RAPIDS cuVS and a custom CUDA candidate-reranking module. I benchmarked IVF-PQ and CAGRA on five million 1,536-dimensional embeddings to study the trade-off between throughput, latency, and Recall@10.
        </p>
        <section class="research-year">
          <h3>2026</h3>
          <ul>
            <li>
              <a href="{{ '/research/ANN/High-Throughput_ANN.pdf' | relative_url }}">High-Throughput Multi-GPU Approximate Nearest Neighbor Search with Direct Candidate Reranking</a>
              <span>Unpublished manuscript, 2026.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </li>
  <li class="research-item">
    <span class="research-dot" aria-hidden="true"></span>
    <div>
      <h2>VANFIST: Autonomous Vehicle Perception</h2>
      <p class="research-time">Jan–Jun 2025; Mar 2026–Present</p>
      <div class="research-materials" aria-label="VANFIST research overview">
        <p>
          I am developing the visual perception system for VANFIST, a student-built autonomous vehicle powered by an NVIDIA Jetson Orin Nano. My work focuses on semantic segmentation and object detection, with ongoing thesis research aimed at improving accuracy and real-time inference on edge hardware.
        </p>
        <section class="research-year">
          <h3>2026</h3>
          <ul>
            <li>
              <a href="{{ '/research/Selfdrivingcar/Minh_Phuc_Nguyen_VANFIST_report.pdf' | relative_url }}">Minh_<wbr>Phuc_<wbr>Nguyen_<wbr>VANFIST_<wbr>report.pdf</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </li>
</ul>
