class App {
  async run(input) {
    // 예외처리 1. input이 빈 문자열일때
    if (input.length === 0) {
      console.error(
        '[Error] 입력 형식이 유효하지 않습니다. 입력이 비어있습니다.'
      );
      return;
    }
    const separator = [':', ','];
    let preprocessed = input;

    // custom seperator 확인
    if (preprocessed.startsWith('//')) {
      const [prefix, origin] = input.split('\n');
      const customSeparator = prefix.slice(2);

      // 예외처리 1. prefix 형식이 유효하지 않을 때 (\n을 두 번 입력했을 때 또는 separator 하나 이외의 다른 문자가 포함되어 있을 때)
      if (origin.length === 0 || customSeparator.length > 1) {
        console.error(
          '[Error] 입력 형식이 유효하지 않습니다. 커스텀 구분자 추가 규칙을 확인해주세요.'
        );
        return;
      }
      separator.push(customSeparator);
      preprocessed = origin;
    }

    // 예외처리 2. preprocessed에 숫자와 seperator(':'와 ',') 이외의 문자가 있을 때
    for (let i = 0; i < preprocessed.length; i++) {
      if (separator.includes(preprocessed[i])) {
        continue;
      } else if (isNaN(Number(preprocessed[i]))) {
        console.error(
          '[Error] 입력 형식이 유효하지 않습니다. 숫자로 변환할 수 없는 문자가 포함되어 있습니다.'
        );
        return;
      }
    }

    // for loop를 돌며 구분자에 따라 splits로 분리하는 작업
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

    // 디버깅용 코드
    console.log(sum);

    return sum;
  }
}

export default App;
