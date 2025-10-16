import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    // 유저 입력
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );

    // input이 빈 문자열일때
    if (input.length === 0) {
      throw Error(
        '[ERROR] 입력 형식이 유효하지 않습니다. 입력이 비어있습니다.'
      );
    }

    const separators = [':', ','];
    let stringToParse;

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
      stringToParse = right;
    } else {
      stringToParse = input;
    }

    // 정규표현식에 사용되는 문자를 이스케이프 ([ => \[)
    const escapedSeparators = separators.map((s) =>
      s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );

    // base를 separator 안에 있는 문자로 배열로 분리한다.
    const regexp = new RegExp(escapedSeparators.join('|'));
    const parsed = stringToParse.split(regexp);

    const numbers = parsed.map((c) => {
      const number = Number(c);
      if (isNaN(number)) {
        throw Error(
          '[ERROR] 입력에 숫자로 변환할 수 없는 문자가 포함되어 있습니다.'
        );
      }

      if (number < 0) {
        throw Error('[ERROR] 입력에 음수가 포함되어 있습니다.');
      }

      return number;
    });

    const sum = numbers.reduce((acc, cur) => acc + cur, 0);

    Console.print(`결과 : ${sum}`);
  }
}

export default App;
