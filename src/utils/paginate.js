import _ from "lodash";

export function paginate(movies, page, pageSize) {
  let start = (page - 1) * pageSize;
  return _(movies).slice(start).take(pageSize).value();
}
