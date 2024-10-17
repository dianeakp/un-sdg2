import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class unSdg extends DDDSuper(LitElement) {
  static get tag() {
    return "un-sdg";
  }

  constructor() {
    // initializes properties so tit can be a blank canvas for the user to assign values to
    super();
    this.goal = "circle";
    this.img = new URL("../public/svgs/circle.png", import.meta.url).href;
    //allows us use and access svgs by creating a link to it in the system.
    //import.meta.url allows us establish a path relative to where we are right now
    //../ means get out or src and find lib
    this.alt = "Sustainable Developments Logo";
    this.colorOnly = false;
    this.loading = "lazy";
    this.fetchPriority = "low";
  }

  static get properties() {
    return {
      //properties are defined here so we know what input type they take.
      goal: { type: String },
      img: { type: String },
      alt: { type: String },

      //taking string allows for the most versatile applications
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          width: var(--width, 254px);
          height: var(--height, 254px);
          background-color: white;
          // ensures the svgs and colors are in uniform squares
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        div {
          padding: 0;
          margin: 0;
        }
      `,
    ];
  }

  updated(changedProperties) {
    //this does...
    if (changedProperties.has("width")) {
      this.style.setProperty("--width", this.width);
    }

    //this does...
    if (changedProperties.has("height")) {
      this.style.setProperty("--height", this.height);
    }

    //this does...
    if (changedProperties.has("goal")) {
      this.updateGoalInfo();
    }

    //this does...
    if (changedProperties.has("colorOnly")) {
      this.isImageVisible = !this.colorOnly;
    }

    //this does...
    if (changedProperties.has("loading")) {
      this.loading = this.getAttribute("loading"); // || [insert other code]
    }

    //this does...
    if (changedProperties.has("fetchPriority")) {
      this.fetchPriority = this.getAttribute("fetchPriority"); // || [insert other code]
    }
  }

  //when a value changes,  function runs
  updateGoalInfo() {
    //checks for the value it was given and updates or assigns img, alt text and color as needed
    const goals = {
      //update ALT, IMAGE and COLOR (update everything)
      1: {
        img: "../lib/svgs/goal-1.svg",
        color: "#EB1C2C",
        alt: "Goal 1: No Poverty",
      },

      2: {
        img: "../lib/svgs/goal-2.svg",
        color: "#D2A02A",
        alt: "Goal 2: Zero hunger",
      },

      3: {
        img: "../lib/svgs/goal-3.svg",
        color: "#2C9B48",
        alt: "Goal 3: Good health and well-being",
      },

      4: {
        img: "../lib/svgs/goal-4.svg",
        color: "#C21F33",
        alt: "Goal 4: Quality education",
      },

      5: {
        img: "../lib/svgs/goal-5.svg",
        color: "#EF402A",
        alt: "Goal 5: Gender equality",
      },

      6: {
        img: "../lib/svgs/goal-6.svg",
        color: "#00ADD8",
        alt: "Goal 6: Clean water and sanitation",
      },

      7: {
        img: "../lib/svgs/goal-7.svg",
        color: "#FDB713",
        alt: "Goal 7: Affordable and clean energy",
      },

      8: {
        img: "../lib/svgs/goal-8.svg",
        color: "#8F1737",
        alt: "Goal 8: Decent work and economic growth",
      },

      9: {
        img: "../lib/svgs/goal-9.svg",
        color: "#F36D24",
        alt: "Goal 9: Industry, innovation and infrastructure",
      },

      10: {
        img: "../lib/svgs/goal-10.svg",
        color: "#E01583",
        alt: "Goal 10: Reduced inequalities",
      },

      11: {
        img: "../lib/svgs/goal-11.svg",
        color: "#F99D25",
        alt: "Goal 11: Sustainable cities and communities",
      },

      12: {
        img: "../lib/svgs/goal-12.svg",
        color: "#CF8D2A",
        alt: "Goal 12: Responsible consumption and production",
      },

      13: {
        img: "../lib/svgs/goal-13.svg",
        color: "#48773D",
        alt: "Goal 13: Climate action",
      },

      14: {
        img: "../lib/svgs/goal-14.svg",
        color: "#007DBB",
        alt: "Goal 14: Life below water",
      },

      15: {
        img: "../lib/svgs/goal-15.svg",
        color: "#3FAF49",
        alt: "Goal 15: Life on land",
      },

      16: {
        img: "../lib/svgs/goal-16.svg",
        color: "#01558A",
        alt: "Goal 16: Peace, justice and strong institutions",
      },

      17: {
        img: "../lib/svgs/goal-17.svg",
        color: "#193667",
        alt: "Goal 17: Partnerships for the goals",
      },

      all: {
        img: "../lib/svgs/all.svg",
        alt: "Goal 1: No poverty, Goal 2: Zero hunger, Goal 3: Good health and well-being, Goal 4: Quality education, Goal 5: Gender equality, Goal 6: Clean water and sanitation, Goal 7: Affordable and clean energy, Goal 8: Decent work and economic growth, Goal 9: Industry, innovation and infrastructure, Goal 10: Reduced inequalities, Goal 11: Sustainable cities and communities, Goal 12: Responsible consumption and production, Goal 13: Climate action, Goal 14: Life below water, Goal 15: Life on land, Goal 16: Peace, justice and strong institutions, Goal 17: Partnerships for the goals",
      },

      circle: {
        img: "../lib/svgs/circle.png",
        alt: "Sustainable developments logo",
      },
    };
  }

  render() {
    //it takes the attribute of .goal and plugs it into the link
    return html` <div class="wrapper">
      ${this.isImageVisible
        ? html`
            <img
              src="${this.img}"
              alt="${this.alt}"
              loading="${this.label}"
              fetchPriority="${this.thisfetchPriority}"
            />
          `
        : ``}
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

global.customElements.define(unSdg.tag, unSdg);
