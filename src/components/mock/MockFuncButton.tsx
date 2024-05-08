type TMockFunc = {
  func: () => void;
};

export const MockFuncButton = ({ func }: TMockFunc) => {
  return (
    <button onClick={func}
      className={`bg-zinc-600 border border-zinc-400 p-3`}>
      Click
    </button>
  );
};