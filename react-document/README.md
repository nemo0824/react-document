## React가 컴포넌트와 hook 호출하는 방식

React는 사용자 경험을 최적화하기 위해 필요할 때마다 컴포넌트와 hook을 렌더링하는 역할을 한다.
"선언적"

### 컴포넌트 함수를 직접 호출하지 말것

- React는 렌더링하는동안 컴포넌트 함수가 언제 호출될지 결정 JSX로 수행
- 컴포넌트가 함수 이상의 역할을 하게됨
- 컴포넌트 타입이 재조정 과정을 참여
- React가 사용자 경험을 향상 시킬수있다.
- 더 나은 디버깅 제공
- 재조정 과정 효율적

### hook을 일반값 처럼 전달하지 말것

- 동적으로 변경하지말것.

## hook의 규칙

### hook을 최상위 레벨에서만 호출

### hook을 React함수에서만 호출(hook 또는 함수형 컴포넌트에서만 호출)

- hook은 React가 함수 컴포넌트를 렌더링하는 동안 만 호출할 수 있다. (조건문, 반복문, try, catch,) 블록내부에서 호출 불가

### Context

보통의 경우 부모 컴포넌트에서 자식 컴포넌트로 props를 통해 정보를 전달
중간에 많은 컴포넌트를 거쳐야하거나, 애플리케이션의 많은 컴포넌트에서 동일한 정보가 필요한경우에는 props를 전달하는것이 번거롭고 불편할수있다

context 사용전 고려해야할것

1. props로 전달
2. 컴포넌트를 추출하고 jsx를 children으로 전달하기.

### useCallback

useCallback은 함수 자체를 캐싱
useMemo와 달리, 전달한 함수를 호출하지 않습니다.
그대신 전달한 함수를 캐싱해서 의존성의 값이 변하지않으면 해당 함수 자체가 변하지않도록합니다.
이것은 불필요하게 자식을 리렌더링하지않고 캐싱한 함수를 전달할수 있도록 도와줍니다.
함수의 코드는 사용자가 폼을 제출하기전까지 실행되지않는다

### useMemo 꼭 사용해야할까?

사용하지않아도되는경우
굵직한 상호작용이 필요한경우 ex) 페이지 전체나 전체 부문을 교체하는것

사용하면 좋은경우
미세한 상호작용일경우 ex) 도형이 이동하는것

결론
굳이 매번 사용할필요가없고 꼭 필요한곳에서 사용할것
react developer tools 사용해서 어떤 컴포넌트가 가장 필요한지 살펴보고 해당 하는곳에 사용할것.

### useMemo

useMemo는 호출한 함수의 결과값을 캐싱합니다.
함숲호출결과를 캐싱해서 의존성이 변하지않는한 결과값이 변경되지않도록합니다.
불필요하게 자식요소를 리렌더링하지않고 결과값을 넘길수있도록합니다

### React Fiber tree

Fiber tree
React는 렌더링 최적화하기위해 Fiber라는 구조체를 사용

Fiber는 React 컴포넌트의 작업단위
각각 컴포넌트는 하나의 Fiber Node로 표현

```
function AComponent(){
const [cout, setCount] = useState(0);
const [name, setName] = useState("LIM")
useEffect(()=> {
console.log("effect")
},[])
}
```

Acomponent Fiber Node
-> hooks
-> Hook 1: {memoizedState: 0}
-> Hook 2: {memoizedState: "LIM"}
-> Hook 3: {tag: Effect, deps: []}

내부적으로 linked list로 연결 순서 보장이 매우 중요.
훅을 조건문에서 쓰면안되는 이유 => 순서가 틀어지면 React가 어떤상태인지 알 수 없게됨

Fiber 의 도입 배경
기존 virtual dom 의 문제점

- 렌더링 중간에 중단 불가 (동기적 처리만가능)
- 트리가 클수록 렌더링이 오래걸린다.
- 렌더링 오래걸리는경우, 사용자 이벤트 블로킹 발생

