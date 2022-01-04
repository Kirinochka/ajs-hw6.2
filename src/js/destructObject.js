function destructObject({ special }) {
  const resultArray = [];

  special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    resultArray.push({
      id, name, icon, description,
    });
  });

  return resultArray;
}

export default destructObject;
