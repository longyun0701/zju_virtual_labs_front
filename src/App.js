import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {News01} from "./news_components/news01.js"
import {News02} from "./news_components/news02.js"
import {News03} from "./news_components/news03.js"
import {News04} from "./news_components/news04.js"
import {Personnel} from "./main_pages/personnel.js"
import {Activities} from "./main_pages/textbook.js"
import {Equipment} from "./main_pages/equipment.js"
import {ExperimentList} from "./main_pages/experimentList.js"
import {useState} from "react";

const CN = 0, EN = 1;

function GraphicPageTitle({onClickLangFuncs,lang}) {
  const title_en = "Zhejiang University: Virtual Labs of Chemistry";
  const title_cn = "浙江大学化学类虚拟仿真实验中心";
  const title = (lang===CN)? title_cn:title_en;

  return (
    <div>
    <table>
      <td> <h1b color="black">  {title} </h1b> </td> 
      <td align="right"><lang> <div class="highlight_shift" onClick={onClickLangFuncs[0]}>简体中文</div>
                               <div class="highlight_shift" onClick={onClickLangFuncs[1]}>English</div></lang></td>
    </table>

    <table className='head-bg'>
      <tr height="100">
        <td align="right" width="27%">
          <img src="assets/zjuchemlogo.png" width="250" height="65" alt="logo of ZJU Chem"/>
        </td>

        <td align="center" width="73%">
           
        </td>


      </tr>
    </table>
    </div>
  )
  /*
  return (
    <div>
    <table>
      <td> <h1b color="black">  {title} </h1b> </td> 
      <td align="right"><lang> <div class="highlight_shift" onClick={onClickLangFuncs[0]}>简体中文</div>
                               <div class="highlight_shift" onClick={onClickLangFuncs[1]}>English</div></lang></td>
    </table> 
    <table>
      <tr>
        <img src="assets/headbanner.jpg" width="1000" height="150" alt="ZJU Chem Virtual Labs"/>    
      </tr>
    </table>  
    </div>
  )
  */

}

function L1Tabs({onClickTabFuncs, lang}) {
  const tab_list_en = ['Home', 'About', 'Staff', 'Equipment', 'Textbook'];
  const tab_list_cn = ['首 页', '中 心 概 貌', '师 资 队 伍', '仪 器 设 备', '配 套 教 材'];
  const tab_list = (lang===CN)?tab_list_cn:tab_list_en;

  return (<div>
    
      <table bgcolor="#305faa" border-top='2px'>

        <tr height="32">
        {
          tab_list.map((tab_name,i)=>
                <td width="20%" align="center" verticle-align="middle">
                  <div onClick={onClickTabFuncs[i]}><tab_l1 class="highlight_tab">{tab_name}</tab_l1></div>
                </td>
          )
        }
        </tr>
      </table>
    </div>)  
}

function NewsPic(){

  const news_pics = ["news_pic1.jpg", "news_pic2.jpg", 
                     "news_pic3.jpg", "news_pic4.jpg", "news_pic6.jpg"];
  const prePath = "assets/";

  const slider_settings = {
    dots:true,
    infinite:true,
    autoplay:true,
    speed: 1000,
    slidesToShow: 1,
    SlidesToScroll: 1,
    //swipeToSlide: true,
  };

  return (
    <div>
     <Slider {...slider_settings} style={{width: "400px"}}>
        {
          news_pics.map((news_pic0)=>
            <div><img src= {prePath + news_pic0} width="400" height="240" alt="pictural news"/></div>
          )
        }
      </Slider>
    </div>
  )

}

function NewsList({onClickMore, lang}) {
  const news_list_cn = [
                        "[新闻] 2023年全国高校化学实验教学研讨会在浙江大学成功举办 [2023/8/23]",
                        "[新闻] 国家级实验教学示范中心阶段性总结专家组到中心考察 [2023/8/14]",
                        "[新闻] 中心与内蒙古师范大学及赤峰学院举行同步课堂教学活动 [2023/6/8]",
                        "[新闻] 我校师生在2022年全国仿真创新应用大赛总决赛中斩获佳绩 [2022/12/12]", 
                       ];

  const news_list_en = [
                        "[News] 2023 National Seminar for College Chemistry Labs Held in ZJU [2023/8/23]",
                        "[News] Expert Team Conducts Evaluation at the Natinoal-Level Center [2023/8/14]",
                        "[News] Sync. Teaching with NeiMenggu Normal Univ. & ChiFeng College [2023/6/8]",
                        "[News] Won the 2022 SIAC (simulation innovation application) Finals [2022/12/12]", 
                      ];

  let news_list = [], more="";
  if (lang===CN) {
    news_list = news_list_cn;
    more = "更多";
  }
  else if (lang===EN) {
    news_list = news_list_en;
    more = "More";
  }

  return (<div>
      {
        news_list.map((news0,i) => <tr> <div class="highlight_shift" onClick={onClickMore[i+1]}>{news0}</div> </tr>
        )
      }
      <br/><br/>
      <h4 onClick={onClickMore[0]}> <div class="highlight_shift"> {more} >> </div> </h4>
    
    </div>
  )

}

