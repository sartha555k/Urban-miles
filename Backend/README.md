
# Captain Registration Endpoint Documentation

## Endpoint

`POST /captains/register`

## Description

Registers a new captain in the system. Requires captain details including first name, last name, email address, password, and vehicle information. Returns a JWT token and captain information upon successful registration.

## Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "emailId": "john.doe@example.com",
  "password": "yourpassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Field Requirements

- `fullname.firstName`: String, required, minimum 2 characters
- `fullname.lastName`: String, required, minimum 2 characters
- `emailId`: String, required, must be a valid email address
- `password`: String, required, minimum 3 characters
- `vehicle.color`: String, required, minimum 3 characters
- `vehicle.plate`: String, required, minimum 3 characters
- `vehicle.capacity`: Integer, required, minimum 1
- `vehicle.vehicleType`: String, required, one of `car`, `motorcycle`, `auto`

## Responses

### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<JWT_TOKEN>",
    "captain": {
      "_id": "<captain_id>",
      "fullname": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "emailId": "john.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
      // ...other captain fields
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

### Duplicate Email

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "message": "Captain already exists with this email"
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
POST /captain/register
Content-Type: application/json

{
  "fullname": {
    "firstName": "Jane",
    "lastName": "Smith"
  },
  "emailId": "jane.smith@example.com",
  "password": "securepass",
  "vehicle": {
    "color": "Blue",
    "plate": "XYZ789",
    "capacity": 3,
    "vehicleType": "auto"
  }
}
```

## Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "64d5f8c2e4b0a2a1c8e4b0a2",
    "fullname": {
      "firstName": "Jane",
      "lastName": "Smith"
    },
    "emailId": "jane.smith@example.com",
    "vehicle": {
      "color": "Blue",
      "plate": "XYZ789",
      "capacity": 3,
      "vehicleType": "auto"
    }
    // ...other captain fields
  }
}
```

---

## Notes

- All fields are required.
- Passwords are securely hashed before storage.
- Returns a JWT token for authentication.
- Vehicle type must be one of: `car`, `motorcycle`, `auto`.

---

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

---

# User Profile Endpoint Documentation

## Endpoint

`GET /users/profile`

## Description

Returns the profile information of the authenticated user. Requires a valid JWT token in the request (via cookie or Authorization header).

## Authentication

Send the JWT token in the `Authorization` header as `Bearer <token>` or as a cookie named `token`.

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
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

### Unauthorized

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized !!"
  }
  ```

### Not Found

- **Status Code:** `404 Not Found`
- **Body:**
  ```json
  {
    "message": "User not found"
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
GET /users/profile
Authorization: Bearer <JWT_TOKEN>
```

## Example Response

```json
{
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

---

# User Logout Endpoint Documentation

## Endpoint

`GET /users/logout`

## Description

Logs out the authenticated user by blacklisting the JWT token and clearing the authentication cookie. Requires a valid JWT token in the request.

## Authentication

Send the JWT token in the `Authorization` header as `Bearer <token>` or as a cookie named `token`.

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

### Unauthorized

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized !!"
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
GET /users/logout
Authorization: Bearer <JWT_TOKEN>
```

## Example Response

```json
{
  "message": "Logged out successfully"
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
