export const getHistoryInput = (pathname: string) => {
  return [
    {
      hash: "",
      pathname,
      search: "",
    },
    undefined,
    {
      preventScrollReset: undefined,
      relative: undefined,
      replace: false,
      state: undefined,
    },
  ];
};
