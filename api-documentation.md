# 📘 API Documentation

**Base URL:** `http://localhost:3000`

## Overview

| Resource    | Method | Endpoint              | Description                                               |
| ----------- | ------ | --------------------- | --------------------------------------------------------- |
| `resources` | GET    | /get-all-help/zipcode | Retrieves all resources at the zipcode from the database. |
| `clients`   | POST   | /add-one-client       | Adds a new client to the database.                        |
| `leads`     | POST   | /add-one-lead         | Adds a new lead to the database                           |

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

**Response:**

```
Success! Client has been added.
```

---

## leads

### 🔹 POST `/add-one-lead`

**Description:** Adds a new lead to the leads table.

**Request Body:**

```json

```

**Response:**

```
Success! Lead has been added.
```

---
