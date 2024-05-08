import { useState } from "react";
import { MockFuncButton } from "./MockFuncButton";

export const MockFuncArticle = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <article className={`flex flex-col justify-center items-center mt-10`}>
      <h1 className={`mb-5 font-bold`}>Testando Mock Func</h1>

      {active ? <p className={`text-cyan-400`}>
        Este texto deve alterar sua cor quando o botão for clicado. ALTERADO</p> 
        : <p className={`text-emerald-500`}>
          Este texto deve alterar sua cor quando o botão for clicado. ORIGINAL</p>}
      <br />
      <MockFuncButton func={() => setActive(val => !val)}/>
    </article>
  );
};