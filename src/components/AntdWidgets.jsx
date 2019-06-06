import { DatePicker, Switch, Slider, InputNumber, Select } from "antd";
import makeField from "./makeField";

const { RangePicker } = DatePicker;
const { Option } = Select;

export const ARangePicker = makeField(RangePicker);
export const ASwitch = makeField(Switch);
export const ASlider = makeField(Slider);
export const AInputNumber = makeField(InputNumber);
export const ASelect = makeField(Select);
export const AOption = Option;