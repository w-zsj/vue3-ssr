export default [
    {
      url: "/mock/list",
      method: "get",
      response: () => {
        return {
          code: 200,
          message: "ok",
          data: ["tom", "jerry"]
        };
      }
    }
  ];