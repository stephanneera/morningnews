
import React, { useState, useEffect } from 'react';
import './App.css';
import { Card, Icon} from 'antd';
import Nav from './Nav';
import { useParams } from "react-router-dom";
import { ListGroup } from 'reactstrap';
import { Modal } from 'antd';
import {connect} from 'react-redux';


const { Meta } = Card;

function ScreenArticlesBySource(props) {
  
  const [articleList, setArticleList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };



  let { id } = useParams();

  useEffect(() => {
    async function loadData() {
            var rawResponse = await fetch(`https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=31bc979f62d243358a3bdaafa0e1272a`);
            var response = await rawResponse.json();
            setArticleList(response.articles)
            
    }
    loadData()
  }, []);

  var List = articleList.map((list) => {

    return(    
      <div  style={{display:'flex',justifyContent:'center'}}>
 
      <Card
      style={{ 
      width: 300, 
      margin:'15px', 
      display:'flex',
      flexDirection: 'column',
      justifyContent:'space-between' }}
      cover={
      <img
          alt="example"
          src={list.urlToImage}
      />
      }
      actions={[
        
        
          <Icon type="read" key="ellipsis2" onClick={()=>showModal(list.title, list.description)} />,
          <Icon type="like" key="ellipsis" onClick={ ()=>props.onLikeClick(list.title, list.description, list.urlToImage, list.content) }/>
      ]}
      >

        

      <Meta
      
      
        title={list.title}
        description={list.description}
      />

    </Card>
    <Modal title={list.title} visible={isModalVisible} onOk={handleOk}>
        <p>{list.content}</p>
      </Modal>

    </div>)

  })

  return (
    <div>
         
            <Nav/>

            <div className="Banner"/>

            <div className="Card">
    
              
                {List}

             


            

           </div> 

         
      
      </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onLikeClick: function(title, description, image, content) { 
        dispatch( {type: 'addarticle', title, description, image, content} ) 
    },
    
}}



export default connect(
    null, 
    mapDispatchToProps
)(ScreenArticlesBySource);






 


  

 
