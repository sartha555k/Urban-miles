# Captain Endpoints Documentation

## Register Captain

**Endpoint:** `POST /captains/register`

Registers a new captain. Requires:

- `fullname.firstName`: String, required, min 2 chars
- `fullname.lastName`: String, required, min 2 chars
- `emailId`: String, required, valid email
- `password`: String, required, min 3 chars
- `vehicle.color`: String, required, min 3 chars
- `vehicle.plate`: String, required, min 3 chars
- `vehicle.capacity`: Integer, required, min 1
- `vehicle.vehicleType`: String, required, one of `car`, `motorcycle`, `auto`

**Request Example:**
```json
{
  "fullname": { "firstName": "John", "lastName": "Doe" },
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

**Success Response:**
201 Created
```json
{
  "token": "<JWT_TOKEN>",
  "captain": {
    "_id": "<captain_id>",
    "fullname": { "firstName": "John", "lastName": "Doe" },
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

**Validation Error:** 400 Bad Request
```json
{
  "errors": [ { "msg": "Error message", "param": "fieldName", "location": "body" } ]
}
```

**Duplicate Email:** 400 Bad Request
```json
{ "message": "Captain already exists with this email" }
```

**Other Errors:** 500 Internal Server Error
```json
{ "error": "Error message" }
```

---

## Captain Login

**Endpoint:** `POST /captains/login`

Authenticates a captain with email and password.

- `emailId`: String, required, valid email
- `password`: String, required, min 3 chars

**Request Example:**
```json
{
  "emailId": "john.doe@example.com",
  "password": "yourpassword"
}
```

**Success Response:**
200 OK
```json
{
  "token": "<JWT_TOKEN>",
  "captain": {
    "_id": "<captain_id>",
    "fullname": { "firstName": "John", "lastName": "Doe" },
    "emailId": "john.doe@example.com"
    // ...other captain fields
  }
}
```

**Validation Error:** 400 Bad Request
```json
{
  "errors": [ { "msg": "Error message", "param": "fieldName", "location": "body" } ]
}
```

**Authentication Error:** 400 Bad Request
```json
{ "message": "Invalid email or password" }
```

---

## Captain Profile

**Endpoint:** `GET /captains/profile`

Returns the profile of the authenticated captain. Requires JWT token in `Authorization: Bearer <token>` header or as a cookie named `token`.

**Success Response:**
200 OK
```json
{
  "captain": {
    "_id": "<captain_id>",
    "fullname": { "firstName": "John", "lastName": "Doe" },
    "emailId": "john.doe@example.com"
    // ...other captain fields
  }
}
```

**Unauthorized:** 401 Unauthorized
```json
{ "message": "Unauthorized !!" }
```

**Not Found:** 404 Not Found
```json
{ "message": "Captain not found" }
```

---

## Captain Logout

**Endpoint:** `GET /captains/logout`

Logs out the authenticated captain by blacklisting the JWT token and clearing the authentication cookie. Requires JWT token in `Authorization: Bearer <token>` header or as a cookie named `token`.

**Success Response:**
200 OK
```json
{ "message": "Logged out successfully" }
```

**Unauthorized:** 401 Unauthorized
```json
{ "message": "Unauthorized !!" }
```

**Other Errors:** 500 Internal Server Error
```json
{ "error": "Error message" }
```

---

## Notes

- All fields are required unless stated otherwise.
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

---

# Maps Endpoints Documentation

## Get Coordinates

**Endpoint:** `GET /maps/get-coordinates`

Returns latitude and longitude for a given address.

- **Query Parameters:**
  - `address`: String, required, min 3 chars

**Authentication:** JWT token required (`Authorization: Bearer <token>` or cookie `token`).

**Success Response:**
```json
{
  "lat": 22.7196,
  "lng": 75.8577
}
```

**Validation Error:** 400 Bad Request  
**Unauthorized:** 401 Unauthorized  
**Not Found:** 404 Not Found

---

## Get Distance and Time

**Endpoint:** `GET /maps/get-distance-time`

Returns distance and estimated travel time between origin and destination.

- **Query Parameters:**
  - `origin`: String, required, min 3 chars
  - `destination`: String, required, min 3 chars

**Authentication:** JWT token required.

**Success Response:**
```json
{
  "distance": { "text": "2.2 km", "value": 2200 },
  "duration": { "text": "8 mins", "value": 480 }
}
```

**Validation Error:** 400 Bad Request  
**Unauthorized:** 401 Unauthorized

---

## Get Location Suggestions

**Endpoint:** `GET /maps/get-suggestions`

Returns autocomplete suggestions for location input.

- **Query Parameters:**
  - `input`: String, required, min 3 chars

**Authentication:** JWT token required.

**Success Response:**
```json
[
  { "description": "Vijay Nagar, Indore, India", ... },
  ...
]
```

**Validation Error:** 400 Bad Request  
**Unauthorized:** 401 Unauthorized

---

# Ride Endpoints Documentation

## Create Ride

**Endpoint:** `POST /rides/create`

Creates a new ride request.

- **Request Body:**
  - `pickup`: String, required, min 3 chars
  - `destination`: String, required, min 3 chars
  - `vehicleType`: String, required, one of `auto`, `car`, `moto`

**Authentication:** JWT token required.

**Success Response:**
```json
{
  "_id": "<ride_id>",
  "user": "<user_id>",
  "pickup": "122/A",
  "destination": "Vijay Nagar, Indore",
  "fare": 99,
  "status": "pending",
  "otp": "1234"
  // ...other ride fields
}
```

**Validation Error:** 400 Bad Request  
**Unauthorized:** 401 Unauthorized

---

## Notes

- All endpoints require authentication unless stated otherwise.
- Validation errors return an array of error messages.
- JWT tokens can be sent via `Authorization` header or as a cookie named `token`.
