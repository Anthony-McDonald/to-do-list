

export default class projRow {
    constructor(projID, title) {
      this.projID = projID
      this.title = title
    }

    getTitle() {
    return this.title;
    }

    getProjID() {
      return this.projID
    }

    setTitle(title) {
        this.title = title;
    }

    setProjID(projID) {
      this.projID = projID;
    }

}

