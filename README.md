# javascript-calculator-precourse

## 기능 목록

- [x] 입력된 문자열을 쉼표(,)와 콜론(:)을 구분자를 기준으로 분리한 후 분리된 각 숫자의 합을 반환한다.

- [x] 입력된 문자열 앞부분의 "//"와 "\n" 사이에 커스텀 구분자가 있는지 확인하고, 존재한다면 구분자로 사용한다.

- [x] 사용자가 잘못된 값을 입력할 경우 "[Error]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션을 종료한다.

- [x] Console API의 `Console.readLineAsync()`를 사용하여 사용자 입력을 받고, `Console.print()`를 활용하여 결과를 출력한 후 프로그램을 종료한다.

## 리팩토링 목록

### 예외처리 케이스 추가

- [ ] ~~custom separator가 기본 separator와 중복되는 경우 (//:"\n1:2)~~

> 커스텀 구분자 양식이 올바르다면 정상적으로 동작하는 것으로 간주함

### 커스텀 에러 사용

- [ ] Error 클래스를 확장한 CustomStringInputError, BaseStringInputError 사용 예정

### 코드 스타일 최적화

- [x] 문자열을 여러 개의 구분자로 split할 때 for을 사용하는 대신 regex 사용

- [x] 최종 합계를 구할 때 for 대신 reuduce 사용

- [x] 관심사 분리를 통한 함수형 프로그래밍

- [x] [JavaScript Style Guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript) 코딩 컨벤션 참고

### 요구사항 추가

- [ ] custom separator가 2개 이상인 경우 ("//@#\n1")

> 모든 작업이 끝난 후 TDD 이론 복습하며 구현 예정
