# User Flow Summary: Newledge Portal

## Target Application
- **URL:** https://portal.test.new-ledge.com

---

## 1. Login Flow

### Steps
1. Navigate to [https://portal.test.new-ledge.com](https://portal.test.new-ledge.com)
2. Click the **Login** button to go to the login page ([/login](https://portal.test.new-ledge.com/login))
3. Enter credentials:
   - **Username:** admin1@new-ledge.com
   - **Password:** Admin1234!
4. Complete reCaptcha (currently blocked by site error)
5. Click **Login** to submit

### Authentication Notes
- Login form fields:
  - Email (textbox)
  - Password (textbox)
- reCaptcha v3 is present (currently returns error: `Invalid site key or not loaded`)
- Login is currently blocked due to reCaptcha error; cannot proceed to authenticated flows

---

## 2. Observed API Endpoints (Pre-Login)
| Endpoint                                                                 | Method | Purpose/Notes                |
|--------------------------------------------------------------------------|--------|------------------------------|
| https://ln3oab229k.execute-api.eu-west-1.amazonaws.com/test/api/auth/getSelect | GET    | Fetches authentication options |
| https://ln3oab229k.execute-api.eu-west-1.amazonaws.com/test/api/auth/departments | GET    | Fetches department info        |
| https://ln3oab229k.execute-api.eu-west-1.amazonaws.com/test/api/campaign/4d7c4b92-c9b3-4846-9a30-34ca2921e059 | GET    | Fetches campaign data         |

Other static assets and reCaptcha scripts are also loaded.

---

## 3. Critical Paths & Actions (Blocked)
- **Login**: Blocked by reCaptcha error
- **Further user flows** (browsing, cart, checkout, etc.): Not accessible until login is successful

---

## 4. Next Steps / Recommendations
- Resolve reCaptcha v3 site key error to enable login and further exploration
- Once authenticated, document:
  - Main dashboard/user landing page
  - Browsing flows
  - Any add-to-cart, checkout, or other critical user actions
  - Additional API endpoints and payloads

---

*This document will be updated as soon as authenticated access is possible.* 