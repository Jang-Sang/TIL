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

// switch case 문도 사용 가능하다

@reference
https://radlohead.gitbook.io/typescript-deep-dive/type-system/typeguard
