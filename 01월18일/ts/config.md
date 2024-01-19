## TASK.1 타입스크립트에서 꼭 필요한 **ts-config**

**Q. ts-config의 역할과 옵션을 다룰 수 있는가?**

@reference
https://www.typescriptlang.org/tsconfig
https://codingapple.com/unit/typescript-tsconfig-json
https://yamoo9.gitbook.io/typescript/cli-env/tsconfig

### 📑 ts-config란?

    - 매번 명령어를 입력하지 않고, 보다 쉽게 사용하려면 컴파일 설정 파일을 만들어서 사용하는 것이 편리하다.
    - 해당 디렉터리가 Typescript 또는 Javascript 프로젝트의 루트임을 나타낸다.

### 📑 tsconfig.json의 역할

1. 컴파일러 옵션 설정: 컴파일러가 TypeScript 코드를 어떻게 컴파일할지 결정합니다. 예를 들어, ECMAScript 버전, 모듈 시스템 등을 설정할 수 있습니다.
2. 프로젝트 파일 포함 및 제외: 특정 파일이나 디렉토리를 컴파일 과정에 포함시키거나 제외할 수 있습니다.
3. 경로 및 모듈 해석 설정: 절대 경로를 사용한 모듈 임포트와 같은 커스텀 모듈 해석 전략을 설정할 수 있습니다.
4. 프로젝트 참조 관리: 다른 TypeScript 프로젝트를 참조하여 빌드 의존성을 관리할 수 있습니다.

### 📑 주요 컴파일러 옵션

    tsconfig의 최상위 속성
        compileOnSave : 저장과 동시에 컴파일 하는 기능. default는 false
        extends : 설정을 상속 받아올 부모 설정의 경로를 작성한다.
        files : 프로젝트 내 어떤 파일을 컴파일 할지 결정하는 옵션. 아무런 작성이 없으면 모든 파일을 컴파일
        include : glob pattern에 일치하는 파일들을 컴파일에 포함
        exclude : "files"와 "include"모두 지정되어 있지 않다면 "exclude"로 제외된 것을 제외하고 모든 TypeScript파일을 포함하는 디렉토리와 하위 디렉토리에 포함시킨다.

    그 외의 주요옵션

    {
        "compilerOptions": {
            "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
            "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
            "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지
            "checkJs": true, // 일반 js 파일에서도 에러체크 여부
            "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
            "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
            "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
            "outDir": "./", //js파일 아웃풋 경로바꾸기
            "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
            "removeComments": true, //컴파일시 주석제거
            "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
            "noImplicitAny": true, //any타입 금지 여부
            "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기
            "strictFunctionTypes": true, //함수파라미터 타입체크 강하게
            "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
            "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
            "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기
            "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
            "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
            "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기
            "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기
        }
    }
