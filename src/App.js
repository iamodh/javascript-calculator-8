class App {
  async run(input) {
    const seperators = [':', ','];
    let splits = input;

    //  for loop를 돌며 구분자에 따라 splits로 분리하는 작업
    for (let i = 0; i < seperators.length; i++) {
      const stringToSplit = String(splits);
      splits = stringToSplit.split(seperators[i]);
    }

    // 분리된 결과에서 합을 구함
    let sum = 0;
    for (let i = 0; i < splits.length; i++) {
      sum += Number(splits[i]);
    }

    console.log(sum);

    return sum;
  }
}

export default App;
