export class Task {
  public constructor(
    public taskid: number,
    public title: string,
    public duedate: string,
    public desc: string,
    public priority: string,
    public assignto: string,
    public assigndate: string,
    public comment: string,
    public status: string
  ) {}
}
