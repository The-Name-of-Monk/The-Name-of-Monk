# The Name of Monk: A Multimedia Museum Meta Mirror (MMMM)

Group project for the course Information Modelling and Web Technologies at @ DHDK, UNIBO.

> A web-based virtual exhibition exploring the semantic evolution of the "Monk" — from the strict discipline of **Benedictine Monasticism** to the rigorous freedom of **Jazz Improvisation**.

[🔴 **View the Website**](https://the-name-of-monk.github.io/The-Name-of-Monk) | [📄 **Read Documentation**](https://the-name-of-monk.github.io/The-Name-of-Monk/documentation.html)

---

## 📖 About The Project

**The Name of Monk** is a "Multimedia Museum Meta Mirror" (MMMM) project developed for the *Information Modeling and Web Technologies* course at the University of Bologna.

The project challenges the linear perception of history by juxtaposing two seemingly unrelated domains: **Medieval Monasticism** and **Modern Jazz**. Through a curated collection of 16 artifacts, the exhibition reveals shared underlying structures: the tension between **Rule (The Score)** and **Improvisation (The Spirit)**.

### Key Features
* **🎨 Dynamic Theme Engine:** Real-time switching between distinct visual metaphors (e.g., *Modern "White Cube"* vs. *Jazz "Blue Note"* aesthetics) using CSS Variables and LocalStorage.
* **🗺️ Interactive Spatial Map:** An SVG-based map allowing users to explore artifacts by their spatial "Room" location without page reloads.
* **📚 Progressive Disclosure:** Artifact details are presented in three levels of complexity (Simple, Standard, Complex) to cater to different audience needs.
* **🔄 Dual Narrative Paths:**
    * *The Evolution:* A chronological timeline (Carousel-based).
    * *Mental Discourse:* A thematic masonry grid stack.
* **📱 Fully Responsive:** Built with a custom Bootstrap 5 grid implementation.

---

## 🛠️ Technical Architecture

The project follows a **Client-Side MVC (Model-View-Controller)** architecture, ensuring a strict separation of data and presentation without requiring a backend server.

### Tech Stack
* **Frontend:** HTML5, CSS3 (Custom Properties), Vanilla JavaScript (ES6+).
* **Framework:** Bootstrap 5.3 (Grid System & Components).
* **Data Store:** JSON-based local storage (`data.js`).
* **Visualization:** Inline SVG (Map), Masonry Layout (Collections).
* **Metadata Standard:** Dublin Core Metadata Element Set (DCMES).

### Directory Structure
```text
The-Name-of-Monk/
├── css/
│   ├── base.css           # Structural layout (Skeleton)
│   ├── theme-modern.css   # Default "White Cube" skin
│   └── theme-jazz.css     # "Blue Note" Art Deco skin
├── js/
│   ├── data.js            # JSON Data Model (The "Database")
│   ├── gallery-logic.js   # Controller for Item Details
│   └── theme-manager.js   # Logic for Theme Switching & Persistence
├── images/                # Optimized assets
├── index.html             # Entry point (Split-screen layout)
├── map.html               # Interactive SVG Map
├── narratives.html        # Timeline & Thematic views
├── collection.html        # All the Selected Items
├── gallery.html           # Detailed Information of the Selected Items
├── aboutus.html           # Distribution of Resposibilities
├── disclaimer.html        # Copyright Disclaimer
└── documentation.html     # Technical documentation


Related Documents

https://my.feishu.cn/docx/ZjmRdnmXLobhEOxG3HlcuLrinTW

https://my.feishu.cn/docx/Xj8vda5gfobQElxo93uc1AhmnIr

https://my.feishu.cn/wiki/EyVfwKgIoiTTx1kV4KicklE8nrh
