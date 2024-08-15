enum ProjectStatus {
  Acive,
  Finished,
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenersFn: Listener<T>) {
    this.listeners.push(listenersFn);
  }
}

class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Acive
    );

    this.projects.push(newProject);
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

const projectState = ProjectState.getInstance();

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

abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as U;
    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    );
  }

  abstract configure(): void;
  abstract renderContent(): void;
}
class ProjectList extends Component<HTMLDivElement, HTMLElement> {
  assignedProject: Project[];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    this.assignedProject = [];

    this.configure();
    this.renderContent();
  }
  configure() {
    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((prj) => {
        if (this.type === "active") {
          return prj.status === ProjectStatus.Acive;
        }
        return prj.status === ProjectStatus.Finished;
      });
      this.assignedProject = relevantProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    listEl.innerHTML = "";
    for (const prjItem of this.assignedProject) {
      const listItem = document.createElement("li");
      listItem.textContent = prjItem.title;
      listEl.appendChild(listItem);
    }
  }
}

class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");
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
  }
  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContent() {}

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
      projectState.addProject(title, desc, people);
      console.log(title, desc, people);
      this.clearInput();
    }
  }
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");