function NewsBrowser({onClickMore, lang}) {
  return (
    <table>
      <tr>
        <td width="43%" align="left"><NewsPic/></td>
        <td width="57%"><NewsList onClickMore={onClickMore} lang={lang}/></td>
      </tr>
    </table>
  )

}

function LabIntroductions({lang}) {
  const welcome_cn = "欢迎光临浙江大学化学类虚拟仿真实验中心网站";
  const welcome_en = "Welcome to the Website of ZJU Chem Virtual Labs"
  const banner_path_en = "assets/Lab_Introductions_2_en.png";
  const banner_path_cn = "assets/Lab_Introductions_2_cn.png";
  let banner_path = "";

  if (lang===CN) banner_path = banner_path_cn;
  else if (lang===EN) banner_path = banner_path_en;

  return (
    <div>
      <img src={banner_path} width="1000" height="100" alt={lang===CN?welcome_cn:welcome_en}/>
    </div>
  )

}


function FootNote({lang}) {
  const address_cn = ["虚拟仿真实验中心", "地址：浙江省杭州市西湖区余杭塘路866号", 
                      "电话：+86-0571-87951352", "邮箱：chem@zju.edu.cn","邮编：310058",
                      "Copyright © 2023 浙江大学化学系    版权所有",
                    ];
  const address_en = ["Virtual Labs of Chemistry", "Address: 866 Yuhangtang Rd, Hangzhou, CHINA",
                      "Telephone: +86 (571) 8795 1352", "E-Mail: chem@zju.edu.cn", "Postal Code: 310058",
                      "Copyright © 2023 Dept. of Chemistry, Zhejiang University",
                    ];
  let address = [];

  if (lang===CN) address = address_cn;
  else if (lang===EN) address = address_en;

  return(
    <table bgcolor="#003f9a">
      <tr height="100">
        <td align="right" width="35%">
          <img src="assets/zjuchemlogo.png" width="280" height="70" alt="logo of ZJU Chem"/>
        </td>

        <td align="center" width="35%">
          <h1>{address[0]}</h1>
        </td>

        <td align="left" width="30%">
          <add>
            <tr>{address[1]}</tr>
            <tr>{address[2]}</tr> 
            <tr>{address[3]}</tr>
            <tr>{address[4]}</tr>
          </add>
        </td>
      </tr>

      <tr> 
        <td width="35%"/>
        <td align="center" width="35%"><add>{address[5]}</add></td>
        <td width="30%"/>
      </tr>
    
    </table>

  )

}

function FirstPage({onClickNewsMore, lang}) {
  return (
    <table>
      <tr><NewsBrowser onClickMore={onClickNewsMore} lang={lang}/></tr>
      <br/>
      <tr><LabIntroductions lang={lang}/></tr>
      <br/>
      <tr><ExperimentList lang={lang}/></tr>
    </table>
  )
}

function About({lang}) {
  const text_en = "In 2014, Zhejiang University was approved to be of the first batch of national-level virtual simulation laboratories for chemistry and chemical engineering. In 2015, the Department of Chemistry and the School of Chemical and Biological Engineering at Zhejiang University reformed the curriculum, including courses such as <Advanced Physical Chemistry>, <Chemical Reaction Engineering>, <Chemical Process Engineering>, and <Fine Organic Chemicals Syntheses>. They integrated virtual labs into undergraduate theoretical and practical courses. To help students better master the course materials and apply theoretical knowledge and skills, the revised <Advanced Physical Chemistry> course introduced practical hands-on lab work on top of theoretical knowledge. They were intertwined, allowing students to alternate between theory and practical work. Students will gain a profound understanding of the physical and chemical properties and behaviors of matter at the atomic and molecular levels and appreciate their intricacies. The updated versions of the courses <Advanced Physical Chemistry>, <Chemical Reaction Engineering>, <Chemical Process Engineering>, and <Fine Organic Chemicals Syntheses> provided promoted students' self-directed learning by incorporating virtual labs.";
  const text_cn = "2014年，浙江大学获首批化学化工类国家级虚拟仿真实验中心。2015年，浙江大学化学系和化学工程与生物工程学院对《高等物理化学》、《化学反应工程基础》、《化工工艺学》和《精细有机合成》等课程体系进行了重大改革，将虚拟仿真实验融入本科理论与实验课程的教学中。为帮助学生更加深入地理解并掌握教学内容，提高学生应用理论知识的能力和技能，改革后的《高等物理化学》课程增设了实习（上机操作）环节，并使其与理论教学并重，二者交替展开，穿插进行。该课程力图让学生在原子、分子层面上更深刻地理解物质的物理、化学性质与行为的本质，并领略其中的精妙，并且能够应用于其后续学习、科研工作中解决相关实际问题。改革后的《化学反应工程基础》、《化工工艺学》和《精细有机合成》课程将部分实验以虚拟仿真实验的形式为学生提供更广阔的自主学习机会。";
  let  text= "";
  const text_en2 = "Examples of successful virtual labs:";
  const text_cn2 = "虚拟仿真中心的设计成果样例：";
  let text2 = "";

  if (lang===CN) {text = text_cn; text2 = text_cn2;}
  else if (lang===EN) {text = text_en; text2 = text_en2;};

  return (
    <div>
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;{text}
      <br/><br/>
      <tr> <td width="15%"></td>
        <td width="70%">
          <img src="assets/About_pic_1.jpg" width="700" height="388" alt="ZJU Chem Virtual Labs"/>
        </td>
      <td width="15%"></td></tr>
      <br/><br/>
      {text2}<br/>
      <tr> <td width="15%"></td>
      <td width="70%">
        <img src="assets/About_pic_2.jpg" width="700" height="931" alt="ZJU Chem Virtual Labs"/>
      </td>
      <td width="15%"></td></tr>
    </div>
  )
}


