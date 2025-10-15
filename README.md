# javascript-calculator-precourse

## 기능 목록

- [x] 입력된 문자열을 쉼표(,)와 콜론(:)을 구분자를 기준으로 분리한 후 분리된 각 숫자의 합을 반환한다.

- [x] 입력된 문자열 앞부분의 "//"와 "\n" 사이에 커스텀 구분자가 있는지 확인하고, 존재한다면 구분자로 사용한다.

- [x] 사용자가 잘못된 값을 입력할 경우 "[Error]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션을 종료한다.

- [x] Console API의 `Console.readLineAsync()`를 사용하여 사용자 입력을 받고, `Console.print()`를 활용하여 결과를 출력한 후 프로그램을 종료한다.

## 리팩토링 목록

### 요구사항 추가

- [ ] custom separator가 2개 이상인 경우

```
현재
input: //@#\n1@2#3
result: [Error]

원하는 결과
result: 6
```

### 예외처리 케이스 추가

- [ ] custom separator가 기본 separator와 중복되는 경우

```
현재
input : //:\n1,2:3
result: 6

원하는 결과
result: [Error]
```

### 커스텀 에러 사용

- [ ]사용자가 발생한 에러를 구분하여 원인을 찾을 수 있도록 에러를 커스터마이징해보고 싶슾니다.

```
input: //!123

현재
throw Error("[ERROR]")

원하는 결과
CustomSpearatorError("커스텀 구분자 추가 규칙을 확인해주세요.")

---

input: 1@2:3

현재
throw Error("[ERROR]")

원하는 결과
SeparatorError("기본으로 지정된 구분자 이외의 문자를 사용하였습니다.")
```

### 코드 컨벤션 적용

- [ ][JavaScript Style Guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)를 참고하여 코드 스타일을 수정해보고 싶습니다.
