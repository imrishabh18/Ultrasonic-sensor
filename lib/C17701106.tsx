import { createUseComponent } from "tscircuit"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  "1": "pin1",
  "2": "pin2"
} as const
const pinNames = Object.values(pinLabels)

interface Props extends CommonLayoutProps {
  name: string
}

export const C17701106 = (props: Props) => {
  return (
    <bug
      {...props}
      footprint={<footprint>
                <platedhole
                shape="circle"
          pcbX="-5.00mm"
          pcbY="0.00mm"
          holeDiameter="1.1999975616000778mm"
          outerDiameter="1.7999963424001169mm"
          portHints={["1"]}
        />
        <platedhole
        shape="circle"
          pcbX="5.00mm"
          pcbY="0.00mm"
          holeDiameter="1.1999975616000778mm"
          outerDiameter="1.7999963424001169mm"
          portHints={["2"]}
        />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=73d055bae47c4d42ae82ac65e8252ce8&pn=C17701106"
      }}
      pinLabels={pinLabels}
      schPinSpacing={0.75}
      schPortArrangement={{
  "leftSide": {
    "direction": "top-to-bottom",
    "pins": [
      1,
      2
    ]
  },
  "rightSide": {
    "direction": "bottom-to-top",
    "pins": []
  }
}}
    />
  )
}

export const useC17701106 = createUseComponent(C17701106, pinNames)