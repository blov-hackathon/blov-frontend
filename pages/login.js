import Layout from "../component/Layout";
import Typography from "../component/Typography";

export default function Login() {
  return (
    <Layout>
      <Typography color="#aaa" size="16px">
        전화번호
      </Typography>
      <Typography color="#aaa" size="16px">
        패스워드
      </Typography>
      <Typography color="#000" size="16px">
        로그인 상태 유지
      </Typography>
      <Typography color="red" size="24px">
        로그인
      </Typography>
      <Typography color="#505050" size="16px">
        Blov가 처음이신가요?
      </Typography>
      <Typography color="#DF2A19" size="16px">
        회원가입하기
      </Typography>
    </Layout>
  );
}
