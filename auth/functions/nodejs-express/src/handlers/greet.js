const handler = (req, resp) => {
  // You can access ther request body at req.body
  return resp.json({
    a_greeting: {
      nested_level: 1,
      full_name: "object A",
      b_greeting: {
        full_name: "object B",
        nested_level: 2,
        c_greeting: {
          nested_level: 3,
          full_name: "object C",
        },
      },
    },
  });
};

module.exports = handler;
