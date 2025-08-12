# User Registration Endpoint Documentation

## Endpoint

`POST /users/register`

## Description

Registers a new user in the system. Requires user details including first name, last name, email address, and password. Returns a JWT token and user information upon successful registration.

## Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "emailId": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Field Requirements

- `fullname.firstName`: String, required, minimum 2 characters
- `fullname.lastName`: String, required, minimum 2 characters
- `emailId`: String, required, must be a valid email address
- `password`: String, required, minimum 3 characters

## Responses

### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<JWT_TOKEN>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "emailId": "john.doe@example.com"
      // ...other user fields
    }
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "fieldName",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

### Other Errors

- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "error": "Error message"
  }
  ```

## Example Request

```http
POST /users/register
Content-Type: application/json

{
  "fullname": {
    "firstName": "Jane",
    "lastName": "Smith"
  },
  "emailId": "jane.smith@example.com",
  "password": "securepass"
}
```


## Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64d5f8c2e4b0a2a1c8e4b0a2",
    "fullname": {
      "firstName": "Jane",
      "lastName": "Smith"
    },
    "emailId": "jane.smith@example.com"
    // ...other user fields
  }
}
```

## Notes


- All fields are required.
- Passwords are securely hashed before storage.
- Returns a JWT token for authentication.

---

# User Login Endpoint Documentation

## Endpoint

`POST /users/login`

## Description

Authenticates a user with email and password. Returns a JWT token and user information if credentials are valid.

## Request Body

Send a JSON object with the following structure:

```json
{
  "emailId": "jane.smith@example.com",
  "password": "securepass"
}
```

### Field Requirements

- `emailId`: String, required, must be a valid email address
- `password`: String, required, minimum 3 characters

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "_id": "64d5f8c2e4b0a2a1c8e4b0a2",
      "fullname": {
        "firstName": "Jane",
        "lastName": "Smith"
      },
      "emailId": "jane.smith@example.com"
      // ...other user fields
    }
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "fieldName",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Other Errors

- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "error": "Error message"
  }
  ```

## Example Request

```http
POST /users/login
Content-Type: application/json

{
  "emailId": "jane.smith@example.com",
  "password": "securepass"
}
```

## Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64d5f8c2e4b0a2a1c8e4b0a2",
    "fullname": {
      "firstName": "Jane",
      "lastName": "Smith"
    },
    "emailId": "jane.smith@example.com"
    // ...other user fields
  }
}
```
