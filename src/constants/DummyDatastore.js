const formatOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
  timeZone: "Asia/Tokyo"
};

const dateTimeFormat = new Intl.DateTimeFormat("en-US", formatOptions);

export const DUMMY_DATASTORE = DummyDatastore([
  {
    id: 1,
    summary: "Get 2L of Milk",
    created: dateTimeFormat.format(new Date("2019-07-09 13:35")),
    due: dateTimeFormat.format(new Date("2019-07-10 17:00")),
    order: 1
  },
  {
    id: 2,
    summary: "Get White Bread",
    created: dateTimeFormat.format(new Date("2019-07-09 13:35")),
    due: dateTimeFormat.format(new Date("2019-07-10 17:00")),
    order: 2
  },
  {
    id: 3,
    summary: "Get White Bread",
    created: dateTimeFormat.format(new Date("2019-07-09 13:35")),
    due: dateTimeFormat.format(new Date("2019-07-10 17:00")),
    order: 3
  }
]);

const DummyDatastore = data => {
  data = [...data];
  return {
    get data() {
      return data;
    },

    add(item) {
      return DummyDatastore([...data, item]);
    },

    edit(item) {
      return DummyDatastore(
        data.map(current => {
          return current !== undefined && current.id === item.id
            ? item
            : current;
        })
      );
    },

    remove(item) {
      return DummyDatastore(
        data.filter(current => {
          return current !== undefined && current.id !== item.id;
        })
      );
    }
  };
};

export const createDummyItem = (formValues, dummyDatastore) => {
  const currentMax = dummyDatastore.data.reduce((max, currentValue) => {
    return currentValue > max ? currentValue : max;
  });
  return {
    id: currentMax + 1,
    summary: formValues.summary,
    created: dateTimeFormat.format(Date.now()),
    due: formValues.due
  };
};
