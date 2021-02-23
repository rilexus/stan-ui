import React, {ReactElement} from "react";
import { Button } from "@stan-ui/buttons";
import {Tabs} from './components'


const App = (): ReactElement => {
  return (
    <div>
      <Button />
      <Tabs/>
    </div>
  );
};

export { App };