function NewsFull({onClickMore, lang}){


  const news_list_cn = [
                      "[新闻] 2023年全国高校化学实验教学研讨会在浙江大学成功举办 [2023/8/23]",
                      "[新闻] 国家级实验教学示范中心阶段性总结专家组到中心考察 [2023/8/14]",
                      "[新闻] 中心与内蒙古师范大学及赤峰学院举行同步课堂教学活动 [2023/6/8]",
                      "[新闻] 我校师生在2022年全国仿真创新应用大赛总决赛中斩获佳绩 [2022/12/12]", 
                     ];

  const news_list_en = [
                      "[News] 2023 National Seminar for College Chemistry Labs Held in ZJU [2023/8/23]",
                      "[News] Expert Team Conducts Evaluation at the Natinoal-Level Center [2023/8/14]",
                      "[News] Sync. Teaching with NeiMenggu Normal Univ. & ChiFeng College [2023/6/8]",
                      "[News] Won the 2022 SIAC (simulation innovation application) Finals [2022/12/12]", 
                    ];

  let news_list = [];
  if (lang===CN) news_list = news_list_cn;
  else if (lang===EN) news_list = news_list_en;
/*
  return (<div><br/>
      {

        news_list.map(news0 => <tr> {news0} </tr>
        )
      }
    </div>
  )

*/
return (<div> <br/>
  {
    news_list.map((news0,i) => <tr> <div class="highlight_shift" onClick={onClickMore[i]}>{news0}</div> </tr>
    )
  }

</div>
)
}


export default function HomePage(){

  
  const [showPageState, setShowPageState] = useState(0);
  const [lang, setLang] = useState(CN);

  const onClickLangFuncs = [()=>{setLang(CN)}, ()=>{setLang(EN)}];
  

  const onClickTabFuncs = [()=>{setShowPageState(0)}, ()=>{setShowPageState(1)}, 
                           ()=>{setShowPageState(2)}, ()=>{setShowPageState(3)},
                           ()=>{setShowPageState(4)}, ()=>{setShowPageState(5)},
                           ()=>{setShowPageState(6)}, ()=>{setShowPageState(7)},
                           ()=>{setShowPageState(8)}, ()=>{setShowPageState(9)},];

  const numTabs = 5;
  const tabPages = [<FirstPage onClickNewsMore={onClickTabFuncs.slice(numTabs)} lang={lang}/>, 
                    <About lang={lang}/>, <Personnel lang={lang}/>, 
                    <Equipment lang={lang}/>, <Activities  lang={lang}/>, 
                   ];
  
  const newsPages = [<NewsFull lang={lang} onClickMore={onClickTabFuncs.slice(numTabs+1, numTabs+5)}/>, <News01 lang={lang}/>,
                     <News02 lang={lang}/>, <News03 lang={lang}/>, <News04 lang={lang}/>];

  const pages = tabPages.concat(newsPages);

  return (
    <div>
      <table width="1000px">
        <tr><GraphicPageTitle onClickLangFuncs={onClickLangFuncs} lang={lang}/></tr>
        <tr><L1Tabs onClickTabFuncs={onClickTabFuncs} lang={lang}/></tr>
        <tr>{pages[showPageState]}</tr>
        <br/>
        <tr><FootNote lang={lang}/></tr>
      </table>  

    </div>
  )
    
}