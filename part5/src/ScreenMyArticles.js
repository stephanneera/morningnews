import React, { useState } from 'react';

import './App.css';
import { Card, Icon, Modal} from 'antd';
import Nav from './Nav'
import {connect} from 'react-redux';



const { Meta } = Card;

function ScreenMyArticles(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };



  // const FakeArticles = [
  //   {title:'Bitcoin Power', description: 'Le bitcoin revient de très loin et peut toujours...',img:'./images/bitcoin.jpg', content:"L’agenda politique sur la monnaie numérique publique, ainsi que ma récente visite du Musée créé par la Banque de France m’ont conduit à de multiples réflexions. Qu’un ministre ne veuille pas de monnaie privée sur notre sol (curieux, d’ailleurs que ce soit précisément ce mot à double sens qui affleure ici) c’est une chose. Que la chose soit impensable en est une autre.On va parler ici d’une monnaie privée émise justement par… un ministre, et pas n’importe lequel. Au cœur de l’appareil d’Etat, et en plein centre de la France. "},
  //   {title:"Sauver l'Alaska", description: 'Le réchaffement climatique devrait concerner tout...',img:'./images/alaska.jpg', content:"Peuplé par des Aléoutes, Esquimaux (notamment Iñupiak et Yupiks) et peut-être d'autres Amérindiens depuis plusieurs millénaires, le territoire est colonisé par des trappeurs russes à la fin du xviiie siècle. L'Alaska vit alors essentiellement du commerce du bois et de la traite des fourrures. En 1867, les États-Unis l'achètent à la Russie pour la somme de 7,2 millions de dollars (environ 120 millions de dollars actuels), et celui-ci adhère à l'Union le 3 janvier 1959. Les domaines économiques prédominants aujourd'hui sont la pêche, le tourisme, et surtout la production d'hydrocarbures (pétrole, gaz) depuis la découverte de gisements à Prudhoe Bay dans les années 1970." },
  //   {name:"Gilets Jaune", description: 'Encore un samedi agité en IDF selon...',img:'./images/giletjaune.jpg',content:"Selon une information de La Provence, ce samedi, deux « gilets jaunes » ont été interptions par les manifestants. En novembre, une dizaine de personnes avait ainsi été interpellée par la police après le saccage du péage et un incendie volontaire."}
  // ]
  

  return (
    <div>
         
            <Nav/>

            <div className="Banner"/>

            <div className="Card">
    

                    <div  style={{display:'flex',justifyContent:'center'}}>
                      {props.articles.length > 0 ? 
                    props.articles.map((article, i) => (
                     <div> <Card
                        style={{  
                          width: 300, 
                          margin:'15px', 
                          display:'flex',
                          flexDirection: 'column',
                          justifyContent:'space-between' }}
                        cover={
                        <img
                            alt="example"
                            src={article.image}
                        />
                        
                        }
                        
                        actions={[
                          <Icon type="read" key="ellipsis2" onClick={()=>showModal(article.title, article.description, article.content)} />,
                            <Icon type="delete" key="ellipsis" onClick={()=>props.onDeleteClick(article.title)} />
                        ]}
                        >
                          
                        <Meta
                          title={article.title}
                          description={article.description}
                        />


                  
                      </Card>
                      <Modal title={article.title} visible={isModalVisible} onOk={handleOk}>
                    <p>{article.content}</p>
                     </Modal></div>
                    )) : <h1>No articles found</h1>}
                    
                    </div>



       
                        
                

             </div>
      
 

      </div>
      
  );
}
function mapDispatchToProps(dispatch) {
  return {
    onDeleteClick: function(title) { 
        dispatch( {type: 'delete', title} ) 
    },
    
}}

function mapStateToProps(state) {
  return { articles:  state.articles}
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ScreenMyArticles);