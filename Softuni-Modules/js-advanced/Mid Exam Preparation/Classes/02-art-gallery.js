// 60/100 not finished
class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();

    if (!this.possibleArticles.hasOwnProperty(articleModel)) {
      throw new Error("This article model is not included in this gallery!");
    }

    for (let el of this.listOfArticles) {
      if (el.articleName === articleName && el.articleModel === articleModel) {
        el.quantity += Number(quantity);
      } else {
        this.listOfArticles.push({ articleModel, articleName, quantity });
      }
    }
    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    for (let el of this.guests) {
      if (el.guestName === guestName) {
        throw new Error(`${guestName} has already been invited.`);
      }
    }
    let obj = { guestName, points: 0, purchaseArticle: 0 };

    switch (personality) {
      case "Vip":
        obj.points = 500;
        break;
      case "Middle":
        obj.points = 250;
        break;
      default:
        obj.points = 50;
        break;
    }
    this.guests.push(obj);
    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    for (let currArticle of this.listOfArticles) {
      if (
        currArticle.articleName !== articleName ||
        currArticle.articleModel !== articleModel
      ) {
        throw new Error(`This article is not found.`);
      }

      if (currArticle.quantity === 0) {
        return `The ${articleName} is not available.`;
      }

      if (!this.guests.some((x) => x.guestName == guestName)) {
        return "This guest is not invited.";
      }

      for (let currGuest of this.guests) {
        if (currGuest.points < this.possibleArticles[articleModel]) {
          return "You need to more points to purchase the article.";
        } else {
          currGuest.points -= this.possibleArticles[articleModel];
          currArticle.quantity--;
        }
      }
    }
    return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
  }
}
const artGallery = new ArtGallery("Curtis Mayfield");
artGallery.addArticle("picture", "Mona Liza", 3);
artGallery.addArticle("Item", "Ancient vase", 2);
artGallery.addArticle("picture", "Mona Liza", 1);
artGallery.inviteGuest("John", "Vip");
artGallery.inviteGuest("Peter", "Middle");
console.log(artGallery.buyArticle("picture", "Mona Liza", "John"));
console.log(artGallery.buyArticle("item", "Ancient vase", "Peter"));
console.log(artGallery.buyArticle("item", "Mona Liza", "John"));
