import React from "react";

const CN = 0, EN = 1;

export function Equipment({lang}) {
    const text_cn = {intro: "本中心现有两台高性能服务器可用于教学数字实验和科研数值模拟分析。",
                     row1: ["服务器1: 虚拟仿真计算模拟平台", "服务器2: 高性能GPU计算模拟平台"],
                     row2: "Linux操作系统, 及BLAS, ATLAS, LAPACK, Sca LAPACK, FFTW 等科学计算库",
                     row3: ["2x Intel Xeon Scalable Platinum 8273CL, 56cores, 112 Threads, 24.75MB L3 Cache",
                            "2x Intel Xeon Silver 4210, 20 Cores, 40 Threads, 13.75 L3 Cache, RTX 3070 (8GB)"],
                     row4: "适用: 分子动力学, 第一性原理, 流体力学, 计算电磁学, 数据挖掘, 计算机视觉, 数值模拟与分析", 
                     row5: ["适用: 有限元分析, 岩土力学, 离散元分析, 多物理场耦合分析, 大规模科学计算与模拟",
                            "适用: 机器学习, 人工智能, 量子计算, 图像处理, 计算化学, 大规模的分布式存储与I/O运作"],
                    }
    const text_en = {intro: "The center is now equipped with 2 high performance clusters, used for the teaching labs, as well as scientific research.",
                    row1: ["Server I: Virtual Labs and Computational Simulation Platform", "Server II: High-Performance GPU Computation Platform"],
                    row2: "Linux OS, with packages: BLAS, ATLAS, LAPACK, Sca LAPACK, FFTW",
                    row3: ["2x Intel Xeon Scalable Platinum 8273CL, 56cores, 112 Threads, 24.75MB L3 Cache",
                           "2x Intel Xeon Silver 4210, 20 Cores, 40 Threads, 13.75 L3 Cache, RTX 3070 (8GB)"],
                    row4: "Good for: Molecular Dynamics, Ab inito, CFD, Computational Electromagnetics, Data Mining, Computer Vision, Numerical Simulation", 
                    row5: ["Good for: FAE, Geotechnical Mechanics, Discrete Element Analysis, Multiphysics Coupled Analysis, Large-Scale Scientific Computing & Simulation",
                           "Good for: Machine Learning, AI, Quantum Computation, Image Processing, Computational Chemistry, Large-Scale Distributed Storage & I/O Operations"],
                   }
    let text = "";
    const prePath = "assets/equips/";
  
    if (lang===CN) text = text_cn;
    else if (lang===EN) text = text_en;
  
    return (
      <div>
        <br/>{text.intro}<br/><br/><br/>
        <tr><td width="150px"></td>
            <tr class="underscore-row">
                <td class='right-border' width="350px" align="center"> {text.row1[0]}</td>
                <td class='equip_intro' width="350px" align="center"> {text.row1[1]}</td>
            </tr>
            <tr class="underscore-row2"><td class='equip_intro' colspan="2">
                {text.row2}
            </td></tr>
            <tr class="underscore-row2">
                <td class='right-border' width="350px"> {text.row3[0]}</td>
                <td class='equip_intro' width="350px"> {text.row3[1]}</td>
            </tr>
            <tr class="underscore-row2"><td class='equip_intro' colspan="2">
                {text.row4}
            </td></tr>
            <tr class="underscore-row2">
                <td class='right-border' width="350px"> {text.row5[0]}</td>
                <td class='equip_intro' width="350px"> {text.row5[1]}</td>
            </tr>
        <td width="150px"></td></tr>
        <br/><br/>
        <table>
        <tr><td width="150px"></td>
            <td width="192px" align="center">
                <img src={prePath+'equip_1.jpg'} width="134" height="297" alt="equip1"/>
            </td>
            <td width="316px" align="center">
                <img src={prePath+'equip_2.jpg'} width="220" height="297" alt="equip2"/>
            </td>
            <td width="192px" align="center">
                <img src={prePath+'equip_3.jpg'} width="134" height="297" alt="equip3"/>
            </td>
        <td width="150px"></td></tr>
        </table>


      </div>
    )
  }