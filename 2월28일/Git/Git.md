## Git 
    소스 코드 버전 관리 시스템

    프로젝트 개발
    v0.1 --- 서비스 중 -- 업데이트?

    v0.2 --- 여러 기능
         --- feature 1 --- 개발완료
         feature 2 --- 개발완료 -- 되돌려야함
         feature 3 --- 개발 --- x
        => 
    v0.1 (product)
    v0.2 (dev) ----- 기능 마다 (ver)
    프로젝트 개발의 history
    git - 소스 코드 버전관리를 넘어 협업 시스템

    ex)
        v0.2 ---- feature 1 
             ---- feature 2 
             ---- feature 3 
             ---- feature 4 
             ---- fixed feature 2 

    -----------------------------------------

    conflict (충돌상황)
    저장공간과 각 기능을 합병(merge)할 때 충돌이 난 부분을 확인하여 충돌상황을 해결(resolve) 후 merge 할 수 있도록 함

    ----------------------------------------- ===> 병렬적 개발 가능

    이슈 트래커 = 개발 간에 있었던 이슈(오류 해결, 오류 미해결)을 기록

    -----------------------------------------

    CI/CD를 위한 저장소 지속적인 통합, 지속적인 배포

    -----------------------------------------

    Git 다운로드
    https://git-scm.com/downloads

    -----------------------------------------

    Github

    Git을 웹호스팅 (UI가 있도록) 서비스, 세계 최대 개발자 커뮤니티
    https://github.com/
    회원가입 -> 프로필 -> 내 개인 저장소 -> new repository

    -----------------------------------------

    power shell 에러 해결

    관리자권한 실행
    Set-ExecutionPolicy -Scope LocalMachine -ExecutionPolicy RemoteSigned -Force

    ----------------------------------------

    git init
    - 로컬 저장소 생성 (.git)

    * 주의 사항

    터미널에서 내가 올리고 싶은 폴더 경로를 맞추고 나서 생성할 것
                
    cd 폴더경로
    ex)
    cd git2 (상대경로, 하위 폴더)
    cd C:/User/git2 (절대경로)
    cd .. (상위 폴더)

    git remote
    - 원격 저장소 설정

    1) git remote
    현재 해당 로컬 저장소와 연결된 원격 저장소의 목록

    2) git remote add [원격 저장소명] [원격 저장소주소]
    ex) git remote add origin https:/github.com/abcd/adcd 원격 저장소와 로컬 저장소를 연결

    3) git remote remove [원격 저장소명] [원격 저장소주소]
    연결된 원격 저장소를 삭제

    git add .
    모든 파일을 스테이징 (.gitignore에 올라가있는 파일은 스테이징 하지 않습니다)
                
    git add 파일명
    내가 올리고 싶은 파일만 스테이징
    ex) git add index.html

    git commit
    로컬 저장소에 내가 올리고싶은 파일을 올리는 것
    commit을 하게되면 일종에 해쉬(암호화 된) 코드를 받게 됨
                
    향후 이 코드를 사용하여 cherry pick 하거나 revert 할 수 있다

    --amend : 기존에 있던 git commit 내용과 현재 commit 내용을 합침
    ex)
    git commit -m "head" -m "body" -m "footer"
    git commit -m 'feat: login api" -m '로그인 api를 추가하였습니다'
    git push 원격저장소명 브랜치명
    ex) git push origin main
    로컬 저장소의 커밋 내용을 원격 저장소에 전송

    git pull 원격저장소명 브랜치명
    ex) git pull origin main
    원격 저장소에 내용과 현재 내 로컬 환경을 동기화

    git cherry-pick hash_commit_number
    ex) A라는 기능을 위해 10개의 커밋이 존재
    해당 commit 중 내가 적용하고 싶은 커밋만 적용하고자 할 때 해당 commit만 선택하여 적용할 수 있는 명령어

    git revert hash_commit_number
    해당 commit으로 되돌리기 기능 
    사용하지 않는 것을 추천
    (ex) 마지막 commit undo

    git log 현재 git의 history와 git hash_commit_number 확인 가능
            
    -----------------------------------------       

    github 계정을 내 컴퓨터 자체에 연결

    git config --global user.name "abcd123" <-- 깃허브 닉네임
    git config --global user.email "abcdabcd@gmail.com" <-- 로그인 할 때 사용
    git config --list를 통해 확인 (q를 통해 나갈 수 있음)

    -----------------------------------------        

    branch
    repository 생성
    분기를 나눌 수 있다(분기점).

    main(master) : default branch
        
    dev(release, test, v0.1) : development branch

    ----------------------------------- 

    feat, fix, style...

    ex) feat/login
        style/event-screen
        hotfix/sns-login

    ----------------------------------- 

    * Semantic Commit Messages
    https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716

    feat     : 새로운 기능
    fix      : 버그 수정
    docs     : 문서 수정
    style    : 레이아웃, 코드 스타일 수정
    refactor : 기능 개선
    test     : 테스트코드
    chore    : 로직 외 코드 수정

    ex)
    🐖 feat  : 로그인 로직을 추가하였습니다.
        style : 이벤트 스크린의 배너를 추가하였습니다.

    ------------------------------------------------

    Flow
    1. repository 생성
    2. 로컬 저장소 (.git)과 원격저장소(github) 연결
    3. init 파일을 main에 push (프로젝트 폴더 구조)
    4. 분기점(branch) 생성

    git branch 
    - 현재 내 로컬 환경에 만들어진 branch 목록
                
    git branch 브랜치명 
    - 해당 브랜치명 브랜치가 내 로컬 환경에 생성
                
    git branch -D 브랜치명 
    - 해당 브랜치명의 브랜치 로컬 환경에서 삭제

    git checkout 브랜치명 
    - 현재 내 로컬 환경에서 바라보고 있는 브랜치 변경

    git checkout -b 브랜치명
    - 브랜치 생성과 이동을 한번에 해주는 명령어
    - 단, 해당 브랜치는 현재 내 로컬 환경 브랜치 목록에 존재해서는 안 된다.

    5. 개발..ing, add - commit - pull - push 
    - got pull 원격저장소명 branch --rebase(깃에 익숙해지면 사용, 공부하기)
    - git push origin 브랜치명 (원격저장소에서도 분기가 생김)
    - 개발 중에도 버전관리는 이루어져야한다

    6. main (init)
        new branch (dev)
        - 개발 종료 후 main branch 합치는 과정
        - git merge 합칠 브랜치 명
        ex) feat/login - 기능 개발
            git checkout main - git pull main
            git checkout feat/login
            git merge main
            conflict 발생 - resolve
            commit -> push
            git stash (스테이징 된 파일을 잠깐 저장)
            git stash pop (가장 최근 스테이징 내역 다시 빼온다)

        ex) git checkout main (수정사항 => x)
            git stash
            git checkout main (이동 o)
            git pull main (o)
            git checkout 브랜치
            git stash pop (수정사항이 있어도 브랜치 이동 가능)

            코드 이상 없는지 test (main 브랜치 merge -> 충돌 해결 -> 테스트 끝)

            git add .
            git commit
            git push origin main => 될까요 안될까요? XXX
            - 바로 main에 푸쉬하는 것이 아니라
            - 내 기존 브랜치에 푸쉬 후 허락

            git push origin 브랜치
            (원격 저장소에도 여러분의 branch가 생김)
            확인 -> code review => pull request (pr) => code review => 확인
            ------------목적지 설정(main, v0.1)
            main(원격저장소) ---> main + dev

            git checkout main
            git pull origin main
            - 원격 저장소와 내 로컬 환경 main 브랜치의 동기화
            - 자동으로 되어있을 수 있음

        ------------------------------------------------