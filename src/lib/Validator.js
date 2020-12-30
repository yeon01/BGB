// 공백이 있나 없나 체크
export function checkSpace(str) { 
    if(str.search(/\s/) != -1) {
         return true; 
    } else { 
        return false; 
    } 
} 

 // 비밀번호 패턴 체크 (8자 이상, 문자, 숫자, 특수문자 포함여부 체크) 
 export function checkPasswordPattern(str) { 
     var pattern1 = /[0-9]/;  // 숫자 
     var pattern2 = /[a-zA-Z]/; // 문자 
    //  if(!pattern1.test(str) || !pattern2.test(str) || str.length < 7) { 
    //      console.log(str.length);
    //      alert("비밀번호는 8자 이상 영문 대 소문자, 숫자로 구성하여야 합니다."); 
    //      return false; 
    // } else { 
    //     return true; 
    // } 
    if(str.length < 8){
        if(!pattern1.test(str) || !pattern2.test(str)) { 
            
            alert("비밀번호는 8자 이상 영문 대 소문자, 숫자로 구성하여야 합니다.");
            return false; 
       } 
   }else {
      
       return true; 
   }
    
}
 export function checkPasswordPatternSpan(str) { 
     var patternSpan1 = /[0-9]/;  // 숫자 
     var patternSpan2 = /[a-zA-Z]/; // 문자 
     if(str.length < 7){
         console.log(length);
         if(!patternSpan1.test(str) || !patternSpan2.test(str)) { 
             
             document.getElementById('password').innerHTML = "비밀번호는 8자 이상 영문 대 소문자, 숫자로 구성하여야 합니다.";
             return false; 
        } 
    }else {
        document.getElementById('password').innerHTML = "";
        return true; 
    }
}
