import { createUseComponent } from "tscircuit"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  "1": "VCC",
  "2": "",
  "3": "",
  "4": "C1_plus",
  "5": "C1_minus",
  "6": "C2_plus",
  "7": "C2_minus",
  "8": "V_plus",
  "9": "V_minus",
  "10": "GND",
  "11": "DIN1",
  "12": "DIN2",
  "13": "DOUT1",
  "14": "DOUT2",
  "15": "15",
  "16": "16",
  "17": "RIN1",
  "18": "RIN2",
  "19": "ROUT1",
  "20": "ROUT2"
} as const  
const pinNames = Object.values(pinLabels)

interface Props extends CommonLayoutProps {
  name: string
}

export const C155558 = (props: Props) => {
  return (
    <bug
      {...props}
      footprint={<footprint>
                <smtpad
          pcbX="-2.93mm"
          pcbY="2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["1"]}
        />
        <smtpad
          pcbX="-2.28mm"
          pcbY="2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["2"]}
        />
        <smtpad
          pcbX="-1.63mm"
          pcbY="2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["3"]}
        />
        <smtpad
          pcbX="-0.98mm"
          pcbY="2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["4"]}
        />
        <smtpad
          pcbX="-0.32mm"
          pcbY="2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["5"]}
        />
        <smtpad
          pcbX="0.33mm"
          pcbY="2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["6"]}
        />
        <smtpad
          pcbX="0.98mm"
          pcbY="2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["7"]}
        />
        <smtpad
          pcbX="1.63mm"
          pcbY="2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["8"]}
        />
        <smtpad
          pcbX="2.28mm"
          pcbY="2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["9"]}
        />
        <smtpad
          pcbX="2.93mm"
          pcbY="2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["10"]}
        />
        <smtpad
          pcbX="-2.93mm"
          pcbY="-2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["20"]}
        />
        <smtpad
          pcbX="-2.28mm"
          pcbY="-2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["19"]}
        />
        <smtpad
          pcbX="-1.63mm"
          pcbY="-2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["18"]}
        />
        <smtpad
          pcbX="-0.98mm"
          pcbY="-2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["17"]}
        />
        <smtpad
          pcbX="-0.32mm"
          pcbY="-2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["16"]}
        />
        <smtpad
          pcbX="0.33mm"
          pcbY="-2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["15"]}
        />
        <smtpad
          pcbX="0.98mm"
          pcbY="-2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["14"]}
        />
        <smtpad
          pcbX="1.63mm"
          pcbY="-2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["13"]}
        />
        <smtpad
          pcbX="2.28mm"
          pcbY="-2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["12"]}
        />
        <smtpad
          pcbX="2.93mm"
          pcbY="-2.87mm"
          width="0.36400738835176355mm"
          height="1.7420081442557391mm"
          shape="rect"
          portHints={["11"]}
        />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=f8ba5b4174b9490d8c445fbe2ed40b80&pn=C155558"
      }}
      pinLabels={pinLabels}
      schPinSpacing={0.75}
      schPortArrangement={{
  "leftSide": {
    "direction": "top-to-bottom",
    "pins": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]
  },
  "rightSide": {
    "direction": "bottom-to-top",
    "pins": [
      20,
      19,
      18,
      17,
      16,
      15,
      14,
      13,
      12,
      11
    ]
  }
}}
    />
  )
}

export const useC155558 = createUseComponent(C155558, pinNames)