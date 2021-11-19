import React,{useState, useEffect} from 'react';
import {connect} from 'react-redux';
import './App.css';
import { List, Avatar} from 'antd';
import Nav from './Nav';
import {Link} from 'react-router-dom';
import { regexLiteral } from '@babel/types';
import { PromiseProvider } from 'mongoose';



function ScreenSource(props) {

  const [sourceList, setSourceList] = useState([]);
  // const data = [
  //   {
  //     title: 'Ant Design Title 1',
  //   },
  //   {
  //     title: 'Ant Design Title 2',
  //   },
  //   {
  //     title: 'Ant Design Title 3',
  //   },
  //   {
  //     title: 'Ant Design Title 4',
  //   },
  // ];

  const [language, setLanguage] = useState("french");


  useEffect(() => {
    async function loadData() {
      var codelang = ""
      var codecountry = ""
      
      
      if(language == "french"){

        codelang = "fr"
        codecountry = "fr"
           }
     else {
        codelang ="en"
        codecountry="gb"

 
     }
           var rawResponse = await fetch(`https://newsapi.org/v2/top-headlines/sources?language=${codelang}&country=${codecountry}&apiKey=31bc979f62d243358a3bdaafa0e1272a`);
           var response = await rawResponse.json();
           setSourceList(response.sources);     
            
    }
    loadData()
  }, [language]);
  
  console.log(language);
  const changeLanguageToEn = () => {
    setLanguage("english");
  };

  console.log(language);
  const changeLanguageToFr = () => {
    setLanguage("french");
  };
  
  
  // var imageList = sourceList.map((img) => {
  //   var img = ""
  //   if (img.category == "sports") {
  //     img="../images/sports.png"
  //   }
  //   if (img.category == "business") {
  //     img="../images/business.png"
  //   }
  //   else {

  //     img="../images/general.png"
  //   }
    
  // })


  return (
    <div>
        <Nav/>
       
       <div className="Banner">
         <div className ="AvatarSource">
      <Avatar onClick={()=>changeLanguageToFr()} src='/images/france.png'/>
      <Avatar onClick={()=>changeLanguageToEn()} src='/images/uk.png'/>
        </div>
       </div>

       <div className="HomeThemes">

         <p>{props.token}</p>
          
              <List
                  itemLayout="horizontal"
                  dataSource={sourceList}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta

                      
                        avatar={<Avatar src={`./images/${item.category}.png`}/>}
                        title={<Link to={'/screenarticlesbysource/'+item.id}>{item.name}</Link>}
                        description={item.description} 
                      />
                    </List.Item>
                  )}
                />


          </div>
                 
      </div>
  );
}

function mapStateToProps(state) {
  return { token: state.token }
 }  

//export default ScreenSource;
export default connect(mapStateToProps,  
  null
)(ScreenSource);
