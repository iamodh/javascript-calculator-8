import { Console } from '@woowacourse/mission-utils';

class App {
  // 상수를 인스턴스가 아닌 클래스에 저장
  static #DEFAULT_SEPARATORS = [':', ','];

  async #getUserInput(message) {
    try {
      const input = await Console.readLineAsync(message);
      return input;
    } catch (err) {
      // 에러 warpping 작업
      throw err;
    }
  }

  #parseInput(input) {
    const defaultSeparators = [...App.#DEFAULT_SEPARATORS];

    if (!input.startsWith('//')) {
      return { separators: defaultSeparators, baseString: input };
    }

    const splits = input.split('\\n');

    // \\n 생략 또는 중복 확인
    if (splits.length !== 2) {
      throw new Error('[ERROR] 커스텀 문자열 형식이 올바르지 않습니다.');
    }

    const [customString, baseString] = splits;
    const customSeparator = customString.substring(2);

    // 커스텀 구분자가 없어가 두 개 이상인 경우
    if (customSeparator.length !== 1) {
      throw new Error('[ERROR] 커스텀 구분자가 존재하지 않습니다.');
    }

    return {
      separators: [...defaultSeparators, customSeparator],
      baseString,
    };
  }

  #parseBaseString(separators, baseString) {
    // 정규표현식에 사용되는 문자를 이스케이프 ([ => \[)
    const escapedSeparators = separators.map((s) =>
      s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );

    // baseString을 separators 안에 있는 문자들을 기준으로 분리한다.
    const regexp = new RegExp(escapedSeparators.join('|'));
    return baseString.split(regexp);
  }

  #convertToNumbers(numberStrings) {
    const numbers = numberStrings.map((string) => {
      const number = Number(string);
      if (isNaN(number)) {
        throw new Error(
          '[ERROR] 입력에 숫자로 변환할 수 없는 문자가 포함되어 있습니다.'
        );
      }

      if (number < 0) {
        throw new Error('[ERROR] 입력에 음수가 포함되어 있습니다.');
      }

      return number;
    });

    return numbers;
  }

  async run() {
    const input = await this.#getUserInput('덧셈할 문자열을 입력해 주세요.\n');

    // input이 빈 문자열일때
    if (input.length === 0) {
      throw Error(
        '[ERROR] 입력 형식이 유효하지 않습니다. 입력이 비어있습니다.'
      );
    }

    // input에서 separators와 separators를 기준으로 분리할 baseString 추출
    const { separators, baseString } = this.#parseInput(input);

    // 숫자로 변환될 문자열 배열
    const numberStrings = this.#parseBaseString(separators, baseString);

    // numberStrings를 numbers 배열로 변환
    const numbers = this.#convertToNumbers(numberStrings);

    const sum = numbers.reduce((acc, cur) => acc + cur, 0);

    Console.print(`결과 : ${sum}`);
  }
}

export default App;
