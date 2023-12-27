import Input from "./Input";


function Practice2() {
    return (
      <div>
        <h1>로그인</h1>
        <label>Email</label>
        <Input type="email" placeholder="styled@DW.kr" />
        <label>Password</label>
        <Input type="password" placeholder="비밀번호" />
      </div>
    );
  }

export default Practice2;