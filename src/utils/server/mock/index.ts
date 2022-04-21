export default [
    {
      url: "/mock/list",
      method: "get",
      response: () => {
        return {
          code: 1,
          message: "ok",
          data: ["tom", "jerry"]
        };
      }
    }
  ];