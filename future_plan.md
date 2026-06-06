# PMP Drill App — Future Plans

## Deployment: Cloudflare Pages + pmp-drill.rabbyz.com

### Step 1 — GitHub Repo

1. github.com → New repository → name: `pmp-drill` → Public → Create (empty)

### Step 2 — Push Files

```bash
cd "i:/My Drive/000 PMP Reading/PMASPIRE Model Q Review/0 Topic wise contents/Topic Driller"
git init
git add .
git commit -m "Initial PMP drill app"
git remote add origin https://github.com/YOUR_USERNAME/pmp-drill.git
git branch -M main
git push -u origin main
```

> First push: use GitHub Personal Access Token (github.com/settings/tokens, scope: `repo`)

### Step 3 — Cloudflare Pages

1. dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git
2. Connect GitHub → select repo `pmp-drill` → Begin setup
3. Build command: *(blank)* | Output directory: `/`
4. Save and Deploy → get `pmp-drill-abc.pages.dev` URL

### Step 4 — Custom Domain

1. Pages project → Custom domains → Set up custom domain
2. Enter `pmp-drill.rabbyz.com` → Continue
3. Auto-creates CNAME (domain already on Cloudflare) → Confirm
4. Wait 1–2 min → live

### Step 5 — Future Updates (auto-deploy)

```bash
git add .
git commit -m "update"
git push
# Cloudflare redeploys in ~20 seconds automatically
```

### Notes

- Spaces in filenames: handled by `encodeURI()` already in index.html
- Flow: Local → git push → GitHub → Cloudflare Pages auto-deploy → pmp-drill.rabbyz.com

---

## User Registration & Cross-Device Sync

- Add Firebase Auth (email/password or Google OAuth)
- Store User Choice uploads per user in Firestore
- Enables cross-device sync for UC Drilling section
- No backend server needed — Firebase SDK via CDN
- Free on Spark plan for personal use
- **Alternative:** Supabase (open source, PostgreSQL) or Clerk (polished UI)
