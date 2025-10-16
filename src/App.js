import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    // 유저 입력
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );

    // 예외처리 1. input이 빈 문자열일때
    if (input.length === 0) {
      throw Error(
        '[ERROR] 입력 형식이 유효하지 않습니다. 입력이 비어있습니다.'
      );
    }

    const separators = [':', ','];
    let base;

    // custom seperator 확인
    if (input.startsWith('//')) {
      const [left, right] = input.split('\\n'); // 이스케이프 문자를 더해 문자열 \n 기준으로 분리

      // \\n로 끝나지 않는 경우 (//!1)
      if (right === undefined) {
        throw Error('[ERROR] 커스텀 구분자 형식이 올바르지 않습니다.');
      }

      const customSeparator = left.substring(2);

      // \\n을 두 번 사용한 경우 (//!\\n\\n1)
      if (customSeparator.length === 0) {
        throw Error('[ERROR] 커스텀 구분자가 형식이 올바르지 않습니다.');
      }

      // 커스텀 구분자가 하나 이상인 경우 (//!@\\n1)
      if (customSeparator.length > 1) {
        throw Error('[ERROR] 커스텀 구분자가 형식이 올바르지 않습니다.');
      }

      separators.push(customSeparator);
      base = right;
    } else {
      base = input;
    }

    // seperators 이외의 문자가 있는지 확인
    for (let i = 0; i < base.length; i++) {
      if (separators.includes(base[i])) {
        continue;
      } else if (isNaN(base[i])) {
        throw Error(
          '[ERROR] 입력에 숫자로 변환할 수 없는 문자가 포함되어 있습니다.'
        );
      }
    }

    // for loop를 돌며 구분자를 기준으로 파싱
    for (let i = 0; i < separators.length; i++) {
      const stringToParse = String(base);
      base = stringToParse.split(separators[i]);
    }

    // base 배열에서 숫자만 분리
    const splits = String(base).split(',');

    // 분리된 결과에서 합을 구함
    let sum = 0;
    for (let i = 0; i < splits.length; i++) {
      sum += Number(splits[i]);
    }

    MissionUtils.Console.print(`결과 : ${sum}`);

    Console.print(`결과 : ${sum}`);
  }
}

export default App;
