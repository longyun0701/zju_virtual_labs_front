import React from "react";

const CN = 0, EN = 1;


export function Personnel({lang}) {

    const prePath = "assets/faculty/";
    const staffs = { staff_01: {
                                  Name_en: "Liu Yingchun (Professor)",
                                  Name_cn: "刘迎春 教授",
                                  Role_en: "Director (Center for the Virtual Labs, Chem@ZJU)",
                                  Role_cn: "虚拟仿真实验中心主任",
                                  Email: "liuyingch@zju.edu.cn",
                                  Area_en: "Molecular Simulation, Physical Chemistry & Labs",
                                  Area_cn: "分子模拟, 物理化学教学实验",
                                  Link: prePath + "faculty_Liu_yc.jpg",
                                 },
                     staff_02: {
                                  Name_en: "Liu Zhanxiang (Associate Professor)",
                                  Name_cn: "刘占祥 副教授",
                                  Role_en: "Deputy Director (National-Level Exemplar Center for Chemistry Teaching Labs)",
                                  Role_cn: "国家级化学实验教学示范中心副主任",
                                  Email: "liuzhanx@zju.edu.cn",
                                  Area_en: "Organic Syntheses & Teaching Labs, Virtual Labs",
                                  Area_cn: "有机合成, 有机教学实验, 虚拟仿真实验",
                                  Link: prePath + "faculty_Liu_zx.jpg",
                                 },
                               // 主要从事有机合成方法学研究和有机化学理论和实验教学。
                                //主持省级虚拟仿真实验项目，开发有机合成类虚拟仿真实验项目。
                      
                     staff_03: {
                                  Name_en: "He Guijin (Lab officer)",
                                  Name_cn: "何桂金 实验师",
                                  Role_en: "Head (Division of Intermediate Chemistry Labs, Chem@ZJU)",
                                  Role_cn: "中级化学实验主任",
                                  Email: "guikinghe@zju.edu.cn",
                                  Area_en: "Calorimetry, Thermochemistry",
                                  Area_cn: "量热学, 热化学",
                                  Link: prePath + "faculty_He_gj.jpg",
                                 },
                    staff_04: {
                                  Name_en: "Yang Linyan (Lab technician)",
                                  Name_cn: "杨林颜 实验师",
                                  Role_en: "Lab officer (Chem@ZJU)",
                                  Role_cn: "实验师",
                                  Email: "yanglinyan@zju.edu.cn",
                                  Area_en: "Lab & Equipment Setup, Data Processing & Analysis",
                                  Area_cn: "自主搭建实验装置, 数据处理和分析",
                                  Link: prePath + "faculty_Yang_ly.jpg",
                                 },
                    staff_05: {
                                  Name_en: "Chen Chen (Lab technician)",
                                  Name_cn: "陈晨 实验师",
                                  Role_en: "Lab officer (Chem@ZJU)",
                                  Role_cn: "实验师",
                                  Email: "0020578@zju.edu.cn",
                                  Area_en: "Lab & Equipment, particularly Raman Microscope",
                                  Area_cn: "主管显微拉曼光谱仪",
                                  Link: prePath + "faculty_Chen_c.jpg",
                                 },
    }
  
  
    //if (lang===CN) text = text_cn;
    //else if (lang===EN) text = text_en;
  
    const grids = [[staffs.staff_01, staffs.staff_02], 
                   [staffs.staff_03, staffs.staff_04],
                   [staffs.staff_05],
                  ];
  
    return (
      <div>
  
        <br/><br/>
  
         { 
          grids.map((row)=>{ return (
            <tr><td width="12%"></td>
            {
              row.map((person)=>{
  
                const Name = lang===CN ? person.Name_cn: person.Name_en;
                const Role = lang===CN ? person.Role_cn: person.Role_en;
                const Area = lang===CN ? person.Area_cn: person.Area_en;
                const Email = person.Email;
  
                return (
                <td width="38%">
                  <tr>
                    <td width="43%">
                      <img src={person.Link} width="140" height="186" alt={person.Name_en}/>
                    </td>
                    <td width="57%" class="fac_intro_text">
                        {Name}<br/>
                        <a class="highlight_shift" href="mailto:{Email}">{Email}</a><br/>
                        {Role}<br/><br/>
                        {Area}<br/>
                    </td>
                  </tr>
                </td>
              )})
  
            }
            <td width="12%"></td></tr>
  
          ) })
  
         }
  
      </div>
  
  
    )
  
  }