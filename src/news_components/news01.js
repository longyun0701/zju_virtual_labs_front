import React from "react";

const CN = 0, EN = 1;
const prePath = "assets/news/";
const WIDTH = 800;

function Width2Height(w,h,W) {
  const H = Math.round(W*h/w);
  return H;

}


export function News01({lang}) {
    const text_cn = {title: "2023年全国高校化学实验教学研讨会在浙江大学成功举办",
                     para_01: "在“双一流”建设背景下，为适应新时代高等学校化学实验教学高质量发展新要求，更好发挥化学实验教学对一流本科创新人才培养的支撑作用，以“推动化学实验教学创新，培养一流拔尖人才”为主题的2023年全国高等学校化学实验教学研讨会在杭州浙江大学紫金港校区启真湖畔于2023年8月20-22日顺利召开了。本次研讨会安排在中国化学会及教育部高等学校国家级实验教学示范中心联席会主办的“微瑞杯”第四届全国大学生化学实验创新设计大赛总决赛期间同步举行。来自全国90多所高校的200多位教师及20家协办企业的70多位代表一起参加了交流研讨，共谋新时代高校化学实验教学的发展与创新，助推国家创新拔尖人才培养事业攀登新高峰。",
                     img_01: ["news_01_pic_1.jpg", 1269, 846],
                     para_02: "研讨会开幕式由化学系副系主任、化学国家级实验教学示范中心主任林旭锋教授主持。化学系党委书记胡吉明教授出席研讨会并致开幕词。胡书记对与会嘉宾表示热烈欢迎，对向长期以来一直关心和支持浙江大学化学系建设和发展的领导与专家表示衷心感谢。浙江大学化学系于1985年对化学实验课程体系和管理体制进行改革，于1987年在全国高校中率先成立化学实验教学中心，实行了实验单独设课，建立了基础-中级-综合-探索创新的实验教学课程体系，建立了适合理工农医多学科化学实验教学平台课程体系，建成了全国首批国家级实验教学示范中心，曾先后获国家级教学成果奖特等奖1项、一等奖1项、二等奖3项，促进了全国高校化学实验教学的全面改革。本次会议将为国内从事高校实验教学的同行们搭建一个高水平交流的平台，希望各位参会代表对我校的化学实验教学工作给予更大支持，多提宝贵经验和建议。",
                     img_02: ["news_01_pic_2.jpg", 967, 645],
                     para_03: "教育部高等学校化学类专业教学指导委员会副主任、大连大学校长孟长功教授发言。孟校长从化学类专业教学指导委员的角度，分析了当前高校化学教育现状及面临的挑战，希望研讨会的专家们能针对当前化学实验教学的难点痛点问题，特别是实验教学落后于化学学科发展的问题，交流探讨出行之有效的途径。",
                     img_03: ["news_01_pic_3.jpg", 918, 611],
                     para_04: "来自全国高等院校的教学副院长、 国家级化学实验教学示范中心主任以及相关企业的15名专家做主题报告分享。教育部高等学校化学类专业教指委秘书长、国家级名师、厦门大学朱亚先教授做了“化学类专业一流课程建设重点与任务”的大会报告。浙江大学林旭锋、山东大学徐政虎、南京大学俞寿云、中山大学朱芳等专家教授则分享了特邀主题报告。报告专家们高瞻远瞩，提纲挈领，呈现高水平的教学理念和丰富的教学案例，参会教师与专家们在研讨会期间进行了充分的交流。本次研讨会是疫情后难得的一次线下化学实验教学研讨的盛宴。本次会议是推动和提升我校化学实验教学改革创新能力的一次良好契机，促进了与兄弟高校的交流与合作，必将有助于化学类创新拔尖人才的培养。",
                     img_04: ["news_01_pic_4.jpg", 1269, 577],       
                     ending: "",
                    };

    const text_en = {title: "2023 National Seminar for College Chemistry Labs Held in ZJU",
                     para_01: "To meet the new requirements for high-quality development in chemistry laboratory teaching in higher education institutions and nurturing top-notch undergraduate talent, the 2023 National Higher Education Chemistry Laboratory Teaching Seminar, with the theme of 'Promoting Innovation in Chemistry Laboratory Teaching and Cultivating Top-tier Talent', was successfully held at Zhejiang University's Zijingang Campus, from August 20th to 22nd, 2023. This seminar was organized in conjunction with the 4th National Undergraduate Chemistry Laboratory Innovative Design Competition, known as the 'Weirui Cup', co-hosted by the Chinese Chemical Society and the Ministry of Education's National-Level Experimental Teaching Demonstration Center. Over 200 teachers from more than 90 universities across the country, along with 70 representatives from 20 collaborating companies, came together to participate in discussions and seminars. ",
                     img_01: ["news_01_pic_1.jpg", 1269, 846],
                     para_02: "The opening ceremony of the seminar was presided over by Professor Lin Xufeng, the Deputy Head of the Department of Chemistry and the Director of the National-Level Experimental Teaching Demonstration Center for Chemistry. Professor Hu Jiming, the Secretary of the Party Committee of the Department of Chemistry, attended the seminar and delivered the opening speech. In 1985, the Department of Chemistry initiated reforms in the curriculum and management system for chemistry laboratory courses. In 1987, it became the first department in Chinese universities to establish a Chemistry Laboratory Teaching Center. We introduced a curriculum system featuring separate experimental courses, established a series of laboratory teaching courses ranging from foundational to intermediate, comprehensive, and exploratory innovation levels. We also built a multidisciplinary chemistry laboratory teaching platform suitable for various fields, and achieved the distinction of being one of the first national-level experimental teaching demonstration centers in the country. Over the years, we earned numerous awards, including one special prize and one first prize at the national level, as well as three second prizes, all in recognition of our contributions to the comprehensive reform of teaching labs. This conference aimed to provide a high-level platform for colleagues engaged in university laboratory teaching in China to exchange ideas and experiences. We hoped that the attending representatives would continue to provide strong support to the Department of Chemistry's laboratory teaching work and offer valuable insights.",
                     img_02: ["news_01_pic_2.jpg", 967, 645],
                     para_03: "Professor Meng Changgong, the Vice Director of the Teaching Guidance Committee for Chemistry Majors in Higher Education Institutions under the Ministry of Education and the President of Dalian University, delivered a speech. President Meng, speaking from the perspective of a committee member responsible for guiding chemistry majors, analyzed the current status and challenges of chemistry education in higher education institutions. He expressed the hope that the experts at the seminar would address the current difficulties and pain points in chemistry laboratory teaching, especially the issue of laboratory teaching lagging behind the development of the chemistry discipline. He encouraged them to engage in discussions and explore effective solutions to these challenges.",
                     img_03: ["news_01_pic_3.jpg", 918, 611],
                     para_04: "Fifteen experts from universities across the country delivered keynote speeches. Professor Zhu Yaxian, a National Distinguished Professor from Xiamen University, gave a speech titled 'Key Focus and Tasks in the Construction of First-Class Courses in Chemistry Majors'. Educators from Zhejiang University, Shandong University, Nanjing University, Sun Yat-sen University, etc. exchanged ideas via keynote presentations. They presented forward-thinking  teaching concepts with rich case studies. During the seminar, all teaching staff also engaged in extensive discussions. This seminar was a rare face-to-face gathering after the pandemic. It provided an excellent opportunity to enhance and promote the reform and innovation capabilities of chemistry teaching labs at our university. It also fostered exchanges and collaborations with sister universities, ultimately contributing to the cultivation of innovative and top-tier talents in the field of chemistry.",
                     img_04: ["news_01_pic_4.jpg", 1269, 577],                    
                     ending: "",
                   };
    let text = "";
  
    if (lang===CN) text = text_cn;
    else if (lang===EN) text = text_en;

    const paras = [[text.para_01, text.img_01],
                   [text.para_02, text.img_02],
                   [text.para_03, text.img_03],
                   [text.para_04, text.img_04],
                  ];
  
    return (
      <div>
        <h2>{text.title}</h2>
        {
            paras.map((p)=>{return (
                <div>
                  <p>{p[0]}</p>
                  <div align="center">
                    <img src={prePath+p[1][0]} width={WIDTH} height={Width2Height(p[1][1],p[1][2],WIDTH)} alt="News images"/>
                  </div>
                </div>
                )})
        }
        <br/>
        <div align="center">
            <img src={prePath+"news_01_pic_5.jpg"} width="800" height="1243" alt="Expert Team Visiting"/>
        </div>
        
        <br/>
        <p>{text.ending}</p>
      </div>
    )
}