export class Project {
    constructor(name, description, id) {
        this.name = name;
        this.description = description;
        this.id = id;
    }
}

export class Iteration {
    constructor(id, subject, description, startOn, endOn) {
        this.id = id;
        this.subject = subject;
        this.description = description;
        this.startOn = startOn;
        this.endOn = endOn;
    }
}
