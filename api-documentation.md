# 📘 API Documentation

**Base URL:** `http://localhost:3000`

## Overview

| Resource              | Method | Endpoint              | Description                                               |
| --------------------- | ------ | --------------------- | --------------------------------------------------------- |
| `resources`           | GET    | /get-all-help/zipcode | Retrieves all resources at the zipcode from the database. |
| `clients`             | POST   | /add-one-client       | Adds a new client to the database.                        |
| `potential_resources` | POST   | /add-one-resource     | Adds a potential resource to the database                 |

## resources

---

### 🔹 GET `/get-all-help/zipcode`

**Description:** Retrieves all resources at the zipcode from the database.

**Response:**

```json
[
  {
    "id": 1,
    "name": "North West Justice Project",
    "purpose": null,
    "address": "715 Tacoma Ave S",
    "city": "Tacoma",
    "state": "WA",
    "website": "https://nwjustice.org/get-legal-help",
    "phone_number": "2532727879",
    "zipcode": 98402,
    "resource_type": "legal"
  },
  {
    "id": 10,
    "name": "NAMI (National Alliance on Mental Illness)",
    "purpose": "NAMI Pierce County provides support, education, advocacy, and public awareness so that all individuals and families affected by mental illness can build better lives.",
    "address": "3569 East Roosevelt Ave.",
    "city": "Tacoma",
    "state": "WA",
    "website": "https://namipierce.org/contact/",
    "phone_number": "(800) 576-7764",
    "zipcode": 98402,
    "resource_type": "mental health"
  }
]
```

---

## clients

### 🔹 POST `/add-one-client`

**Description:** Adds one client to the database
**Request Body:**

```json
{
  "name": "Ahemed Arbery",
  "city": "Brunswick",
  "state": "CA",
  "email": "arbery.ahmed@yahoo.in",
  "message": "End hatred and let people live."
}
```

**Response:**

```
Success! Client has been added.
```

---

## potential_resources

### 🔹 POST `/add-one-resoource`

**Description:** Adds a potential resource to the leads table.

**Request Body:**

```json
{
  "name": "Money support",
  "purpose": "Help people",
  "address": "121 Main St.",
  "city": "San Francisco",
  "state": "CA",
  "website": "support.com",
  "phone": "902-121-1237",
  "zipcode": "90210",
  "resourceType": "Medical",
  "contactName": "Charlie",
  "email": "ck@gmail.com",
  "contactPhone": "902-112-3124"
}
```

**Response:**

```
Success! Resource has been added.
```

---
