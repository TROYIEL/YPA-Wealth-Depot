# YPA Wealth Depot

Next.js site with an Appwrite member portal at `/portal`.

## Setup

1. Run `npm ci` and copy `.env.example` to `.env.local`. Set the actual Appwrite endpoint/region shown in your project console. The project ID in the example is the project linked in the request. Add a **new** server API key with `databases.read` and `databases.write` scopes for initial schema setup. Never commit the key or put it in a `NEXT_PUBLIC_` variable.
2. Run `node --env-file=.env.local scripts/setup-appwrite.mjs` to create the database, collections, fields and indexes. The script is repeatable and preserves existing records. Check the database ID before running against an existing project.
3. In Appwrite Auth, create or invite a real member user, then run `node --env-file=.env.local scripts/link-member.mjs USER_ID MEMBER_NUMBER "Full name" PHONE`. The user ID must match their Appwrite Auth `$id`. Create financial records from verified SACCO data in the Appwrite console or a trusted staff import. Set `userId` to that Auth ID and **document read permission** to `user:USER_ID`. Leave collection read permissions empty. Amounts are UGX. No balances are fabricated by setup.
4. Set `APPWRITE_ENDPOINT`, `APPWRITE_PROJECT_ID`, `APPWRITE_DATABASE_ID` and a newly created `APPWRITE_API_KEY` with `databases.write` access in Vercel for production. The key stays server-side and is used only to create authenticated requests; member reads use their own Appwrite sessions. Deploy, then sign in at `/portal/login` with the Appwrite member credentials.

Member requests are saved in `member_requests` as `pending`. Staff review them in Appwrite and update status after off-system checks. A request does not move funds or change a savings balance. The public floating withdrawal form still uses the existing Google Sheets integration; portal requests use Appwrite. LoanDisk records are **not** synchronized automatically.

**Security:** The old `createDatabase.js` contained a committed API key for a different Appwrite project. Revoke/rotate that key in its original Appwrite project and remove it from repository history if possible; deleting the file from the latest commit cannot make the leaked key safe. Do not reuse it for this portal.
