import { createUseComponent } from "tscircuit"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  "1": "PC5",
  "2": "PC6",
  "3": "PA0",
  "4": "pin4",
  "5": "PA2",
  "6": "PA3",
  "7": "VCC",
  "8": "VSS",
  "9": "PD0",
  "10": "PB0",  
  "11": "pin11",
  "12": "pin12",
  "13": "TRIG",
  "14": "pin14",
  "15": "ADD_RST",
  "16": "INT",
  "17": "pin17",
  "18": "SDA",
  "19": "SCL",
  "20": "pin20"
} as const

const pinNames = Object.values(pinLabels)

interface Props extends CommonLayoutProps {
  name: string
}

export const C18088 = (props: Props) => {
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
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=f8ba5b4174b9490d8c445fbe2ed40b80&pn=C18088"
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

export const useC18088 = createUseComponent(C18088, pinNames)