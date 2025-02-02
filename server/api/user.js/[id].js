import users from "@/data/users";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const user = users.find((user) => user.id === id);

  if (!user) {
    return {
      statusCode: 404,
      body: { message: "User not found" },
    };
  }

  return user;
});
