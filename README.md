# :two_men_holding_hands: PJmoa-Server
- 프로젝트를 하고 싶은 사람들을 매칭해주는 서비스입니다.
- NodeJs(express) -> NestJs Refactoring

### :file_folder: 디렉토리 구조
```bash
📂 src
 └── 📂 app
      📄 main.ts
      └── 📂 user
          └── 📂 dto
          └── 📂 entities 
          ├── 📄user.controller.ts
          ├── 📄user.model.ts
          ├── 📄user.service.ts
📄 .gitignore
📄 README.md
```
<!-- #### :wrench: 디렉토리 별 담당 기능
- Route : 라우팅 처리, 서버와 클라이언트의 통신을 위한 인터페이스를 제공
- Controller : req, res
- Provider : CRUD 의 R(ead)
- Service : CRUD 의 CUD
- Dao : Query -->

### :bar_chart: ERD 설계
#### 유료전환으로 접속불가
- [AqueryTool Link](https://aquerytool.com/aquerymain/index/?rurl=7bbc63c9-b206-419f-ba05-39173e45127b)
  
![1](https://user-images.githubusercontent.com/63203480/131827315-68f1a5ef-d660-4e63-9726-4710650b0520.PNG)


### :clipboard: Architecture
![아키텍처](https://user-images.githubusercontent.com/63203480/122184639-613af680-cec7-11eb-8cd1-d99b8c7a70d1.PNG)