import { go } from "@codemirror/lang-go";
import { monokai } from "@uiw/codemirror-theme-monokai";
import CodeMirror from '@uiw/react-codemirror';
import { useState } from "react";
import { Button } from "~@/components/ui/button";
import { Textarea } from "~@/components/ui/textarea";
import "../style.css";
import { jsonToGoStruct } from "./jsonToGostruct";

export default function DeltaFlyerPage() {
  const [jsonInput, setJsonInput] = useState('');
  const [structOutput, setStructOutput] = useState('');

  const handleConvert = () => {
    const output = jsonToGoStruct(jsonInput)
    setStructOutput(output);
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="w-64 bg-gray-800 grid gap-1 px-2 justify-center">
        <Button className="w-full text-white" variant="ghost">JSON to GO</Button>
      </div>
      <div className="flex-1 flex">
        <div className="w-1/2 p-4 ">
          <Textarea
            className="w-full h-4/5 text-base"
            placeholder="请输入 JSON"
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
          />
            <Button className="w-full" onClick={handleConvert}>Convert</Button>
        </div>
        <div className="p-4 w-1/2">
          <CodeMirror
            className="text-base w-full h-4/5"
            value={structOutput}
            theme={monokai}
            extensions={[go()]}
       />
        </div>
      </div>
    </div>
  )
}