React 16 부터

- fiber도입 -> 각작업을 작은 단위로 쪼개어 처리
- 사용자 인터렉션, 애니메이션 등의 우선순위 기반 스케줄링 가능
- 작업 중단 가능
- 각 노드 독립적인 작업단위로 처리

fiber tree fiberNode
컴포넌트, 태그 들은 fiberNode그것들이 모여 fiberTree를 구성한다.
만약 자바스크립트로 실제 dom을 조작해보면 어떨까?
자바스크립트로 실제 dom을 조작하여 input값을 변경했을때
리액트는 실제로 조작한 사실을 인지하지못한다
=> 실제 조작한 사시을 인지하지 못하는이유
useState, props의 변화일때만 리렌더링하기때문.

기존 가상돔 vs 현재 가상돔 diff 알고리즘으로 비교
변경사항 => 실제 dom에 반영

### useState

state는 순서가 중요하다.
React는 함수형 컴포넌트 렌더링될때마다 새로 실행, (index)로 찾는다.
각 useState()r가 어떤 상태를 가리키는지 호출순서 밖에 단서가없다.

각각 컴포넌별로 상태목록을 가진다.

Q) 컴포넌트가 unmount => remount 될때 상태는 유지가 되는것인가?
기본적으로 유지되지않는다
언마운트시 => 컴포넌트가 완전히 dom에서 사라짐
이때 React는 해당 컴포넌트의 state와 hook 정보를 전부 메모리에서 제거
이후 리마운트시에는 완전히 새로 실행되는 컴포넌트로 간주

Q) 그렇다면 상태를 유지하고싶다면?
방법1) 상위컴포넌트에서 상태를 관리
방법2) 로컬 스토리지/ 세션스토리지, zustand, redux 등 저장

State 구조화 원칙

1. 연관된 state 그룹화하기 (두 개 이상의 state 변수를 항상 동시에 업데이트한다면 => 단일 변수로 병합 )
2. state의 모순 피하기 (여러 state조각이 서로 모순되고 불일치 할수있는 방식으로 state를 구성하는것은 실수를 발생할수있다)
3. 불필요한 state 피하기, (렌더링 중에 컴포넌트의 props나 기존의 state 변수에서 일부 정보를 계산할수있다면 컴포넌트의 state에 해당정보 넣지않아야한다.)
4. state의 중복 피하기
5. 깊게 중첩된 state 피하기

** setState은 스케쥴링되고 배치 처리된다 **

async function handleSubmit(e) {
e.preventDefault();
setIsSending(true);
await sendMessage(text);
setIsSending(false);
setIsSent(true);
}

이런함수 클릭시 한번

1. setIsSending(true) => 로 인한 상태업데이트 예약 렌더링 1회
2. await sendMessage => 여기서 일단 한번 멈춤 비동기 요청 기다리기 // 현재 js 실행컨텍스트를 종료 , 다음틱에서 이어서 실행하는 예약구조 // await를 기준으로 자바스크립트 엔진이 실행을 끊고 그 이후의 코드는 다음 이벤트루프에서 실행
3. setIsSending(false) => 렌더링 2회차 스케쥴링 (새로운 루프)
4. setIsSent(true) => 렌더링 2회차 쌓이기 (같은 루프)

실행컨텍스트에 관하여
하나의 함수호출 = 하나의 실행컨텍스트 실행

하지만 await이 끼어있으면 상황이달라짐
awiat은 실행컨텍스트를 끊고
그뒤 코드를 다음 이벤트루프에서 "새 ㅅ컨텍스트"로 실행하게만든다

handleSubmit()은 논리적으로 하나의 함수
자바스크립트느 await을 기준으로 코드를 두번에 나눠 실행한다.
실행 컨텍스트도 사실상 두번 만들어집니다.

setIsSending(true)는 비동기지만 즉시 큐에 등록만됨
setState()는 바로상태를 변경하지않고
리액트가 업데이트 스케쥴을 한다. batching
