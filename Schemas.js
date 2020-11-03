import mongoose from "mongoose";

const cpuSchema = mongoose.Schema({
  name: String,
  cores: Number,
  smt: Boolean,
  clocks: Number,
  cinebench: Number,
  chipsets: [[String]],
  img: String,
  cooler: Boolean,
  link: String,
  id: String,
});

const mbdSchema = mongoose.Schema({
  name: String,
  form: String,
  link: String,
  img: String,
  sataports: Number,
  ramslots: Number,
  chipset: String,
  price: Number,
  company: String,
  tier: String,
  id: String,
});

const caseSchema = mongoose.Schema({
  id: String,
  company: String,
  id: String,
  img: String,
  link: String,
  name: String,
  price: Number,
});

const dramSchema = mongoose.Schema({
  id: String,
  cas: Number,
  company: String,
  config: String,
  ddr: Number,
  img: String,
  link: String,
  name: String,
  size: Number,
  speed: String,
});

const gpuSchema = mongoose.Schema({
  id: String,
  aib: String,
  bus: Number,
  gddr: Number,
  img: String,
  link: String,
  make: String,
  name: String,
  price: Number,
  vram: Number,
});

const psuSchema = mongoose.Schema({
  id: String,
  company: String,
  img: String,
  link: String,
  name: String,
  rating: String,
  wattage: Number,
});

const ssdSchema = mongoose.Schema({
  id: String,
  capaciy: Number,
  company: String,
  img: String,
  link: String,
  name: String,
  type: String,
});

const detailsSchema = mongoose.Schema({
  id: String,
  cpu: String,
  gpu: String,
  name: String,
});

const benchmarkSchema = mongoose.Schema({
  name: String,
  score: Number,
});

const buildSchema = mongoose.Schema({
  cpu: cpuSchema,
  mbd: mbdSchema,
  dram: dramSchema,
  details: detailsSchema,
  benchmarks: [benchmarkSchema],
  case: caseSchema,
  gpu: gpuSchema,
  storage: [ssdSchema],
  build_id: String,
  psu: psuSchema,
  id: String,
});

const build = mongoose.model("build", buildSchema);

export default build;
