# YPA Wealth Depot

Next.js website with an Appwrite content manager, staff workspace and member portal.

## What works in this phase

- `/staff/content`: staff with `admin` or `editor` labels can upload public images and create/edit/publish news, blogs and events. Published content appears on the home page and `/news`; drafts are private.
- `/staff/withdrawals`: staff with `admin` or `finance` labels can view client withdrawal requests and mark them approved or rejected with a note. The client sees the status and note in `/portal`. **Approval only changes status; it does not transfer money.**
- `/staff/logs`: `admin` users can view an activity log of content changes, media uploads and withdrawal decisions.
- `/portal`: member login, Appwrite-recorded savings, shares, loans, transactions, notifications and withdrawal requests. These figures are not yet synchronized with LoanDisk. Staff roles do not expose the staff area in public navigation; server checks protect every staff page and write endpoint.

## Appwrite setup

1. Run `npm ci`, copy `.env.example` to `.env.local`, and set the **actual region endpoint** for the Appwrite project. The example project ID is the one supplied by the user. Add a fresh server API key with `databases.read`, `databases.write`, `storage.read`, and `storage.write` scopes. Add `users.read` and `users.write` only if you plan to use the staff assignment script.
2. Run `node --env-file=.env.local scripts/setup-appwrite.mjs`. This repeatable script creates the `ypa_portal` database, private financial collections, `site_content`, `audit_logs`, indexes, and `site_media` bucket. It preserves existing data. Before running against an existing project, confirm the database ID and permissions.
3. Create or invite member and staff accounts in Appwrite Auth. Link a real member with `node --env-file=.env.local scripts/link-member.mjs USER_ID MEMBER_NUMBER "Full name" PHONE`. The user ID must match their Appwrite Auth `$id`. Add only **verified** financial records. Set each financial document's `userId` to the Auth ID and its document read permission to `user:USER_ID`. Leave collection read permissions empty.
4. Assign staff roles in the Appwrite console or run `node --env-file=.env.local scripts/assign-staff.mjs USER_ID finance` (or `editor` / `admin`). This script replaces only the three staff role labels and preserves unrelated labels. Give these labels only to trusted staff. The `finance` role reviews withdrawals; `editor` manages content; `admin` can do both and view logs.
5. Configure `APPWRITE_ENDPOINT`, `APPWRITE_PROJECT_ID`, `APPWRITE_DATABASE_ID` and `APPWRITE_API_KEY` in Vercel. Never expose the API key with a `NEXT_PUBLIC_` prefix. Visit `/portal/login` to sign in. Staff members can go directly to `/staff`.

The former public floating withdrawal form on the home page has been replaced with a member portal link, so new tracked requests come from authenticated members. The legacy `/api/withdrawal` endpoint remains for existing integrations and still sends to Google Sheets; it is not the source of portal statuses.

## LoanDisk integration still needed

The public LoanDisk changelog mentions API features, but the account-specific API documentation, base URL, authentication method, API credentials, and borrower-to-Appwrite-user mapping have not been supplied. Do not treat Appwrite financial records as live LoanDisk balances. Connect a server-only read adapter for savings, shares (if LoanDisk supports them), loans and repayment history after the exact API contract and access are verified. Payment initiation also needs the supported payment API, verification callbacks and reconciliation rules; this phase does not initiate payments.

## Security note

The removed `createDatabase.js` committed an API key for another Appwrite project. **Revoke/rotate it** in that project. Removing the file from the latest commit does not remove the secret from Git history.
