const database = localStorage;

export const store = (item) => {
  new Promise((resolve, reject) => {
    if (item.length === 0) {
      return reject("아무것도 입력하지 않았습니다. ");
    }
    let list = [];
    const data = database.getItem("list");
    if (data) {
      list = JSON.parse(data);
    }
    list.unshift(item);
    database.setItem("list", JSON.stringify(list));
    return resolve("성공");
  });
};

export const fetchList = () => {
  const data = database.getItem("list");
  if (!data) {
    return [];
  }
  const realData = JSON.parse(data);
  return realData ?? [];
};

export const deleteItem = (item) => {
  new Promise((resolve, reject) => {
    let list = [];
    const data = database.getItem("list");
    if (!data) {
      return reject("없습니다.");
    }
    list = JSON.parse(data);
  });
};
