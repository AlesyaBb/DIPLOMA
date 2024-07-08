//API TESTING

import * as Functions from "../constants/functions";
import * as Variables from "../constants/variables";

  
describe('Api requests https://jsonplaceholder.typicode.com/', () => {

    describe('/posts', () => {
  
        test('GET/Getting a resource', async () => {
            const response = await Functions.getApiResponse('https://jsonplaceholder.typicode.com/posts');
                expect(response.status).toBe(200);
                response.body.forEach((post: any) => {
                    expect(post).toHaveProperty('userId');
                    expect(post).toHaveProperty('id');
                    expect(post).toHaveProperty('title');
                    expect(post).toHaveProperty('body');
                });
        });
        test('GET/Getting an existing resource', async () => {
            const response = await Functions.getApiResponse("https://jsonplaceholder.typicode.com/posts/5");
                expect(response.status).toBe(200);
                expect(response.body).toEqual(Variables.expectedObjForGet);
        });
        test('GET/Getting a non-existent resource', async () => {
            const response = await Functions.getApiResponse("https://jsonplaceholder.typicode.com/posts/1000");
                expect(response.status).toBe(404);
                expect(response.message).toBe('Not Found');
        });
        test('GET/Filtering resources', async () => {
            const response = await Functions.getApiResponse('https://jsonplaceholder.typicode.com/posts?userId=1');
                expect(response.status).toBe(200);
                response.body.forEach((post: any) => {
                    expect(post).toHaveProperty('userId', 1);
                });
        });
        test('GET/Getting a list of nested resources', async () => {
            const response = await Functions.getApiResponse('https://jsonplaceholder.typicode.com/posts/1/comments');
                expect(response.status).toBe(200);
                response.body.forEach((post: any) => {
                    expect(post).toHaveProperty('postId', 1);
                });
        });
        test('POST/Creating a resource', async () => {
            const response = await Functions.postApiResponse("https://jsonplaceholder.typicode.com/posts", Variables.newPostData);
                expect(response.status).toBe(201);
                expect(response.body.id).toBeDefined();
                expect(response.body.title).toEqual(Variables.newPostData.title);
                expect(response.body.body).toEqual(Variables.newPostData.body);
                expect(response.body.userId).toEqual(Variables.newPostData.userId);
        });
        test('POST/Adding a resource with an incorrect url', async () => {
            const response = await Functions.postApiResponse("https://jsonplaceholder.typicode.com/posts/1", Variables.newPostData);
                expect(response.status).toBe(404);
                expect(response.message).toBe('Not Found');
        });
        test('PUT/Updating a resource', async () => {
            const response = await Functions.putApiResponse("https://jsonplaceholder.typicode.com/posts/2", Variables.updatedPostData);
                expect(response.status).toBe(200);
                expect(response.body).toEqual(Variables.updatedPostData);
        });
        test('PUT/Update a non-existent resource', async () => {
            const response = await Functions.putApiResponse("https://jsonplaceholder.typicode.com/posts/1000", Variables.updatedPostData);
                expect(response.status).toBe(500);
                expect(response.message).toBe('Internal Server Error');
        });
        test('PATCH/Patching a resource', async () => {
            const response = await Functions.patchApiResponse("https://jsonplaceholder.typicode.com/posts/3", Variables.correctedPostData);
            expect(response.status).toBe(200);
            expect(response.body).toEqual(Variables.correctedPostData);
        });
        test('PATCH/Correction of a resource without specifying id', async () => {
            const response = await Functions.patchApiResponse("https://jsonplaceholder.typicode.com/posts", Variables.correctedPostData);
            expect(response.status).toBe(404);
            expect(response.message).toBe('Not Found');
        });
        test('DELETE/Deleting a resource', async () => {
            const response = await Functions.deleteApiResponse("https://jsonplaceholder.typicode.com/posts/1");
            expect(response.status).toBe(200);
            expect(response.body).toStrictEqual({});
        });
        test('DELETE/Deleting a resource without specifying an id', async () => {
            const response = await Functions.deleteApiResponse("https://jsonplaceholder.typicode.com/posts");
            expect(response.status).toBe(404);
            expect(response.message).toBe('Not Found');
        });
    });

    describe('/comments', () => {
        test('POST/Adding a comment', async () => {
            const response = await Functions.postApiResponse("https://jsonplaceholder.typicode.com/comments", Variables.newCommentData);
                expect(response.status).toBe(201);
                expect(response.body.id).toBeDefined();
                expect(response.body.name).toEqual(Variables.newCommentData.name);
                expect(response.body.email).toEqual(Variables.newCommentData.email);
                expect(response.body.body).toEqual(Variables.newCommentData.body);
        });
        test('PUT/Updating a comment', async () => {
            const response = await Functions.putApiResponse("https://jsonplaceholder.typicode.com/comments/1", Variables.updatedCommentData);
                expect(response.status).toBe(200);
                expect(response.body).toEqual(Variables.updatedCommentData);
        });
        test('PATCH/Patching a comment', async () => {
            const response = await Functions.patchApiResponse("https://jsonplaceholder.typicode.com/comments/5", Variables.correctedCommentData);
            expect(response.status).toBe(200);
            expect(response.body).toEqual(Variables.correctedCommentData);
        });
    });
    describe('/photos', () => {
        test('POST/Adding a photo', async () => {
            const response = await Functions.postApiResponse("https://jsonplaceholder.typicode.com/photos", Variables.newPhotoData);
                expect(response.status).toBe(201);
                expect(response.body.id).toBeDefined();
                expect(response.body.albumId).toEqual(Variables.newPhotoData.albumId);
                expect(response.body.title).toEqual(Variables.newPhotoData.title);
                expect(response.body.url).toEqual(Variables.newPhotoData.url);
                expect(response.body.thumbnailUrl).toEqual(Variables.newPhotoData.thumbnailUrl);
        });
        test('PUT/Updating a photo', async () => {
            const response = await Functions.putApiResponse("https://jsonplaceholder.typicode.com/photos/1", Variables.updatedPhotoData);
                expect(response.status).toBe(200);
                expect(response.body).toEqual(Variables.updatedPhotoData);
        });
        test('PATCH/Patching a photo', async () => {
            const response = await Functions.patchApiResponse("https://jsonplaceholder.typicode.com/photos/5", Variables.correctedPhotoData);
            expect(response.status).toBe(200);
            expect(response.body).toEqual(Variables.correctedPhotoData);
        });
    });

    describe('/users', () => {
        test('POST/Updating a user', async () => {
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
        test('PUT/Updating a user', async () => {
            const response = await Functions.putApiResponse("https://jsonplaceholder.typicode.com/users/1", Variables.updatedUserData);
                expect(response.status).toBe(200);
                expect(response.body).toEqual(Variables.updatedUserData);
        });
        test('PATCH/Patching a user', async () => {
            const response = await Functions.patchApiResponse("https://jsonplaceholder.typicode.com/users/5", Variables.correctedUserData);
            expect(response.status).toBe(200);
            expect(response.body).toEqual(Variables.correctedUserData);
        });
    });
});