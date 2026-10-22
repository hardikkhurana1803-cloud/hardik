# Putting the portfolio online

The folder to upload is **`site`**. Never upload the outer folder.

## 1. Rebuild after any change

Edit `content.js` (text, projects, links) or `index.html` (design), then run this in this folder:

```
powershell -ExecutionPolicy Bypass -File build.ps1
```

Once you have a domain, include it so link previews work:

```
powershell -ExecutionPolicy Bypass -File build.ps1 -Domain https://yourdomain.com
```

## 2. Put it online for free (Netlify)

1. Go to **app.netlify.com/drop** and sign up (email or GitHub).
2. Drag the **`site`** folder onto the page. In a few seconds it's live at an address like `random-name-123.netlify.app`.
3. Give it a better name: **Site configuration → Change site name**, for example `hardikkhurana` → `hardikkhurana.netlify.app`.

## 3. Connect your own domain

1. Buy a domain from a registrar such as Namecheap, GoDaddy, Hostinger or Cloudflare. `.com` is usually ₹800–1,200 a year; `.in` is often cheaper.
2. In Netlify: **Domain management → Add a domain** and enter it.
3. Point the domain at Netlify. Pick one:
   - **Easiest:** choose *Netlify DNS*, then copy the 4 nameservers Netlify shows into your registrar's **Nameservers** setting.
   - **Or keep the registrar's DNS:** add an **A record** for `@` → `75.2.60.5`, and a **CNAME** for `www` → `yoursite.netlify.app`.
4. Wait for it to connect (minutes, sometimes up to 24 hours). Netlify adds HTTPS (the padlock) automatically.
5. Rebuild with your domain (step 1, second command) and upload again: **Deploys → drag the `site` folder** into the box.

## 4. Updating later

Edit → run `build.ps1` → Netlify **Deploys** → drag the `site` folder. The address stays the same.

## Images not showing online?

- The `img` folder must be uploaded too, next to `index.html`, with the same subfolders (`img/netflix/`, `img/airindia/`, …).
- Capitals must match exactly. Windows ignores them, web hosts don't: `NF-27.JPG` ≠ `nf-27.jpg`. `build.ps1` now warns about any image that's missing or named differently.
- A missing image shows the project's colours instead of a broken icon; press F12 → Console on the live site to see which file it couldn't find.

## 5. After launch

- Check the link preview at **linkedin.com/post-inspector**.
- Put the link in your LinkedIn, Instagram bio, Behance, résumé and email signature.
