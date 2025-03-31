---
layout: page
title: Trefimet Induction Lance Heater
description: Designed a safe, automated induction heating system for industrial lances, replacing hazardous manual processes in mining operations.
img: assets/img/Trefimet/JL25.jpg
importance: 2
category: Work
related_publications: true
---
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Trefimet/JL25.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/FcTnBogFadk" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The manual heating process endangers workers on the right. This project automates thermal lance heating to eliminate human risk. Video in the link: https://youtu.be/FcTnBogFadk. On the left, selected system for the heating system form jinbenlai.
</div>

---
### The Problem
---
Industrial thermal lances ("lanzas térmicas" in Spanish) require precise heating to cut metal in mining operations. Traditional methods expose workers to extreme temperatures and hazardous conditions. At Wolke, we partnered with **Stout** to develop an induction-based heating system that removes human operators from danger while improving precision and efficiency.

---
### My Role
---
As the lead electrical engineering intern from **August 2024 to November 2024**, I spearheaded:

1. **Sensor System Design**  
   - Researched & prototyped non-contact infrared temperature sensors to monitor 2-4m lances  
   - Analyzed LiDAR/ultrasonic alternatives for metal detection in high-power environments  
   - Created Python scripts to calculate area-averaged thermal profiles (critical for uneven geometries)

2. **Induction Heater Optimization**  
   - Evaluated 15+ industrial heaters (15kW monophasic to 30kW triphasic)  
   - Reduced costs by 40% selecting Chinese suppliers via RS485/Modbus RTU compatibility analysis  
   - Reverse-engineered legacy analog systems during on-site visits to Stout facilities

3. **Export-Ready Architecture**  
   - Designed schematics in Miro for international voltage compliance (380-480V AC)  
   - Built BoM with IP67-rated components for mining environments  
   - Integrated Wolke's VigíaBox Neo RTU for IoT-enabled fault detection


---
### Key Innovations
---
- **Safety First:** Replaced manual heating with automated closed-loop control (0% operator exposure)  
- **Smart Sensing:** Implemented multi-point IR thermal averaging (±2°C accuracy at 800°C)  
- **Cost Control:** Achieved 15kW induction heating at $5,200 USD via Jinbenlai Electromechanical components  
- **Future-Proof:** Designed modular architecture for easy scaling to 30kW+ systems  

---
### Tools & Technologies
---
- **Hardware:** Omega CN7500 PID controllers, VigíaBox Neo RTU, RS485 networks  
- **Software:** Python (pandas for thermal analysis), MATLAB (induction field simulations)  
- **Standards:** IEC 60529 (IP67 compliance), ISO 13849 (functional safety)  

---
### Short Description
---
This safety-critical project automated thermal lance heating for mining operations, eliminating worker exposure to extreme temperatures. I led sensor selection, induction system design, and IoT integration while reducing costs by 40%. The resulting system achieves ±2°C control at 800°C using infrared thermal averaging and industrial-grade Modbus communication.
