import users from "~/server/data/users"; // Assuming the users data is stored in this path

export default defineEventHandler(async (event) => {
  // Get the request body (email, mobile, and password)
  const { email, mobile, password } = await readBody(event);

  // Validate input
  if (!email && !mobile) {
    return {
      statusCode: 400,
      body: { message: "Email or mobile is required" },
    };
  }
  if (!password) {
    return {
      statusCode: 400,
      body: { message: "Password is required" },
    };
  }

  // Find the user by email or mobile
  const user = users.find(
    (user) =>
      (user.email === email || user.mobile === mobile) &&
      user.password === password
  );

  // If the user is not found or the password is incorrect
  if (!user) {
    return {
      statusCode: 401,
      body: { message: "Invalid credentials" },
    };
  }

  // If user found, return user details (without password for security)
  const { password: _, ...userDetails } = user; // Remove password from the response

  return userDetails;
});
