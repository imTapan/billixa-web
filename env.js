const environments = {
  local: {
    name: "localhost",
    ENDPOINT: "http://localhost:3030",
    COOKIE_HOST: "localhost",
  },
  development: {
    name: "development",
    ENDPOINT: "http://localhost:3030",
    COOKIE_HOST: ".netlify.app",
  },
  production: {
    name: "production",
    ENDPOINT: "",
    COOKIE_HOST: ".billixa.com",
  },
};

console.log(
  "Releasing Environment : ",
  process?.env?.AMPLIFY_ENV || "development"
);

export default environments[process?.env?.AMPLIFY_ENV || "local"];
