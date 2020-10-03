import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Spec = new Schema({
  title: String,
  cpu: {
    name: String,
    details: String,
    clocks: String,
    img: String,
    link: String,
    company: String,
  },
  gpu: {
    name: String,
    vram: String,
    img: String,
    link: String,
    company: String,
  },
  dram: {
    name: String,
    size: String,
    speed: String,
    img: String,
    link: String,
  },
  case: {
    name: String,
    form: String,
    img: String,
    link: String,
  },
  psu: {
    name: String,
    img: String,
    link: String,
    wattage: String,
    rating: String,
  },
  mbd: {
    name: String,
    img: String,
    link: String,
    extras: String,
  },
  ssd: {
    name: String,
    capacity: Number,
    img: String,
    link: String,
    type: String,
  },
  hdd: {
    name: String,
    capacity: Number,
    img: String,
    link: String,
  },
  cooler: {
    name: String,
    details: String,
    img: String,
    link: String,
  },
  details: {
    notes: String,
    estimated_wattage: Number,
  },
});

export default mongoose.model("Spec", Spec);
