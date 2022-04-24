export default [
  {
    url: "/mock/list",
    method: "post",
    response: () => {
      return {
        code: 1,
        message: "ok",
        data: ["1", "2"],
      };
    },
  },
];
