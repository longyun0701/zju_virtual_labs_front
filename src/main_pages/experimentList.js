import React from "react";

const CN = 0, EN = 1;

export function ExperimentList({lang}) {

    const prePath = "assets/labs/";
    const labs = {"Lab_02": {Name_cn: "水溶液的介观结构与形成机理",
                             Name_en: "Formation of meso-Structure of aqueous solution", 
                             Class_cn: "物理化学",
                             Class_en: "Physical Chemistry",
                             Pic_link: prePath + "Lab02_Aqueous_mesoStructure_b.png",
                             Exp_link: "http://www.ilab-x.com/details/v4?id=4753&isView=true",
                            },
                  "Lab_01": {Name_cn: "二氧化碳相变及超临界技术",
                             Name_en: "CO2 phase transition and supercritical", 
                             Class_cn: "物理化学",
                             Class_en: "Physical Chemistry",
                             Pic_link: prePath + "Lab01_CO2_phase_transition_c.png",
                             Exp_link: "http://chemlab.zju.edu.cn",
                            }, 
                  "Lab_04": {Name_cn: "液体饱和蒸汽压与沸点的关系探究",
                             Name_en: "Saturation pressure of liquid", 
                             Class_cn: "物理化学",
                             Class_en: "Physical Chemistry",
                             Pic_link: prePath + "Lab04_Saturation_pressure_b.png",
                             Exp_link: prePath + "Lab04_Saturation_pressure_b.png",
                            }, 
                  "Lab_05": {Name_cn: "二组分互溶体系气液相平衡",
                             Name_en: "VLE of binary miscible liquids", 
                             Class_cn: "物理化学",
                             Class_en: "Physical Chemistry",
                             Pic_link: prePath + "Lab05_VLE_binary_liquids_b.png",
                             Exp_link: prePath + "Lab05_VLE_binary_liquids_b.png",
                            },
                  "Lab_05_PH1": {Name_cn: "超临界萃取及反应仿真实验",
                            Name_en: "Reactive extraction at supercritical", 
                            Class_cn: "物理化学",
                            Class_en: "Physical Chemistry",
                            Pic_link: prePath + "Lab05_PH1_CO2_extraction.png",
                            Exp_link: prePath + "Lab05_PH1_CO2_extraction.png",
                           },
                  "Lab_03": {Name_cn: "生物碱Buflavine的多步合成",
                             Name_en: "Multi-Step Synthesis of Buflavine", 
                             Class_cn: "有机化学",
                             Class_en: "Organic Chemistry",
                             Pic_link: prePath + "Lab03_Synthesis_Buflavine.png",
                             Exp_link: "http://zju-sw.dlvrtec.com/",
                            },
                  "Lab_06": {Name_cn: "微流控PET自动合成仪",
                             Name_en: "Automatic Synthesis of PET", 
                             Class_cn: "仪器分析",
                             Class_en: "Analytical Chemistry",
                             Pic_link: prePath + "Lab06_PET_Synthesis.png",
                             Exp_link: prePath + "Lab06_PET_Synthesis.png",
                            },

                  "Lab_06_PH": {Name_cn: "微流控PET自动合成仪 (占位)",
                            Name_en: "Automatic Synthesis of PET (placeHolder)", 
                            Class_cn: "仪器分析",
                            Class_en: "Analytical Chemistry",
                            Pic_link: prePath + "Lab06_PH_PET_Synthesis.png",
                            Exp_link: prePath + "Lab06_PH_PET_Synthesis.png",
                           },

                  "Lab_07_PH1": {Name_cn: "核磁共振解析物质结构 (占位1)",
                           Name_en: "Characterization by NMR (placeHolder1)", 
                           Class_cn: "仪器分析",
                           Class_en: "Analytical Chemistry",
                           Pic_link: prePath + "Lab07_PH1_NMR.png",
                           Exp_link: prePath + "Lab07_PH1_NMR.png",
                          },

                  "Lab_07_PH2": {Name_cn: "核磁共振解析物质结构 (占位2)",
                          Name_en: "Characterization by NMR (placeHolder2)", 
                          Class_cn: "仪器分析",
                          Class_en: "Analytical Chemistry",
                          Pic_link: prePath + "Lab07_PH2_NMR.png",
                          Exp_link: prePath + "Lab07_PH2_NMR.png",
                         },

                  "Lab_08_PH1": {Name_cn: "钾的燃烧",
                         Name_en: "Combustion of Potassium", 
                         Class_cn: "有机化学",
                         Class_en: "Organic Chemistry",
                         Pic_link: prePath + "Lab08_PH1_K_comb.png",
                         Exp_link: prePath + "Lab08_PH1_K_comb.png",
                        },

                  "Lab_08_PH2": {Name_cn: "金属的焰色反应",
                        Name_en: "Flame Test of Metals", 
                        Class_cn: "有机化学",
                        Class_en: "Organic Chemistry",
                        Pic_link: prePath + "Lab08_PH2_yanse.png",
                        Exp_link: prePath + "Lab08_PH2_yanse.png",
                       },
  
                  "Lab_PH": {Name_cn: "占位",
                             Name_en: "Place Holder",
                             Pic_link: prePath + "LabPH.png",
                             Exp_link: prePath + "LabPH.png",
                            }
                  };
  
    const class_cn2en = {"物理化学实验": "Physical Chemistry Labs", "有机及科普实验": "Organic Chemistry & Outreach Labs",
                         "仪器分析实验": "Analytical Chemistry Labs", };
  
    const experiments_classified = [{class:"物理化学实验", labs: [labs.Lab_02, labs.Lab_01, labs.Lab_05_PH1, labs.Lab_05]},
                                    {class:"有机及科普实验", labs: [labs.Lab_03, labs.Lab_03, labs.Lab_08_PH2, labs.Lab_08_PH1]},
                                    {class:"仪器分析实验", labs: [labs.Lab_06, labs.Lab_06_PH, labs.Lab_07_PH1, labs.Lab_07_PH2]},];
          
    const experiments = experiments_classified.map((c)=> {
          const className = (lang===CN) ? c.class: class_cn2en[c.class];
          const labs = c.labs;
  
          return {class: className, labs: labs.map((lab0)=>{return {name: (lang===CN)?lab0.Name_cn:lab0.Name_en,
                                                                    imageFile: lab0.Pic_link,
                                                                    link: lab0.Exp_link,}})};
          });
  
    
    return (<div>
        {
          experiments.map((e) => {
            const exps = e.labs;
            return (<div>
            <th colspan="4" align="left">| {e.class}</th>
            <br/> 
            <tr>
            {exps.map((exp0) => <td>
                                <tr>
                                  <a href={exp0.link} target='_blank'>
                                    <img src={exp0.imageFile} width="248" height="140" alt={exp0.name}/>
                                  </a>
                                </tr>
                                <tr align="center">{exp0.name}</tr>
                                </td>)}
            </tr>
            <br/><br/>
            </div>
          ) }
          )
        }
        </div>
    )
    
  }