class Story {
    constructor(title, creator) {
      this.title = title
      this.creator = creator;
      this.comments = [];
      this.likes = [];
    }
    get likes(){
      if(this.likes.length === 0){
        return `${this.title} has 0 likes`
      }

      if(this.likes.length === 1){
        return `${username} has 0 likes`
      }
    }
}