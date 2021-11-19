
export default function(token ='', action) {
 
    if(action.type == 'gettoken') {
      var newToken = action.token;
      return newToken;
    } else {
      return token;
    }
    
   }