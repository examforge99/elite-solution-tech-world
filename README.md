# Elite Solution Tech World website

A static-first, mobile-first website starter built with plain HTML, CSS and JavaScript. No backend, database, framework or build step is required.

## Current status

**Initial draft. Not approved for public launch.**

- The existing Google Sites website is not modified by this repository.
- All artwork in the gallery and hero is temporary SVG illustration, not evidence of completed customer projects.
- Contact delivery remains inactive until official contact details are verified.
- No testimonials, certifications, project counts or performance claims have been invented.

## Project structure

```text
elite-solution-tech-world/
├── index.html
├── css/styles.css
├── js/main.js
├── js/contact.js
├── assets/icons/bolt.svg
├── assets/images/
│   ├── hero-placeholder.svg
│   ├── approach-placeholder.svg
│   ├── project-solar-placeholder.svg
│   ├── project-inverter-placeholder.svg
│   └── project-electrical-placeholder.svg
├── robots.txt
├── sitemap.xml
└── README.md
```

## Preview locally

No build step or package installation is required.

1. Clone or download this repository.
2. Open `index.html` in a modern browser.
3. For a local web-server preview, run `python -m http.server 8000` in the project directory and visit `http://localhost:8000`.

## Before launch

- [ ] Verify the official phone number, WhatsApp number, email, service area and business contact details.
- [ ] Configure `window.ELITE_CONTACT` in `js/contact.js`. WhatsApp number should contain international digits only, without `+`, spaces or punctuation.
- [ ] Replace temporary SVG illustrations with authentic, approved project photos and update alt text.
- [ ] Confirm all service descriptions with the business owner.
- [ ] Add verified business location/service area only if approved for display.
- [ ] Replace the placeholder domain in `sitemap.xml` and the sitemap comment in `robots.txt` before launch.
- [ ] Test navigation, contact form, keyboard access, mobile layout and links on Android and desktop.
- [ ] Review spelling, metadata, contrast, image sizes and loading performance.
- [ ] Obtain explicit approval before public deployment or changing the existing website.

## Contact configuration

Edit `js/contact.js`:

```js
window.ELITE_CONTACT = {
  whatsappNumber: "2348012345678",
  phoneNumber: "",
  emailAddress: ""
};
```

The number above is an example format only, not the business number. Replace it with a verified official number. The form will not pretend to send an enquiry while delivery is unconfigured.

## Hosting

The site can be hosted by a static hosting provider such as Cloudflare Pages after review and explicit approval. Storing code in GitHub does not itself publish the website. No deployment has been configured by this starter.
