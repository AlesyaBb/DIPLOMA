export const expectedObjForGet : {userId: number, id: number, title: string, body: string} = {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
};

export const newPostData : {userId: number, title: string, body: string} = {
    userId: 1, 
    title: "eum et est occaecati", 
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
};

export const updatedPostData : {userId: number, id:number, title: string, body: string} = {
    "userId": 11,
    "id": 2,
    "title": "qui est esse 123",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque"
  };

export const correctedPostData : {userId: number, id: number, title: string, body: string} = {
    "userId": 11,
    "id": 3,
    "title": "qui est esse 123",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque"
};

export const newCommentData : {postId: number, name: string, email: string, body: string} = {
    postId: 1, 
    name: "alias odio sit", 
    email: "Maxime_Nienow@verdell.biz",
    body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
};

export const updatedCommentData : {postId: number, id: number, name: string, email: string, body: string} = {
    postId: 11,
    id: 1,
    name: "alias odio sit 123", 
    email: "Alesya_Nienow@verdell.biz",
    body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem"
};

export const correctedCommentData : {postId: number, id: number, name: string, email: string, body: string} = {
    postId: 11,
    "id": 5,
    name: "odio sit 123", 
    email: "Alesya1_Nienow@verdell.biz",
    body: "non et12 atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem"
};

export const newPhotoData : {albumId: number, title: string, url: string, thumbnailUrl: string} = {
    "albumId": 1,
    "title": "culpa odio esse rerum omnis laboriosam",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
};

export const updatedPhotoData : {albumId: number, id: number, title: string, url: string, thumbnailUrl: string} = {
    "albumId": 11,
    "id": 1,
    "title": "culpa odio esse rerum",
    "url": "https://via.placeholder.com/600/d12",
    "thumbnailUrl": "https://via.placeholder.com/150/d12"
};

export const correctedPhotoData : {albumId: number, id: number, title: string, url: string, thumbnailUrl: string} = {
    "albumId": 11,
    "id": 1,
    "title": "culpa odio esse rerum 123",
    "url": "https://via.placeholder.com/600/d12",
    "thumbnailUrl": "https://via.placeholder.com/150/d12"
};

export const newUserData : {name: string, username: string, email: string, address: any, phone: string, website: string, company: any} = {
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
};

export const updatedUserData : {id: number, name: string, username: string, email: string, address: any, phone: string, website: string, company: any} = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};

export const correctedUserData : {id: number, name: string, username: string, email: string, address: any, phone: string, website: string, company: any} = {
    "id": 100,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};