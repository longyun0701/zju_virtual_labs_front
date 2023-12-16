import React from "react";

const CN = 0, EN = 1;
const prePath = "assets/news/";

export function News04({lang}) {
    const text_cn = {title: "我校师生在2022年全国仿真创新应用大赛总决赛中斩获佳绩",
                     para_01: "12月3日，12月11日，2022年全国仿真创新应用大赛学生组及教工组总决赛在线上进行。大赛由工业和信息化部人才交流中心主办，本届大赛经过前期各个省赛区的激烈角逐，最终共有27支队伍入围学生组化学化工仿真创新赛道总决赛，29支队伍入围高教组教学仿真课件赛道总决赛。受新冠疫情影响，总决赛采用专家线上评审、参赛学校线上答辩的方式进行。",
                     para_02: "我系学生孙逊、谢日新、张元昕、罗龙涛、戚轶昕五位同学组成的学生组代表队（指导教师：刘迎春、何桂金），我系教师刘迎春、王从敏、何桂金、赵明坚和王永尧老师组成的高教组代表队，凭借项目“相变化及超临界技术虚拟仿真实验”，在浙江省赛区获得一等奖后均晋级全国仿真创新应用大赛总决赛，经过激烈角逐，两支师生队伍均在决赛中获得一等奖，向获奖学生和老师们表示祝贺！",
                     para_03: "在智能化的时代背景下，把握数字技术孕育的新发展机遇，创新融合发展途径，紧密结合国内教育教学资源，依托行业企业力量，为企业、高校、军事单位、医疗机构创造一个新模式、新业态、高水平 的创新应用交流平台——全国仿真创新应用大赛，促进高新技术人才的培养，满足各行业企业对人才的需求，推动创业就业新渠道。",
                     cap_01: "孙逊同学、刘迎春老师参加线上答辩",
                     cap_02: "获奖证书",
                     ending: "",
                    };

    const text_en = {title: "Won the 2022 SIAC (simulation innovation application competition) Finals",
                     para_01: "On December 3rd and 11th, the finals of the 2022 Simulation Innovation Application Competition (SIAC) for both students and faculty were held online. The competition was organized by the Talent Exchange Center of the Ministry of Industry and Information Technology. After intense competitions in various provincial regions in the preliminary rounds, a total of 27 teams advanced to the finals in the student group's chemical and chemical engineering simulation innovation track, and 29 teams advanced to the finals in the faculty group's teaching simulation courseware track. Due to the COVID-19 pandemic, the finals were conducted online, i.e., online defence a evaluation/grading.",
                     para_02: "Congratulations to the team represented by our department's students Sun Xun, Xie Rixin, Zhang Yuanxin, Luo Longtao, and Qi Yixin (mentored by Prof. Liu Yingchun and He Guijin), as well as the faculty team represented by our department's teachers Liu Yingchun, Wang Congmin, He Guijin, Zhao Mingjian, and Wang Yongyao. Both teams won the first place in the finals, by their project, titled 'Virtual Simulation Experiment of Phase Change and Supercritical Technology'. Congratulations to the award-winning students and teachers!",
                     para_03: "In the context of the intelligent era, seizing the new development opportunities nurtured by digital technology, innovating and integrating development approaches, closely aligning with domestic educational resources, and leveraging the strength of industry enterprises, the SIAC has been established as a new model and high-level platform for innovative application and exchange. It serves enterprises, universities, military units, and medical institutions, promoting the cultivation of high-tech talents, meeting the talent demands of various industries and enterprises, and facilitating new channels for entrepreneurship and employment.",
                     cap_01: "Student Mr. Sun Xun and Prof. Liu Yingchun, Online Oral Defense",
                     cap_02: "Certificates of Awards",
                     ending: "",
                    }
    let text = "";
  
    if (lang===CN) text = text_cn;
    else if (lang===EN) text = text_en;

    const paras = [text.para_01, text.para_02, text.para_03,];
  
    return (
      <div>
        <h2>{text.title}</h2>
        {
            paras.map((p)=>{return (<p>{p}</p>)})
        }
        <br/>
        <div align="center">
            <img src={prePath+"news_04_pic_1.jpg"} width="834" height="267" alt={text.cap_01}/>
            <br/>{text.cap_01}<br/><br/>

            <img src={prePath+"news_04_pic_2.jpg"} width="400" height="283" alt={text.cap_02}/>
            <span>&nbsp;&nbsp;</span>
            <img src={prePath+"news_04_pic_3.jpg"} width="400" height="283" alt={text.cap_02}/>
            <br/>{text.cap_02}<br/>
        </div>
      
        <br/>
        <p>{text.ending}</p>
      </div>
    )
}