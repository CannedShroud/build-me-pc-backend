import parts from "./demoParts.js";
import build from "./Schemas.js";

const { cpus, mbds, cases, dram, gpus, psus, storage } = parts;

const value = new build({
  psu: psus.w550_80b_fm,
  cpu: cpus.r5_3600,
  mbd: mbds.b550_atx,
  dram: dram.ddr4_2x8_3600_c16,
  case: cases.atx_mid_tower_rgbF,
  gpu: gpus.rx5700xt_8_oc,
  storage: [storage.ssds.sata960],
  details: { id: "value", cpu: "AMD", gpu: "AMD", name: "The Value King" },
  benchmarks: [{ name: "Cinebench", score: cpus.r5_3600.cinebench }],
  build_id: "value",
});

const streaming = new build({
  cpu: cpus.r5_3600x,
  mbd: mbds.b550_atx,
  dram: dram.ddr4_2x8_3600_c16,
  case: cases.atx_mid_tower_rgbF,
  gpu: gpus.rtx2070s_8_oc,
  psu: psus.w550_80b_fm,
  storage: [storage.ssds.sata960],
  details: {
    id: "streaming",
    cpu: "AMD",
    gpu: "NVIDIA",
    name: "The Streaming Rig",
  },
  benchmarks: [{ name: "Cinebench", score: cpus.r5_3600.cinebench }],
  build_id: "streaming",
});

export { value, streaming };
