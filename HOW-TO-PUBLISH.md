# How the portfolio goes live

The site is published automatically. **GitHub is the source of truth**:
every change pushed to the `main` branch of `hardikkhurana1803-cloud/hardik`
is built by Cloudflare (Workers & Pages → project **hardik**) and goes live
within a minute or two at:

- https://hardikdesign.com (your domain)
- https://hardik.hardikkhurana1803.workers.dev (Cloudflare's own address)

There is nothing to upload by hand.

## Making a change

- **Text, projects, experiments, links:** edit `content.js`.
- **Design and behaviour:** edit `index.html`.
- **Images:** add them under `img/` (keep the exact same capitals in the
  file name as in `content.js`: web hosts treat `NF-27.JPG` and `nf-27.jpg`
  as different files), then reference them in `content.js`.

Always start from the latest version on GitHub, not an old copy on your
computer, so you don't undo earlier changes.

## If a change doesn't appear

1. Wait two minutes, then hard-refresh (Ctrl+F5).
2. In Cloudflare: **Workers & Pages → hardik → Deployments**. If the newest
   change isn't listed, the message from GitHub was missed: press
   **Retry deployment**, or push any small change to nudge it.

## Useful settings in `content.js`

- `showExperiments`: show or hide Chapter IV.
- `cookingNote`: the "new experiments cooking" card at the end of the shelf
  (`""` hides it).
- `nextWorldNote`: the "next world" card after the projects (`""` hides it).
- `defaultSound`: the music that starts on a visitor's first click
  (`boombap`, `nightdrive`, `dusk`, `lofi`, `cosmic` or `"off"`).
- A world section with `layout: "row"` lines its photos up at one height.

## Files that are not part of the website

`.assetsignore` keeps `build.ps1`, this guide and other working files off
the public site. `build.ps1` is only needed if you ever want a stand-alone
copy of the site in a `site` folder (for example, to host it elsewhere).

## After launch

- Check the link preview at **linkedin.com/post-inspector**
  (preview image: `img/og.jpg`).
- Put https://hardikdesign.com in your LinkedIn, Instagram bio, Behance,
  résumé and email signature.
