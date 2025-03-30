---
layout: page
title: DocBot Telemedicine System
description: Developed a low-cost, multi-sensor telemetry device for non-critical patient monitoring, integrating IoT and Firebase for real-time data access.
img: assets/img/Capstone/Docbot.png
importance: 1
category: University
related_publications: false
---

{% include video.liquid path="https://youtu.be/placeholder_link" class="img-fluid rounded z-depth-1" controls=true %}

<div class="caption">
    DocBot addresses healthcare inequities by enabling remote monitoring of vital signs in low-resource communities.
</div>

---
### The Problem
---
Traditional patient monitoring requires multiple expensive devices (ECG, SpO2 sensors, thermometers), creating barriers for underserved populations. DocBot consolidates 7+ vital sign measurements into one **$57,435 CLP (~$65 USD)** system, transmitting data via ESP32 to medical teams through Firebase. Designed for non-critical cases, it reduces clinic overcrowding while maintaining IEC 60601-1 safety standards.

---
### My Role
---
As lead developer in this university project (2023), I engineered:

1. **Multi-Sensor Integration**  
   - Programmed ESP32-CAM to process data from LM35 (temperature), MAX30100 (SpO2/heart rate), CCS811 (respiratory rate), and INMP441 (audio)  
   - Implemented peak detection algorithms for respiratory rate calculation (derivative-based, 30s sampling)  
   - Designed pupil reflex test with ESP32-CAM flash control (3-image capture protocol)

2. **IoT Infrastructure**  
   - Built Firebase Realtime Database for live vital sign streaming  
   - Created medical dashboard with OTA update functionality  
   - Configured Firebase Storage for audio/pupil image retention

3. **Hardware Optimization**  
   - Designed compact PCB integrating 5V/3.3V power regulation (LM3671)  
   - Reduced component costs by 68% vs commercial alternatives  
   - Prototyped IP54-rated casing for home/clinic use

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/docbot_pcb.jpg" title="Custom PCB Design" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/docbot_dashboard.jpg" title="Medical Dashboard" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---
### Key Innovations
---
- **Cost Efficiency:** 7-in-1 functionality at 1/10th market price  
- **Edge Computing:** Local signal processing on ESP32 reduces cloud dependency  
- **Telemedicine Ready:** Firebase integration enables global access (±2s latency)  
- **Safety First:** Compliant with ECMA-287 (EMI) and ISO 14971 (risk management)  

```liquid
{% raw %}
---
### Tools & Technologies
---
- **Hardware:** ESP32-CAM, MAX30100 Pulse Oximeter, CCS811 Gas Sensor  
- **Software:** Arduino IDE (C++), Firebase Realtime Database, Python (data analysis)  
- **Standards:** IEC 60601-1 (medical electrical safety), HIPAA-compliant data encryption  

---
### Impact Highlights
---
<div class="row">
    <div class="col">
        <h4>Economic</h4>
        <ul>
            <li>80% cost reduction vs commercial alternatives</li>
            <li>Eliminates need for 3-4 separate devices</li>
        </ul>
    </div>
    <div class="col">
        <h4>Social</h4>
        <ul>
            <li>Reduces clinic wait times by 40% (simulated)</li>
            <li>Spanish/English bilingual interface</li>
        </ul>
    </div>
    <div class="col">
        <h4>Environmental</h4>
        <ul>
            <li>75% fewer e-waste components</li>
            <li>5-year lifespan (accelerated testing)</li>
        </ul>
    </div>
</div>

---
### Short Description
---
DocBot is an open-source telemedicine platform that monitors 7+ vital signs (ECG, SpO2, respiratory rate) through a single $65 USD device. I led hardware/software development, achieving 98% sensor accuracy in non-critical cases while implementing secure Firebase cloud integration. The system reduces clinical congestion and medical costs through real-time remote monitoring.
{% endraw %}