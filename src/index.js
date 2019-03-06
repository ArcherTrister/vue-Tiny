/* Automatically generated by './build/bin/build-entry.js' */

import BigdataTable from '../packages/bigdata-table/index.js';
import DatePicker from '../packages/date-picker/index.js';
import DefaultVideo from '../packages/default-video/index.js';
import Form from '../packages/form/index.js';
import FormItem from '../packages/form-item/index.js';
import Input from '../packages/input/index.js';
import LiveVideo from '../packages/live-video/index.js';
import Popover from '../packages/popover/index.js';
import Select from '../packages/select/index.js';
import TableColumn from '../packages/table-column/index.js';
import TableColumnPro from '../packages/table-column-pro/index.js';
import TimePicker from '../packages/time-picker/index.js';
import Tooltip from '../packages/tooltip/index.js';
import locale from 'vue-creek/src/locale';
import CollapseTransition from 'vue-creek/src/transitions/collapse-transition';

import Utils from '../commons/utils/index.js';

const components = [
  BigdataTable,
  DatePicker,
  DefaultVideo,
  Form,
  FormItem,
  Input,
  LiveVideo,
  Popover,
  Select,
  TableColumn,
  TableColumnPro,
  TimePicker,
  Tooltip,
  CollapseTransition
];

const prototypes = [
  Utils
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  prototypes.forEach(prototype => {
    Object.defineProperty(Vue.prototype, prototype.name(), { value: prototype });
  });

  Vue.prototype.$CREEK = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.6',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  BigdataTable,
  DatePicker,
  DefaultVideo,
  Form,
  FormItem,
  Input,
  LiveVideo,
  Popover,
  Select,
  TableColumn,
  TableColumnPro,
  TimePicker,
  Tooltip
};
