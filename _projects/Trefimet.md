---
layout: page
title: Thermal Lance Automation
description: Automated heating system for industrial thermal lances to eliminate worker risk in mining operations.
img: assets/img/Trefimet/JL25.jpg
importance: 2
category: Work
related_publications: false
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Trefimet/JL25.jpg" title="Jinbenlai heating system" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/FcTnBogFadk" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Selected heating system from Jinbenlai. Right: Manual process endangering workers. Video demonstration <a href="https://youtu.be/FcTnBogFadk" target="_blank">here</a>.
</div>

---
### The Problem
---
Traditional manual heating of industrial thermal lances exposes workers to extreme temperatures and hazardous conditions during metal cutting operations in mining. Our team at **Wolke** was contracted by **Stout** to develop an automated induction-based heating system that removes human operators from danger while improving operational precision.

---
### My Role
---
As an **Electrical Engineering Intern** (November 2024), I led:

1. **Sensor System Development**  
   - Researched and prototyped non-contact infrared temperature sensors for 2-4m lances.  
   - Analyzed LiDAR and ultrasonic alternatives for high-power environments.  
   - Created Python scripts for thermal profile averaging to ensure precise heating.

2. **Induction Heater Selection**  
   - Evaluated 15+ industrial heaters (15kW-30kW range).  
   - Reduced costs by 40% via Chinese supplier selection (RS485/Modbus RTU compatibility).  
   - Reverse-engineered legacy analog systems during on-site visits to Stout facilities.

3. **System Architecture Design**  
   - Developed Miro schematics for international voltage compliance (380-480V AC).  
   - Created an IP67-rated Bill of Materials (BoM) for mining environments.  
   - Integrated Wolke's VigíaBox Neo RTU for IoT-enabled diagnostics and fault detection.

---
### Key Innovations
---
- **Safety First:** Eliminated operator exposure through full automation.  
- **Precision Control:** Achieved ±2°C accuracy at 800°C via multi-point IR thermal averaging.  
- **Cost Efficiency:** Reduced induction heating costs to $5,200 USD using Jinbenlai components.  
- **Scalability:** Designed modular architecture for future 30kW+ system upgrades.

---
### Tools & Technologies
---
- **Hardware:** Omega CN7500 PID controllers, VigíaBox Neo RTU, RS485 networks.  
- **Software:** Python (pandas for thermal analysis), MATLAB (induction field simulations).  
- **Standards:** IEC 60529 (IP67 compliance), ISO 13849 (functional safety).

---
### Short Description
---
This safety-critical project automated thermal lance heating for mining operations, eliminating worker exposure to extreme temperatures. I led sensor selection, induction system design, and IoT integration while achieving a 40% cost reduction. The resulting system features ±2°C control at 800°C using infrared thermal averaging and industrial-grade Modbus communication.
