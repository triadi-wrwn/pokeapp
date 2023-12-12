const setStorage = (key: string, value: any) => {
  if (!value) {
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
};

const addToStorage = (key: string, value: any) => {
  if (!value) {
    return;
  }

  const currentData = getStorage(key);
  if (currentData && Array.isArray(currentData)) {
    const uniqueData = currentData.filter((el) => el.id !== value.id);
    const newData = uniqueData.concat([value]);
    setStorage(key, newData);
  } else {
    setStorage(key, [value]);
  }
};

const getStorage = (key: string) => {
  if (!key) {
    return null;
  }
  const stringVal = localStorage.getItem(key);
  return stringVal ? JSON.parse(stringVal) : null;
};

export { addToStorage, getStorage, setStorage };
