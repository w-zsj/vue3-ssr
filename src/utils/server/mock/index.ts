export default [
    {
      url: "/mock/list",
      method: "get",
      response: () => {
        return {
          code: 1,
          message: "ok",
          data: ["1", "2"]
        };
      }
    }
  ];