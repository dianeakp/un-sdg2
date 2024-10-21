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
    this.img = "../lib/svgs/circle.png";
    //allows us use and access svgs by creating a link to it in the system.
    //../ means get out or src and find lib
    this.alt = "Sustainable Developments Logo";
    this.colorOnly = false;
    this.loading = "lazy";
    this.fetchPriority = "low";
    this.width = "254px";
    this.height = "254px";
  }

  static get properties() {
    return {
      //properties are defined here so we know what input type they take.
      goal: { type: String },
      img: { type: String },
      alt: { type: String },
      width: { type: String },
      height: { type: String },
      colorOnly: { type: Boolean },
      //taking string allows for the most versatile applications
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;

          // ensures the svgs and colors are uniform and are positioned after eachother
        }
      `,
    ];
  }

  updated(changedProperties) {
    //runs whenever something is updated and ensures they retain their properties

    //this keeps height and width the same
    if (changedProperties.has("--height")) {
      height = this.height;
    }
    if (changedProperties.has("--width")) {
      width = this.width;
    }

    //if the goal is changed, it runs the updateGoalInfo() method
    if (changedProperties.has("goal")) {
      this.updateGoalInfo(this.goal);
    }

    //this ensures thar when it is color only the image is not visible
    if (changedProperties.has("colorOnly")) {
      this.isImageVisible = !this.colorOnly;
    }

    //this ensures loading properties are retained
    if (changedProperties.has("loading")) {
      this.loading = this.getAttribute("loading");
    }

    //this ensures fetch priority properties are retained
    if (changedProperties.has("fetchPriority")) {
      this.fetchPriority = this.getAttribute("fetchPriority");
    }
  }

  //this runs when a goal is changed
  updateGoalInfo(currGoal) {
    //checks for the value it was given and updates or assigns img, alt text and color as needed
    switch (currGoal) {
      //update ALT, IMAGE and COLOR (update everything)
      case "1":
        this.img = "../lib/svgs/goal-1.svg";
        this.color = "#EB1C2C";
        this.alt = "Goal 1: No Poverty";
        break;
      case "2":
        this.img = "../lib/svgs/goal-2.svg";
        this.color = "#D2A02A";
        this.alt = "Goal 2: Zero hunger";
        break;
      case "3":
        this.img = "../lib/svgs/goal-3.svg";
        this.color = "#2C9B48";
        this.alt = "Goal 3: Good health and well-being";
        break;

      case "4":
        this.img = "../lib/svgs/goal-4.svg";
        this.color = "#C21F33";
        this.alt = "Goal 4: Quality education";
        break;

      case "5":
        this.img = "../lib/svgs/goal-5.svg";
        this.color = "#EF402A";
        this.alt = "Goal 5: Gender equality";
        break;

      case "6":
        this.img = "../lib/svgs/goal-6.svg";
        this.color = "#00ADD8";
        this.alt = "Goal 6: Clean water and sanitation";
        break;

      case "7":
        this.img = "../lib/svgs/goal-7.svg";
        this.color = "#FDB713";
        this.alt = "Goal 7: Affordable and clean energy";
        break;

      case "8":
        this.img = "../lib/svgs/goal-8.svg";
        this.color = "#8F1737";
        this.alt = "Goal 8: Decent work and economic growth";
        break;

      case "9":
        this.img = "../lib/svgs/goal-9.svg";
        this.color = "#F36D24";
        this.alt = "Goal 9: Industry, innovation and infrastructure";
        break;

      case "10":
        this.img = "../lib/svgs/goal-10.svg";
        this.color = "#E01583";
        this.alt = "Goal 10: Reduced inequalities";
        break;

      case "11":
        this.img = "../lib/svgs/goal-11.svg";
        this.color = "#F99D25";
        this.alt = "Goal 11: Sustainable cities and communities";
        break;

      case "12":
        this.img = "../lib/svgs/goal-12.svg";
        this.color = "#CF8D2A";
        this.alt = "Goal 12: Responsible consumption and production";
        break;

      case "13":
        this.img = "../lib/svgs/goal-13.svg";
        this.color = "#48773D";
        this.alt = "Goal 13: Climate action";
        break;

      case "14":
        this.img = "../lib/svgs/goal-14.svg";
        this.color = "#007DBB";
        this.alt = "Goal 14: Life below water";
        break;

      case "15":
        this.img = "../lib/svgs/goal-15.svg";
        this.color = "#3FAF49";
        this.alt = "Goal 15: Life on land";
        break;

      case "16":
        this.img = "../lib/svgs/goal-16.svg";
        this.color = "#01558A";
        this.alt = "Goal 16: Peace, justice and strong institutions";
        break;

      case "17":
        this.img = "../lib/svgs/goal-17.svg";
        this.color = "#193667";
        this.alt = "Goal 17: Partnerships for the goals";
        break;

      case "all":
        this.img = "../lib/svgs/all.svg";
        this.alt =
          "Goal 1: No poverty, Goal 2: Zero hunger, Goal 3: Good health and well-being, Goal 4: Quality education, Goal 5: Gender equality, Goal 6: Clean water and sanitation, Goal 7: Affordable and clean energy, Goal 8: Decent work and economic growth, Goal 9: Industry, innovation and infrastructure, Goal 10: Reduced inequalities, Goal 11: Sustainable cities and communities, Goal 12: Responsible consumption and production, Goal 13: Climate action, Goal 14: Life below water, Goal 15: Life on land, Goal 16: Peace, justice and strong institutions, Goal 17: Partnerships for the goals";
        break;

      case "circle":
        this.img = "../lib/svgs/circle.png";
        this.alt = "Sustainable developments logo";
        break;

      default:
        this.img = "";
        this.color = "";
        this.alt = "";
        break;
    }
  }

  render() {
    return html` <style>
        /* this ensures the width height and color properties are correct*/
        :host {
          width: ${this.width};
          height: ${this.height};
          background-color: ${this.color};
        }
      </style>
      <div class="wrapper" style="background-color: ${this.color}">
        ${!this.colorOnly
          ? html`
              <img
                src="${this.img}"
                alt="${this.alt}"
                loading="${this.loading}"
                width="${this.width}"
                height="${this.height}"
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

globalThis.customElements.define(unSdg.tag, unSdg);
