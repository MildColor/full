export const getTodos = async (req, res) => {
  console.log(req.body);
  console.log(req.header);
  const todo = {
    title: "title",
    content: "content",
    dbPassword: "jiwoon",
  };
  console.log(process.env.DB_PASSWORD);
  return res.send(todo);
};
export const createTodo = async (req, res) => {};
export const getTodoById = async (req, res) => {};
export const updateTodo = async (req, res) => {};
export const deleteTodo = async (req, res) => {};
