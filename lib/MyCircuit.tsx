import { layout, useCapacitor, useResistor } from "tscircuit";
import { useC155558 } from "./C155558";
import { useC17701106 } from "./C17701106";
import { useC18088 } from "./C18088";
import manual_edits from "./MyCircuit.manual-edits";

export const MyCircuit = () => {
  const R1 = useResistor("R1", {
    resistance: "10k", // TODO
    footprint: "res0402",
    schX: -4,
    schY: 2,
    cadModel: {
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=25f113603be24a279bc54a86db776d75&pn=C100195",
    },
  });
  const R2 = useResistor("R2", {
    resistance: "10k", // TODO
    footprint: "res0402",
    schX: 3,
    schY: 2,
    cadModel: {
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=25f113603be24a279bc54a86db776d75&pn=C100195",
    },
  });
  const R3 = useResistor("R3", {
    resistance: "100k", // TODO
    footprint: "res0402",
    schX: 3,
    schY: 1,
    cadModel: {
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=25f113603be24a279bc54a86db776d75&pn=C100195",
    },
  });
  const C1 = useCapacitor("C1", {
    capacitance: "0.1uF", // TODO
    footprint: "cap0603",
    schX: -4,
    schY: 0,
    cadModel: {
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=ac9b32e974bc448eab36b1293f859dcb&pn=C100040",
    },
  });
  const C2 = useCapacitor("C2", {
    capacitance: "0.1uF", // TODO
    footprint: "cap0603",
    schX: 7,
    schY: -1,
    cadModel: {
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=ac9b32e974bc448eab36b1293f859dcb&pn=C100040",
    },
  });
  const C3 = useCapacitor("C3", {
    capacitance: "0.1uF", // TODO
    footprint: "cap0603",
    schX: 7,
    schY: 1,
    cadModel: {
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=ac9b32e974bc448eab36b1293f859dcb&pn=C100040",
    },
  });
  const C4 = useCapacitor("C4", {
    capacitance: "0.1uF", // TODO
    footprint: "cap0603",
    schX: 5,
    schY: -3,
    cadModel: {
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=ac9b32e974bc448eab36b1293f859dcb&pn=C100040",
    },
  });
  const C5 = useCapacitor("C5", {
    capacitance: "0.1uF", // TODO
    footprint: "cap0603",
    schX: 6,
    schY: -4,
    cadModel: {
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=ac9b32e974bc448eab36b1293f859dcb&pn=C100040",
    },
  });

  const C155558 = useC155558("C155558", { schX: 10, schY: 0 }); // transreceiver
  const C18088 = useC18088("C18088"); // Microcontroller
  const C17701106 = useC17701106("C17701106", { schX: 15, schY: 2 }); // TRANSMITTER & RECEIVER (CYLLINDER SHAPED)

  return (
    <group layout={layout().manualEdits(manual_edits)}>
      <R1 schRotation={"90deg"} left={C18088.pin4} right={C18088.VSS} />
      <C1 schRotation={"90deg"} right={R1.left} left={C18088.VCC} />
      <C18088
        PA0="net.SWIM"
        pin11="net.DIN1"
        pin12="net.ECHO"
        VCC="net.GND"
        PD0="net.DIN2"
        SCL="net.SCL"
        SDA="net.SDA"
        ADD_RST="net.RESET"
        INT="net.INT"
        TRIG="net.TRIG"
      />
      <R2 left={C18088.TRIG} right="net.GND" />
      <R3 left={C18088.pin14} right="net.PB4" />

      <C155558
        DOUT1="net.DOUT1"
        DOUT2="net.DOUT2"
        RIN1="net.RIN1"
        ROUT1="net.ROUT1"
        RIN2="net.RIN2"
        ROUT2="net.ROUT2"
        DIN1="net.DIN1"
        DIN2="net.DIN2"
        V_plus="net.V_plus"
        V_minus="net.V_minus"
        VCC="net.GND"
        C1_minus="net.C1_minus"
        C1_plus="net.C1_plus"
        GND="net.GND"
        C2_minus="net.C2_minus"
        C2_plus="net.C2_plus"
      />
      <C2 schRotation={"90deg"} right={C155558.C2_plus} left={C155558.C2_minus} />
      <C3 schRotation={"90deg"} right={C155558.C1_plus} left={C155558.C1_minus} />
      <C4 schRotation={"90deg"} right={C155558.V_plus} left={"net.GND"} />
      <C5 schRotation={"90deg"} right={C155558.V_minus} left={"net.GND"} />
      <C17701106 pin1={C155558.DOUT1} pin2={C155558.DOUT2} />
    </group>
  );
};
