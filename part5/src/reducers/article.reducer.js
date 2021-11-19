
export default function(articles = [], action) {
    console.log(action);
    if(action.type == 'addarticle') {
         
        var newarticles = [... articles]
        
        
        var articleExist = articles.filter(article => article.title == action.title);

        if(articleExist.length == 0){
            newarticles.push({title: action.title, description: action.description, image : action.image, content : action.content});

        }
        return newarticles
    } 

    if(action.type == 'delete') {
         
        
        var result = articles.filter(article => article.title != action.title)        
        
        return result
    } 
      
        else {
        return articles
            
        }


}