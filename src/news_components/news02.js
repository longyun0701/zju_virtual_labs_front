import React from "react";

const CN = 0, EN = 1;
const prePath = "assets/news/";

export function News02({lang}) {
    const text_cn = {title: "国家级实验教学示范中心阶段性总结专家组到中心考察",
                     para_01: "2023年8月14日下午，国家级实验教学示范中心阶段性总结工作专家组到化学国家级实验教学示范中心进行现场考察。专家组由浙江师范大学副校长林一钢教授、东南大学实验室与设备管理处处长、教育部高校实验室建设与实验室教指委秘书长熊宏齐教授、浙江工业大学教务处处长、国家级实验教学示范中心主任计伟荣教授、省实验室建设与实验类教指委副主任委员、杭州电子科技大学姜周曙教授和浙江师范大学实验室建设与设备管理处处长章明卓教授组成。本次实验教学示范中心阶段性总结工作是对教学中心过去五年工作的检验。专家组首先在听取中心主任林旭锋教授关于化学实验教学示范中心阶段性总结报告后，再来到工作现场进行考察。校本科生院江全元副院长、教务处韩魏副处长等陪同考察。林旭锋主任、刘占祥副主任、刘迎春副主任及相关人员参加接待工作。",
                     para_02: "在一楼大厅，林旭锋主任等接待人员热烈欢迎考察专家组莅临指导！林主任首先介绍了荣誉墙，展示了中心良好的继承与发扬的优良传统。以课程展板为依托，林主任介绍了中心近五年取得的国家级教学成果奖、国家级精品课程、浙江省一流本科课程建设及中心人员构成情况。专家组详细听取了2022年国家级教学成果二等奖“面向本科课程提质的“三联动三分类三协同”研究生助教改革制度与实践”的建设过程，并给予了高度肯定。",
                     para_03: "林主任指引专家组参观了创新化学实验室。专家们在元素分析实验室、液质、气质联用实验室、液相色谱实验室及紫外光谱实验室等，仔细查阅了实验记录本、仪器操作说明、管理细则等规范化事项，提出规章制度应与时俱进，及时更新。",
                     para_04: "专家组随后参观了物理化学实验室。专家们检查了护目镜、洗眼器的配置，课堂试剂的用量、危化品的处置等问题，同时就废液桶的安放位置给出建议。",
                     para_05: "最后，专家们在320会议室认真审阅了示范中心阶段性总结报告，建议今后中心成果形式的署名问题。熊宏齐教授传达了教育部高校实验室建设与实验室教指委对国家级实验教学示范中心的未来建设目标的指导方针。",
                     para_06: "为迎接本次国家级实验教学示范中心阶段性总结、确保呈现出中心最好风貌，中心全体成员众志成城，积极筹备，取得良好反馈。通过此次检验，我们既看到中心在软实力建设上取得的进步，但仍存在急需提升的不足。在五年的阶段性总结的历史节点，我们将继往开来，扬帆起航，为培养拔尖创新人才再登新峰！",
                     ending: "(刘迎春供稿，赵璇供图)",
                    };

    const text_en = {title: "Expert Team Conducts Evaluation at the Natinoal-Level Center",
                     para_01: "On the afternoon of August 14, 2023, an expert team responsible for the phase review visited the National-Level Experimental Teaching Demonstration Center for Chemistry to conduct an on-site inspection. The expert team was composed of academic professionals from various universities and institutions (e.g., Zhejiang Normal University, Southeast University, Ministry of Education, Zhejiang University of Technology, etc.). The inspection began with a presentation by Professor Lin Xufeng, the director of the Chemistry Experimental Teaching Demonstration Center, summarizing the center's work over the past five years. Following the presentation, the expert team conducted an on-site inspection of the center's operations.",
                     para_02: "In the first-floor lobby, Director Lin warmly welcomed the expert team. He introduced the Honor Wall, showcasing the center's rich traditions and achievements. Using a demonstrating poster, Director Lin presented the center's national-level teaching awards, national-level quality courses, the construction of top-tier undergraduate courses in Zhejiang Province, and the composition of the center's personnel over the past five years. The expert team attentively listened to the presentation on the development process of the 2022 National-Level Teaching Achievement Second Prize project, titled 'Research and Implementation of the Graduate Teaching Assistant Reform System and Practice for Enhancing Undergraduate Course Quality through <3-Linkages 3-Classifications and 3-Collaborations>' and highly praised the initiative.",
                     para_03: "Director Lin guided the expert team on a tour of the innovative chemistry labs. They visited labs, including the elemental analysis lab, GC-MS and HPLC-MS lab, UV-vis spectroscopy lab. The expert team also closely examined experimental logbooks, instrument operation instructions, and management regulations to ensure compliance with standardized procedures. They suggested that rules and regulations should be updated in a timely manner.",
                     para_04: "Subsequently, the expert team visited the physical chemistry labs. They inspected the afety goggles, eye wash stations, the proper usage of classroom reagents, and the handling of hazardous chemicals. They also provided recommendations regarding the placement of waste liquid containers.",
                     para_05: "In the end of the day, in the meeting room 320, the experts carefully reviewed the phase review report of the center and provided suggestions, particularly regarding the attribution of center's achievements. Professor Xiong Hongqi delivered concluding remarks representing the Ministry of Education's Teaching Guidance Committee for Laboratory Construction in Higher Education Institutions.",
                     para_06: "To make this phase review successful, all staff from the center had been making full effort to get prepared, and we received a very positive feedback and high recognition. The feedback is a powerful mirror for us to reflect our strengths and weaknesses. We will definitely continue making progress to cultivate innovative talent.",
                     ending: "(Written by Liu Yingchun, Photography by Zhao Xuan)",
                    }
    let text = "";
  
    if (lang===CN) text = text_cn;
    else if (lang===EN) text = text_en;

    const paras = [text.para_01, text.para_02, text.para_03, text.para_04, text.para_05, text.para_06,]
  
    return (
      <div>
        <h2>{text.title}</h2>
        {
            paras.map((p)=>{return (<p>{p}</p>)})
        }
        <br/>
        <div align="center">
            <img src={prePath+"news_02_pic_1.jpg"} width="752" height="800" alt="Expert Team Visiting"/>
        </div>
        
        <br/>
        <p>{text.ending}</p>
      </div>
    )
}