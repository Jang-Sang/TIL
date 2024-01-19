## TASK.2 타입이 확실하지 않은 상황에서 안정적인 환경 만들기

```jsx
function **print**(obj <-- any){
	obj.seongyong <-- any 타입에는 seongyong 속성은 존재하지 않음.
}

따라서 조금더 타입이 안정적인 환경과 생산성을 위한 자동안성을 지원하기 위해 타입 가드문을 사용합니다.

function **print**(obj){
	if(타입 === seongyong){ <-- 타입 가드문
    obj.seongyong
	}
}
```

아래는 타입 가드를 할 수 있는 정말 많은 방법 중 세가지를 작성했습니다. 각 예시를 들어 타입 가드문을 작성하고 이 외에도 다양한 타입 가드문에 대하여 정의해보세요!

```jsx
1. 객체의 특정 키로 검사하기
2. 특정 값의 타입으로 검사하기
3. 가드문 함수를 만들어서 검사하기
```

**Q. 어떠한 타입의 데이터가 올지 모르는 불확실한 환경에 안정적인 환경을 만들 수 있는가**

### 타입가드란?

    - 데이터의 타입을 알 수 없거나, 될 수 있는 타입이 여러 개라고 가정할 때 조건문을 통해 데이터의 타입을 좁혀나가는 것.
    - 데이터의 타입에 따라 대응하여 에러를 최소화할 수 있다.

### 타입가드의 종류

    - typeof, instanceof, in, 리터럴 type guard, null과 undefined, 사용자 정의 Type Guards, Type Guard와 Callback

    typeof : 일반 타입 체킹
    instanceof : 클래스 체킹
    Array.isArray() : 배열 체킹
    .type / in : 객체 속성 체킹

#### typeof

    function **Jang**(a: number | string){
        if (typeof a === 'string') {
            a.split(',');
            }
        if (typeof a === 'number') {
            a.toFixed(1);
            }
        }

    function **Jang**(a: number | string){
    if (typeof a === 'string') {
    a.split(',');
    }
    else { //if else문도 사용가능하다.
    a.toFixed(1);
    }
    }

    function **Jang**(a: number | string){
    switch(typeof a) {
    case 'string':
    a.split(',');
    break;

        case 'number':
            a.toFixed(1);
            break;
    }

- switch case 문도 사용 가능하다
- 해당 조건문 코드 블록내의 타입을 조건 분기를 통해 지정 가능하다.

#### instanceof

    class Human {
        Jack() {}
    }

    // 클래스도 타입이 될 수 있다.
    function Classtype(param: Human | string) {
    if (param instanceof Human) {
        param.Jack();
    } else {
        console.log(param);
    }
    }

    A_B(new Human()); // 다만 클래스가 타입일 경우, 데이터 값은 new 생성자가 되게 된다.
    A_B('Human');

- 클래스 자체가 타입인 경우 타입의 값은 new 클래스() 가 되게 된다.

#### in

    type Lion    = { gender: 'F' | 'M', bite: boolean };
    type Ant     = { gender: 'F' | 'M', acid: boolean };
    type Sparrow = { gender: 'F' | 'M', fly: boolean };

    function typeCheck(a: Lion | Ant | Sparrow) {
        if ('bite' in a) {
            a.bite = true;
        } else if ('acid' in a) {
            a.acid = true;
        } else {
            a.fly = true;
        }
    }

- 타입이 같고 속성명이 다른 것을 찾아 가드해주는 것
- 자바스크립트의 for in 루프문의 in
- in 연산자의 진짜 역할은 객체의 key에서 값을 꺼내오는 것

#### 리터럴 type guard

- === / == / !== / != 연산자를 사용해 타입을 구분
- union 타입에 리터럴 타입이 있는 경우에도 동일하게 적용
- union 타입의 공통 property 값을 비교해 union 타입을 구분 가능

  type TriState = 'yes' | 'no' | 'unknown';

  function logOutState(state:TriState) {
  if (state == 'yes') {
  console.log('사용자가 yes를 골랐습니다');
  } else if (state == 'no') {
  console.log('사용자가 no를 골랐습니다');
  } else {
  console.log('사용자가 아직 결정을 내리지 않았습니다.');
  }
  }

  type Foo = {
  kind: 'foo', // 리터럴 타입
  foo: number
  }
  type Bar = {
  kind: 'bar', // 리터럴 타입
  bar: number
  }

  function doStuff(arg: Foo | Bar) {
  if (arg.kind === 'foo') {
  console.log(arg.foo);
  }
  else {
  console.log(arg.bar);
  }
  }

#### null과 undefined

- a == null / != null로 null과 undefined 모두 걸러낼 만큼 똑똑하다.

  function foo(a?: number | null) {
  if (a == null) return;
  console.log(a+2);
  // 이제부터 a는 무조건 number입니다.
  }

#### 사용자 정의 Type Guards

- 타입스크립트에서는 is 키워드를 통해 타입가드 전용 함수를 만들수 있다.
- 함수의 리턴값에 is 연산자를 명시해줌으로서 타입을 확연하게 해주는 헬퍼 함수 같은 역할
- TypeScript 가 타입을 판단하는 방법을 개발자가 직접 정의하거나, 타입을 판단하는 로직을 재사용하고 싶을 때 이용

  interface Man {
  he: string;
  }
  interface Woman {
  she: string;
  }

  // 타입 가드 역할을 하는 커스텀 함수
  // Man 타입인지 확인하는 역할. 리턴 타입에 is 키워드가 있어야한다.
  function Human(a: Woman | Man): a is Man {
  if((a as Woman).she) {
  return fasle; // 만약 Woman이면 false
  } else {
  return true // 만일 Man이면 true
  }
  }

  function People(a: Woman | Man) {
  if(Human(a)) { //여자인 경우
  console.log(a.she);
  } else { // 남자인 경우
  console.log(a.he);
  }
  }

@reference
https://radlohead.gitbook.io/typescript-deep-dive/type-system/typeguard
https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85-%EC%B6%94%EB%A1%A0-%ED%83%80%EC%9E%85-%ED%98%B8%ED%99%98-%ED%83%80%EC%9E%85-%EB%8B%A8%EC%96%B8-%ED%83%80%EC%9E%85-%EA%B0%80%EB%93%9C-%F0%9F%92%AF-%EC%B4%9D%EC%A0%95%EB%A6%AC#%ED%83%80%EC%9E%85_%EA%B0%80%EB%93%9C_guards
