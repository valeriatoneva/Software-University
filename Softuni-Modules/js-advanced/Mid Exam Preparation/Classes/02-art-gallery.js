class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 }
        this.listOfArticles = [];
        this.guests = []
    }
    
    addArticle(articleModel, articleName, quantity){
       articleModel = articleModel.toLowerCase()
       
       if(!this.possibleArticles.hasOwnProperty(articleModel)){
           throw new Error('This article model is not included in this gallery!')
       } 
       
       for(let el of this.listOfArticles){
           if(el.articleName === articleName && el.articleModel === articleModel){
               el.quantity += Number(quantity);
           } else {
               this.listOfArticles.push({articleModel, articleName, quantity});
           }
       }
             return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
         }
         
    inviteGuest (guestName, personality) {
        for(let guest of this.guests){
            if(guest.guestName === guestName){
            throw new Error(`${guestName} has already been invited.`)
            } else{
   
        let obj = {guestName, points: 0, purchaseArticle: 0}
        switch(personality){
            case 'Vip': obj.points = 500; break;
            case 'Middle': obj.points = 250; break;
            default: obj.points = 50; break;
        }
        this.guests.push(obj)
        retrun `You have successfully invited ${guestName}!`
        }
    
    }
}
        
    buyArticle(articleModel, articleName, guestName){
        let article;
        let guest;
        let isArticleInTheArr = false;
        
       for(let el of this.listOfArticles){
           if(el.articleName !== articleName || el.articleModel !== articleModel){
               throw new Error(`This article is not found.`);
           }
           
           if(el.quantity === 0){
               return `The ${articleName} is not available.`
           }
           el = article;
       }

       for(let guest of this.guests){
           if(guest.guestName !== guestName){
               return "This guest is not invited."
           }
            if(guest.points < this.possibleArticles[articleModel]){
            return "You need to more points to purchase the article.";
           } else {
            article.quantity--;
            guest.points -= this.possibleArticles[articleModel]
           }
    }
    return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }

}
 artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
console.log(artGallery.inviteGuest('John', 'Middle'));