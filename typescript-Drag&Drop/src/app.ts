//vaidate
interface Validateble {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(vaidatableInput: Validateble) {
  let isValid = true;

  if (vaidatableInput.required) {
    isValid = isValid && vaidatableInput.value.toString().trim().length !== 0;
  }
  if (
    vaidatableInput.minLength != null &&
    typeof vaidatableInput.value === "string"
  ) {
    isValid =
      isValid && vaidatableInput.value.length > vaidatableInput.minLength;
  }
  if (
    vaidatableInput.maxLength != null &&
    typeof vaidatableInput.value === "string"
  ) {
    isValid =
      isValid && vaidatableInput.value.length < vaidatableInput.maxLength;
  }
  if (
    vaidatableInput.min != null &&
    typeof vaidatableInput.value === "number"
  ) {
    isValid = isValid && vaidatableInput.value > vaidatableInput.min;
  }
  if (
    vaidatableInput.max != null &&
    typeof vaidatableInput.value === "number"
  ) {
    isValid = isValid && vaidatableInput.value < vaidatableInput.max;
  }
  return isValid;
}

// asutobind decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDesciptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDesciptor;
}

class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;

  constructor(private type: "active" | "finished") {
    this.templateElement = document.getElementById(
      "project-list"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `${type}-projects`;
    this.attach();
    this.renderContent();
  }

  private renderContent() {
    const listId = `${this.type}-project-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  private attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private gatherUerInput(): [string, string, number] | void {
    const enterdTilte = this.titleInputElement.value;
    const enterdDescription = this.descriptionInputElement.value;
    const enterdPeople = this.peopleInputElement.value;

    const titleValidatable: Validateble = {
      value: enterdTilte,
      required: true,
    };
    const descriptorValidatable: Validateble = {
      value: enterdDescription,
      required: true,
      minLength: 5,
    };
    const peopleValidatable: Validateble = {
      value: +enterdPeople,
      required: true,
      min: 1,
      max: 5,
    };
    if (
      !validate(titleValidatable) ||
      !validate(peopleValidatable) ||
      !validate(descriptorValidatable)
    ) {
      alert("빈칸 존재");
      return;
    } else {
      return [enterdTilte, enterdDescription, +enterdPeople];
    }
  }

  private clearInput() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @autobind
  private submitHandler(e: Event) {
    e.preventDefault();
    const userInput = this.gatherUerInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log(title, desc, people);
      this.clearInput();
    }
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");
