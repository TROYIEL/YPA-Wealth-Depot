# YPA Client Portal setup

The public navigation button opens `/client-portal/login`. An admin verifies a person and their LoanDisk member ID before creating their account. The member receives Appwrite's password recovery email as an activation link. The member sets a password, signs in, views their account and submits withdrawal requests. There is no public signup or ability to choose a LoanDisk member ID.

## Configure

The portal targets Appwrite project `6ab3d2a9002acf1414c2` at `https://fra.cloud.appwrite.io/v1`. These are defaults in the server and setup scripts; environment values can override them.

1. Rotate the exposed Appwrite API key that was committed previously in `createDatabase.js`. Removing the file from the current tree does not remove it from Git history. Do not reuse that key.
2. Create a new Appwrite API key with least privileges for Users, Sessions and Database read/write/schema operations. Set server variables from `.env.example` in local development and Vercel. Do not use `NEXT_PUBLIC_` for secrets. Add your deployed domain and localhost as Appwrite web platforms for recovery redirects. Configure Appwrite SMTP so activation emails are delivered. Create a database with the configured ID.
3. Run `node scripts/setup-client-portal.mjs`. Check both collections' attributes have reached `available` in Appwrite. Keep collection permissions empty and document security enabled. This prevents members from editing status, profile mapping or withdrawal requests. The server uses an API key to write requests; the staff portal can later use a separate role controlled server API to review them.
4. Verify a member's identity and LoanDisk member ID in your office records, then run `node scripts/invite-client.mjs "member@example.com" "Member Name" "verified-loandisk-id"`. Check Appwrite messaging logs. Appwrite sends a one-use password setup link. A second invitation for an existing user should use the sign-in page's reset flow.
5. Supply LoanDisk's API documentation, base URL, auth format, sample redacted response, member identifier mapping, and whether shares are units or UGX. The server-only adapter in `lib/portal/loandisk.ts` currently accepts a normalized JSON endpoint returning `{ "savingsBalance": 125000, "shares": 8, "currency": "UGX", "loans": [{ "id": "LN1", "name": "Car loan", "outstanding": 200000, "status": "active", "nextPayment": "2026-10-01" }] }`. Set the endpoint template and key only after adapting and validating the real LoanDisk contract. Without them, no financial values are invented: the dashboard says the connection is pending.

Withdrawal requests are stored with `pending` status in Appwrite, linked to the authenticated user's ID and their admin verified member ID. They do not initiate any transfer or change LoanDisk balances. The staff portal can later implement status updates and audit logs. The old public Google Sheets withdrawal form is a separate flow and is not part of the authenticated request history.

## Security notes

Appwrite server sessions are stored in HTTP-only cookies. Member IDs are read only from administrator created profiles. Each portal request rechecks the session and profile. Never put the LoanDisk key or Appwrite API key in client-side code. For production banking use, add login and recovery abuse throttling, MFA, formal recipient verification, approval controls and an audit trail before enabling payout processing.
