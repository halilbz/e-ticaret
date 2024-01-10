const commentReviewsFunc= function(){
    const commentStarsDOM = document.querySelectorAll(".comment-form-rating .star");
    
    commentStarsDOM.forEach((item)=>{
        item.addEventListener("click",(e)=>{
            e.preventDefault();
            commentStarsDOM.forEach((star)=>star.classList.remove("active"));
            item.classList.add("active");
            
           
        });
    });
};


const addNewComment = () => { //yukarıdaki gibi değişken fonk oluşturduk.
    let comments=[];//boş array oluşturduk. bunun içine isim ve yorumu atacaz
    let commentTextDOM = document.getElementById("comment-text");
    let commentNameDOM = document.getElementById("comment-name");
    let commentBtnDOM= document.querySelector(".form-submit input");
    let commentListDOM= document.querySelector(".comment-list");//li lerin kapsayıcısını aldık ki altta butona tıklayınca inner html ile buraya atacaz
    
    
    

    let commentText="";
    let commentName="";


    commentTextDOM.addEventListener("input", function(e){//textin içindekini almak için input kullanabılırsın
        commentText = e.target.value;
        
    });

    commentNameDOM.addEventListener("input", function(e){//textin içindekini almak için input kullanabılırsın
        commentName = e.target.value;
        
    });
 
    
    
    function addComment(e){//fonk oluşturup bunu da tıklama olunca çağırabilirsin
        e.preventDefault();
        let commentStarActive= document.querySelector(".stars .star.active");
        var tarih = new Date();
        
        if(commentText && commentName){
        comments.push({text:commentText, name:commentName, commentStarActive,tarih}); }
        let result="";//boş bir sonuç oluşturdk içine html yazcaz birazdan
        
        comments.forEach((item)=>{ //yorumları dön. dönerken html ime ekleme yap
            
            
            
            
            result +=`
            <li class="comment-item">
                <div class="comment-avatar">
                        <img src="img/avatars/avatar1.jpg" alt="">
                    </div>
                    <div class="comment-text">
                    <div class="stars">
                    
                    ${commentStarActive}
                </div>
                        <div class="comment-meta">
                            <strong>${item.name}</strong>
                            -
                            <time>${item.tarih}</time>
                        </div>
                        <div class="comment-description">
                            <p>${item.text}</p>
                        </div>
                    </div>
                </li>
            `;
        
          
       

        });
        

        commentListDOM.innerHTML = result;
        
        
        commentTextDOM.value="";
        commentNameDOM.value="";
        commentText="";
        commentName="";
    }
    
    commentBtnDOM.addEventListener("click",addComment);

    


}

function commentsFunc(){
    commentReviewsFunc();
    addNewComment();
}

export default commentsFunc();