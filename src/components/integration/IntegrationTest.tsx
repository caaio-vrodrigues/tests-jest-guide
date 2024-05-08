import { useState } from "react";
import { MockFuncButton } from "../mock/MockFuncButton";

export const IntegrationTest = () => {
  const [active, setActive] = useState<boolean>(false);

  return(
    <article className={`flex flex-col justify-center items-center mt-10`}>
      <h1 className={`mb-5 font-bold`}>Testando Mock Func</h1>

      {active ? <p className={`text-cyan-400`}>Texto em cor ALTERADA</p> 
        : <p className={`text-emerald-500`}>Texto em cor ORIGINAL</p>}
      <br />
      <MockFuncButton func={() => setActive(val => !val)}/>
    </article>
  );
};