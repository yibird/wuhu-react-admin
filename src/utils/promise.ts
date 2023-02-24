export function asyncTo<T>(promise: Promise<T>, fn?: Function) {
  return new Promise((resolve, reject) => {
    promise
      .then((res) => resolve([null, res]))
      .catch((err) => resolve([err, null]))
      .finally(() => typeof fn === "function" && fn());
  });
}
