
//Constant.js 파일을 import 하는 곳에서 import시에 이름을 임의대로 설정 가능
//js파일에는 default라는 설정은 한번만 가능

// *컴포넌트에서 action이 인지가 되고 변이 작업 진행시 실제 호출되는 함수 이름을 등록
export default{
    INCREMENT : "increment", // 숫자 공유 데이터 1씩 증가
    DECREMENT : "decrement", // 숫자 공유 데이터 1씩 감소
    SET : "set", //특정 데이터로 설정
    SET1 : "set1", //특정 데이터로 설정
    MESSAGE : "message",
    NOMESSAGE : "nomessage"
}