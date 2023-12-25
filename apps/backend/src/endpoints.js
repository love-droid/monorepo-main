// import CreatePackages from "./stories/CreatePackages";
module.exports = (app) => {
  app.get("/liveness", async (req, res) => {
    console.log("here-----");
    return res.code(200).send({ status: "I am alive" });
  });

  app.get("/readiness", async (req, res) => {
    return res.code(200).send({ status: "I am ready" });
  });

  
  return [
    {
      endpoints: [["get", "/", "GetPackages"],
                  ["post", "/packages", "CreatePackages"],
                  ["delete", "/packages/:id", "DeletePackages"],
                  ["put", "/packages/:id", "UpdatePackages"]],
    },
  ];
};
