# AWS EC2와 Dokcer를 활용하여 CI/CD 파이프라인 구축

## :calendar: 진행 기간
- 2023년 12월 11일 ~ 2023년 12월 18일

## :page_facing_up: 프로젝트 목적
- 배포 및 CI/CD 파이프라인 구축 경험해보기 위함
- Docker를 학습하기 위함

## :page_facing_up: 프로젝트 내용
- 간단한 스프링 프로젝트를 만들어 AWS EC2, Docker, Github Action을 활용하여 배포 및 CI/CD 파이프라인 구축

## :mag: 기술 스택
- `GitHub Actions`, `docker`, `AWS EC2`

## :pushpin: 아키텍처
- ![image](https://github.com/mkyoung24/CI-CD/assets/103173521/15032920-234d-4d6c-832c-0074860c7959)

### CI 구축
- ![image](https://github.com/mkyoung24/CI-CD/assets/103173521/2d915d35-ff47-4621-a121-0fcab29067f6)
- ![image](https://github.com/mkyoung24/CI-CD/assets/103173521/00b02a43-fd9e-4fac-ab0f-13e4030f3117)
- ![image](https://github.com/mkyoung24/CI-CD/assets/103173521/0a7a0409-1e23-47d0-9486-7bbbe9f5efb2)
- ![image](https://github.com/mkyoung24/CI-CD/assets/103173521/c186ab91-ec6c-44ee-b3d7-1718e64b933f)
- **main 브랜치에서 push 또는 pull_request가 발생하면 설정한 Dockerfile에서 Spring Boot 애플리케이션을 Docker 이미지로 빌드하고 도커 허브에 push하게 gradle.yml을 수정함**

### CD 구축
- ![image](https://github.com/mkyoung24/CI-CD/assets/103173521/0c9bbb2c-a1c1-4a7f-b5cb-99764c35c4f5)
- ![image](https://github.com/mkyoung24/CI-CD/assets/103173521/a1db9237-c3ef-4bd7-a855-58ac4f379eff)
- ![image](https://github.com/mkyoung24/CI-CD/assets/103173521/9e9d1c91-262e-4a8b-b6fe-f95bba38c217)
- ![image](https://github.com/mkyoung24/CI-CD/assets/103173521/be60e532-9d11-4c71-a523-a968b6159b38)
- **EC2에 접속하기 위해 SSH키를 설정하고 Repository secrets에 관련 값들을 설정하고 gradle.yml에 도커 명령어를 설정해 MariaDB 컨테이너, Spring Boot 컨테이너를 실행함**

### 실행화면
- ![image](https://github.com/mkyoung24/CI-CD/assets/103173521/afa05d4c-7894-488d-accd-5a0916de62ab)
- ![image](https://github.com/mkyoung24/CI-CD/assets/103173521/34a5f0ab-d9d8-4a3e-a9b5-f5df95ca54fb)
- ![image](https://github.com/mkyoung24/CI-CD/assets/103173521/4936f643-7142-4807-bdb0-146c1ece54ee)
- ![image](https://github.com/mkyoung24/CI-CD/assets/103173521/c5b69fa5-796e-4493-84af-ca9b05ede61c)
- ![image](https://github.com/mkyoung24/CI-CD/assets/103173521/1d706723-b9bd-4a29-9e3e-843c26473eba)
- ![image](https://github.com/mkyoung24/CI-CD/assets/103173521/b964c5e7-9311-4172-a56b-d5705f5d9972)
- ![image](https://github.com/mkyoung24/CI-CD/assets/103173521/950ae535-40bf-48bb-93c0-4bde74c307f0)
