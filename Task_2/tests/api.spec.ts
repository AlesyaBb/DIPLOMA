import * as Functions from "../constants/functions";
import * as Variables from "../constants/variables";

  
describe('Api requests https://jsonplaceholder.typicode.com/', () => {

    describe('/posts', () => {
  
        test('GET/Получение всех постов', async () => {
            const response = await Functions.getApiResponse('https://jsonplaceholder.typicode.com/posts');
                expect(response.status).toBe(200);
                response.body.forEach((post: any) => {
                    expect(post).toHaveProperty('userId');
                    expect(post).toHaveProperty('id');
                    expect(post).toHaveProperty('title');
                    expect(post).toHaveProperty('body');
                });
        });
        test('GET/Получение существующего поста', async () => {
            const response = await Functions.getApiResponse("https://jsonplaceholder.typicode.com/posts/5");
                expect(response.status).toBe(200);
                expect(response.body).toEqual(Variables.expectedObjForGet);
        });
        test('GET/Получение несуществующего поста', async () => {
            const response = await Functions.getApiResponse("https://jsonplaceholder.typicode.com/posts/1000");
                expect(response.status).toBe(404);
                expect(response.message).toBe('Not Found');
        });
        test('GET/Фильрация постов', async () => {
            const response = await Functions.getApiResponse('https://jsonplaceholder.typicode.com/posts?userId=1');
                expect(response.status).toBe(200);
                response.body.forEach((post: any) => {
                    expect(post).toHaveProperty('userId', 1);
                });
        });
        test('GET/Получение списка вложенных ресурсов', async () => {
            const response = await Functions.getApiResponse('https://jsonplaceholder.typicode.com/posts/1/comments');
                expect(response.status).toBe(200);
                response.body.forEach((post: any) => {
                    expect(post).toHaveProperty('postId', 1);
                });
        });
        test('POST/Добавление поста', async () => {
            const response = await Functions.postApiResponse("https://jsonplaceholder.typicode.com/posts", Variables.newPostData);
                expect(response.status).toBe(201);
                expect(response.body.id).toBeDefined();
                expect(response.body.title).toEqual(Variables.newPostData.title);
                expect(response.body.body).toEqual(Variables.newPostData.body);
                expect(response.body.userId).toEqual(Variables.newPostData.userId);
        });
        test('POST/Добавление поста с некорректным url', async () => {
            const response = await Functions.postApiResponse("https://jsonplaceholder.typicode.com/posts/1", Variables.newPostData);
                expect(response.status).toBe(404);
                expect(response.message).toBe('Not Found');
        });
        test('PUT/Обновление поста', async () => {
            const response = await Functions.putApiResponse("https://jsonplaceholder.typicode.com/posts/2", Variables.updatedPostData);
                expect(response.status).toBe(200);
                expect(response.body).toEqual(Variables.updatedPostData);
        });
        test('PUT/Обновление несуществующего поста', async () => {
            const response = await Functions.putApiResponse("https://jsonplaceholder.typicode.com/posts/1000", Variables.updatedPostData);
                expect(response.status).toBe(500);
                expect(response.message).toBe('Internal Server Error');
        });
        test('PATCH/Исправление поста', async () => {
            const response = await Functions.patchApiResponse("https://jsonplaceholder.typicode.com/posts/3", Variables.correctedPostData);
            expect(response.status).toBe(200);
            expect(response.body).toEqual(Variables.correctedPostData);
        });
        test('PATCH/Исправление поста без указания id', async () => {
            const response = await Functions.patchApiResponse("https://jsonplaceholder.typicode.com/posts", Variables.correctedPostData);
            expect(response.status).toBe(404);
            expect(response.message).toBe('Not Found');
        });
        test('DELETE/Удаление поста', async () => {
            const response = await Functions.deleteApiResponse("https://jsonplaceholder.typicode.com/posts/1");
            expect(response.status).toBe(200);
            expect(response.body).toStrictEqual({});
        });
        test('DELETE/Удаление поста без указания id', async () => {
            const response = await Functions.deleteApiResponse("https://jsonplaceholder.typicode.com/posts");
            expect(response.status).toBe(404);
            expect(response.message).toBe('Not Found');
        });
    });

    describe('/comments', () => {
        test('POST/Добавление комментария', async () => {
            const response = await Functions.postApiResponse("https://jsonplaceholder.typicode.com/comments", Variables.newCommentData);
                expect(response.status).toBe(201);
                expect(response.body.id).toBeDefined();
                expect(response.body.name).toEqual(Variables.newCommentData.name);
                expect(response.body.email).toEqual(Variables.newCommentData.email);
                expect(response.body.body).toEqual(Variables.newCommentData.body);
        });
        test('PUT/Обновление комментария', async () => {
            const response = await Functions.putApiResponse("https://jsonplaceholder.typicode.com/comments/1", Variables.updatedCommentData);
                expect(response.status).toBe(200);
                expect(response.body).toEqual(Variables.updatedCommentData);
        });
        test('PATCH/Исправление комментария', async () => {
            const response = await Functions.patchApiResponse("https://jsonplaceholder.typicode.com/comments/5", Variables.correctedCommentData);
            expect(response.status).toBe(200);
            expect(response.body).toEqual(Variables.correctedCommentData);
        });
    });
    describe('/photos', () => {
        test('POST/Добавление фотографии', async () => {
            const response = await Functions.postApiResponse("https://jsonplaceholder.typicode.com/photos", Variables.newPhotoData);
                expect(response.status).toBe(201);
                expect(response.body.id).toBeDefined();
                expect(response.body.albumId).toEqual(Variables.newPhotoData.albumId);
                expect(response.body.title).toEqual(Variables.newPhotoData.title);
                expect(response.body.url).toEqual(Variables.newPhotoData.url);
                expect(response.body.thumbnailUrl).toEqual(Variables.newPhotoData.thumbnailUrl);
        });
        test('PUT/Обновление фотографии', async () => {
            const response = await Functions.putApiResponse("https://jsonplaceholder.typicode.com/photos/1", Variables.updatedPhotoData);
                expect(response.status).toBe(200);
                expect(response.body).toEqual(Variables.updatedPhotoData);
        });
        test('PATCH/Исправление фотографии', async () => {
            const response = await Functions.patchApiResponse("https://jsonplaceholder.typicode.com/photos/5", Variables.correctedPhotoData);
            expect(response.status).toBe(200);
            expect(response.body).toEqual(Variables.correctedPhotoData);
        });
    });

    describe('/users', () => {
        test('POST/Добабление пользователя', async () => {
            const response = await Functions.postApiResponse("https://jsonplaceholder.typicode.com/users", Variables.newUserData);
                expect(response.status).toBe(201);
                expect(response.body.id).toBeDefined();
                expect(response.body.name).toEqual(Variables.newUserData.name);
                expect(response.body.username).toEqual(Variables.newUserData.username);
                expect(response.body.email).toEqual(Variables.newUserData.email);
                expect(response.body.address.street).toEqual(Variables.newUserData.address.street);
                expect(response.body.address.suite).toEqual(Variables.newUserData.address.suite);
                expect(response.body.address.city).toEqual(Variables.newUserData.address.city);
                expect(response.body.address.zipcode).toEqual(Variables.newUserData.address.zipcode);
                expect(response.body.address.geo.lat).toEqual(Variables.newUserData.address.geo.lat);
                expect(response.body.address.geo.lng).toEqual(Variables.newUserData.address.geo.lng);
                expect(response.body.phone).toEqual(Variables.newUserData.phone);
                expect(response.body.website).toEqual(Variables.newUserData.website);
                expect(response.body.company.name).toEqual(Variables.newUserData.company.name);
                expect(response.body.company.catchPhrase).toEqual(Variables.newUserData.company.catchPhrase);
                expect(response.body.company.bs).toEqual(Variables.newUserData.company.bs);
        });
        test('PUT/Обновление пользователя', async () => {
            const response = await Functions.putApiResponse("https://jsonplaceholder.typicode.com/users/1", Variables.updatedUserData);
                expect(response.status).toBe(200);
                expect(response.body).toEqual(Variables.updatedUserData);
        });
        test('PATCH/Исправление пользователя', async () => {
            const response = await Functions.patchApiResponse("https://jsonplaceholder.typicode.com/users/5", Variables.correctedUserData);
            expect(response.status).toBe(200);
            expect(response.body).toEqual(Variables.correctedUserData);
        });
    });
});