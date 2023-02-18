export default interface Blog {
  id: string,
  name: string,
  topic: string,
  body: string,
}

export default interface BlogState {
  blogs: Blog[],
}
