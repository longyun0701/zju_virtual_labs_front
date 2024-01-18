import React from "react";

const CN = 0, EN = 1;
const prePath = "assets/news/";

export function News03({lang}) {
    const text_cn = {title: "教学西部行：中心与内蒙古师范大学及赤峰学院举行同步课堂教学活动",
                     para_01: "为积极响应教育部“慕课西行”行动号召，扎实推动优质教育资源互联共享，深入推进现代化教学手段和教学方法改革创新，2023年6月7日下午，浙江大学国家级化学实验教学示范中心与内蒙古师范大学化学与环境科学学院及赤峰学院化学与生命科学学院,在智慧树平台的技术支持下，跨时空开展同步课堂教学活动。由浙江大学化学系刘迎春老师讲授《水溶液的介观结构与形成机理虚拟仿真实验》课。该课程是首批国家级一流本科课程，训练学生用分子模拟的方法“看到”纳米簇，解决纳米簇讲授抽象的难题，拓展实验的深度与广度，培养学生从现象到本质的微观思维能力。课堂上，刘老师与西部两院校师生进行积极互动，回答了师生的问题，课堂气氛活跃。课后，学生反馈“有意思，不枯燥”、“通俗易懂”、“看到了实体实验看不到的现象”……本次同步课堂“西部行”活动是借力信息化手段，实现与西部兄弟院校优势教学资源共享及数字化实验教学改革的良好尝试，也是发挥国家级化学实验教学示范中心辐射功能的成功体现。",
                     ending: "(刘迎春供稿)",
                    };

    const text_en = {title: "Journey to the West：Sync. Teaching with NeiMenggu Normal Univ. & ChiFeng College",
                     para_01: "In active response to the Ministry of Education's 'MOOCs to the West' initiative, on the afternoon of June 7, 2023, our center, along with the Chemistry and Environmental Science School of NeiMongolia Normal University and the Chemistry and Life Science School of Chifeng University, collaborated across time and space to conduct synchronous classroom teaching activities with the support of the Zhihuishu platform. Professor Liu Yingchun from our center delivered a virtual simulation experiment lecture titled 'Mesoscopic Structure and Formation Mechanism of Aqueous Solutions'. This course is among the first batch of national-level top-tier undergraduate courses. It trains students to 'see' nanoclusters using molecular simulation methods, addressing the abstract nature of nanoclusters and expanding the depth and breadth of experiments. It also cultivates students' ability to think microscopically from phenomena to essence. During the class, Professor Liu actively interacted with students and faculty from these western institutions. Students' feedback described it as 'interesting and not dull', 'easy to understand', and noting that they were able to 'see phenomena invisible in physical experiments'. This synchronous classroom activity leveraged information technology to share educational resources with western partner institutions and is a successful example of digital experimental teaching reform. It also demonstrated the effective outreach function of our center.",
                     ending: "(Written by Liu Yingchun)",
                    };
                    
    let text = "";
  
    if (lang===CN) text = text_cn;
    else if (lang===EN) text = text_en;

    const paras = [text.para_01];
  
    return (
      <div>
        <h2>{text.title}</h2>
        {
            paras.map((p)=>{return (<p>{p}</p>)})
        }
        <br/>
        <div align="center">
            <img src={prePath+"news_03_pic_1.jpg"} width="800" height="505" alt="Journey West 1"/><br/>
            <img src={prePath+"news_03_pic_2.jpg"} width="800" height="725" alt="Journey West 2"/>
        </div>
        
        <br/>
        <p>{text.ending}</p>
      </div>
    )
}