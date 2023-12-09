export function datareduser(state = { data: [] }, action) {
  if (action.type == "getData") {
    return {data :action.data};
  } else {
    return [];
  }
}
