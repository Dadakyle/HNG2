## routes
  - get single user
  - create new user
  - update user
  - delete user

## GET REQUEST
https://hng-task2-lqw0.onrender.com/650377164a0f4023f127033e

```
{
    "data": {
        "_id": "650377164a0f4023f127033e",
        "name": "Dada Kyle",
        "email": "kyle@gmail.com",
        "createdAt": "2023-09-14T21:11:50.347Z",
        "updatedAt": "2023-09-14T21:11:50.347Z",
        "__v": 0
    },
    "message": "successful",
    "status": true
}
```

## POST REQUEST
https://hng-task2-lqw0.onrender.com
```
{
    "name":"Dada Kyle",
    "email":"kyle@gmail.com"
}
```

```
{
    "data": {
        "name": "Dada Kyle",
        "email": "kyle@gmail.com",
        "_id": "650377164a0f4023f127033e",
        "createdAt": "2023-09-14T21:11:50.347Z",
        "updatedAt": "2023-09-14T21:11:50.347Z",
        "__v": 0
    },
    "message": "successful",
    "status": true
}
```
## PUT REQUEST
https://hng-task2-lqw0.onrender.com/650377164a0f4023f127033e

```
{
    "name":"Dada Kyle updated",
    "email":"kyle@gmail.com"
}
```

```
{
    "data": {
        "_id": "650377164a0f4023f127033e",
        "name": "Dada Kyle updated",
        "email": "kyle@gmail.com",
        "createdAt": "2023-09-14T21:11:50.347Z",
        "updatedAt": "2023-09-14T21:13:43.358Z",
        "__v": 0
    },
    "message": "successful",
    "status": true
}
```

## DELETE REQUEST
https://hng-task2-lqw0.onrender.com/650377164a0f4023f127033e

```
{
    "message": "successful",
    "status": true
}
```