import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localeVi from "dayjs/locale/vi";
dayjs.extend(relativeTime);

const parseTime = (timeStr: string) => {
  const result = dayjs(timeStr).locale(localeVi).fromNow();
  return result;
};

export default parseTime;
