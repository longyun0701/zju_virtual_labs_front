import React from "react";

const CN = 0, EN = 1;


export function Activities({lang}) {
    const text_cn = "为配合本中心所开发的虚拟仿真实验教学活动，本中心于2023年出版了《化学化工专业理论模拟和虚拟仿真实验教学》。该书是工业和信息化部“十四五”规划教材。";
    const text_en = "To facilitate teaching activities, we published a textbook entitled <Teaching Labs for Theoretical Simulations and Virtual Experiments in Chemistry and Chemical Engineering>. This book belongs to the '14th Five-Year Plan' by the Ministry of Industry and Information Technology of PRC. This book was written in Chinese, and below is an excerpt of the introduction part (in its original language, Chinese).";
    let text = "";
    const text_intro_1 = "2014年，浙江大学获首批化学化工类国家级虚拟仿真实验中心。2015年，浙江大学化学系和化学工程与生物工程学院对《高等物理化学》、《化学反应工程基础》、《化工工艺学》和《精细有机合成》等课程体系进行了重大改革，将虚拟仿真实验融入本科理论与实验课程的教学中。为帮助学生更加深入地理解并掌握教学内容，提高学生应用理论知识的能力和技能，改革后的《高等物理化学》课程增设了实习（上机操作）环节，并使其与理论教学并重，二者交替展开，穿插进行。该课程力图让学生在原子、分子层面上更深刻地理解物质的物理、化学性质与行为的本质，并领略其中的精妙，并且能够应用于其后续学习、科研工作中解决相关实际问题。改革后的《化学反应工程基础》、《化工工艺学》和《精细有机合成》课程将部分实验以虚拟仿真实验的形式为学生提供更广阔的自主学习机会。";
    const text_intro_2 = "本书是与化学、化学工程专业《物理化学》、《高等物理化学》、《化学反应工程基础》、《化工工艺学》和《精细有机合成》等相关课程的理论教学相配套的实践实习教学部分，多是任课教师与相关领域教学、科研人员基于多年的教学经验和科研成果，经过精心挑选与组织整理，并吸取了国内外相关教材的优点编写而成。";
    const text_intro_3_cn = "本书第一、二部分包含目前化学领域广泛涉及的12个教学实例，其中包括7个量子化学范畴的实例和5个统计热力学范畴的实例，涵盖了从电子尺度、分子及分子聚集体层次到生物大分子体系跨尺度的计算模拟实习，不但涉及了模型的构建、分子光谱、化学反应机理探索、液体微观结构、动力学性质和热力学参数的计算，而且包括蛋白质分子识别、药物靶向输送及分子自组装等涉及物质科学的结构和性质多方面的热点问题。采用的方法既有密度泛函理论（DFT方法）的量子力学方法，还有分子动力学（MD）方法、拉伸分子动力学（SMD）方法以及粗粒度（CG）模拟的方法。第三部分包含了11个虚拟仿真实验，是化学化工及相关专业学生必修课程，涉及化工热力学、化学反应工程、分离工程、产品工程、化学工艺学等化工学科主干课程，涵盖了基础物性测试、反应器特性测试、反应动力学测试、产品分离提纯、化学品生产工艺流程仿真等内容，不仅包括工艺路线选择、反应器性能评价、工艺流程设计优化，而且包括反应器和单元设备操作、反应条件稳定控制、产物分析表征等内容。其中，反应器特性测试方面的实验包括：气固流化床反应器的流化特性测定、多釜串联流动特性测定；反应动力学测试方面的实验包括：连续搅拌釜反应器中乙酸乙酯的水解反应、膨胀计法测聚合反应速率；化学品生产工艺流程方面的实验包括：固体酸催化酯化合成醋酸丁酯、间硝基苯的制备、乙苯脱氢制苯乙烯；化学热力学方面的实验水溶液的介观结构及其形成机理、相变化及超临界技术；高等有机合成方面的实验包括反应周期长、使用毒性高危险试剂、设备昂贵的生物碱Buflavine的多步合成。以上虚拟仿真实验有效补充拓展了实体实验的不足。";
    const text_intro_3_en = "Parts I and II includes 12 teaching instances common in chemistry, 7 of which belong to quantum chemistry and 5 belong to statistical thermodynamics, ranging from electron scale to molecular to bio-macromolecular system. These multiscale simulations cover the modeling, molecular spectroscopy, reaction mechanism, microstructure of liquids, kinetics, and themodynamics. The hot topics, e.g., protein molecule recognition, drug targeted delivery, and molecular self-assembly, are also involved as they are related to structure-property mapping of matters, where students use simulation tools of DFT, Molecular Dynamics (MD), Stretching MD, and Coarse Graining. Part III includes 11 labs of chemical engineering, covering tests of physico-chemical properties, reactor characteristics, kinetics, purification, with practical applications in thermodynamics, reaction engineering, separation, product engineering, process design, etc. Example labs include: the fluidization characteristics of gas-solid fluidized bed reactors, the flow of tank-in-series, the hydrolisis of ethyl acetate in CSTR, phase transitions and supercritical extraction, reaction rate of polymerization, etc. We employed digital technology to create virtual labs to complement and extend the physical labs.";
    const dl_text_cn = "下载前言全文";
    const dl_text_en = "Click here for a full introduction part of the text";
    let dl_text = "";
    let text_intro_3 = "";
  
    const prePath = "assets/";
  
    if (lang===CN) {
      text = text_cn;
      text_intro_3 = text_intro_3_cn;
      dl_text = dl_text_cn;
    }
    else if (lang===EN) {
      text = text_en;
      dl_text = dl_text_en;
      text_intro_3 = text_intro_3_en;
    }
    return (
      <div>
        <br/><p className='para_cn'>{text}</p>
        
        <tr>
          <td width="35%">
            <a href={prePath+"textbook_cover.jpg"} target='_blank'> <img src={prePath+"textbook_cover.jpg"} width="327" height="340" alt="textbook"/> </a>
          </td>
          <td width="65%">
            <p className='para_cn'>{text_intro_1}</p>
            
            <p className='para_cn'>{text_intro_2} </p>
          </td>
        </tr>
        
        <p className='para_cn'>{text_intro_3}</p>
  
       
        <br/>
          <a  class="highlight_shift" href={prePath+"text_intro.pdf"} target='_blank'>{dl_text}</a>
        <br/>
      </div>
    )
  }
  