class App {
  async run(input) {
    const separator = [':', ','];
    let preprocessed = input;

    // custom seperator 확인
    if (preprocessed.startsWith('//')) {
      const [prefix, origin] = input.split('\n');
      const customSeparator = prefix.slice(2);
      separator.push(customSeparator);
      preprocessed = origin;
    } else {
      // 예외처리 1. prefix 형식이 유효하지 않을 때
    }

    // 예외처리 2. prefix에 두개 이상의 custom seperator가 있을 때

    // 예외처리 3. origin에 ':'와 ',' 이외의 separator가 있을 때

    // 예외처리 4. origin에 separator 이외에 숫자로 변환할 수 없는 문자가 있을 때

    //  for loop를 돌며 구분자에 따라 splits로 분리하는 작업
    // 모든 구분자를 ,로 replace하는 방식으로 리팩토링 계획
    for (let i = 0; i < separator.length; i++) {
      const stringToSplit = String(preprocessed);
      preprocessed = stringToSplit.split(separator[i]);
    }

    // splits 배열 flat (원소를 하나로 줄임)
    const splits = String(preprocessed).split(',');

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
