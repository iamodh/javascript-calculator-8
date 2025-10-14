class App {
  async run(input) {
    console.log(input);
    const separator = [':', ','];

    // custom seperator 확인
    const [prefix, origin] = input.split('\n');
    if (prefix.startsWith('//')) {
      const customSeparator = prefix.slice(2);
      separator.push(customSeparator);
    }

    let splits = origin;
    //  for loop를 돌며 구분자에 따라 splits로 분리하는 작업
    // 모든 구분자를 ,로 replace하는 방식으로 리팩토링 계획
    for (let i = 0; i < separator.length; i++) {
      const stringToSplit = String(splits);
      splits = stringToSplit.split(separator[i]);
    }

    // splits 배열 flat (원소를 하나로 줄임)
    splits = String(splits).split(',');

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
