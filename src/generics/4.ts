type User1 = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User1>): User1 {
  const newUser: User1 = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...newUser, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
