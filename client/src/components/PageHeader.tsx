import { useState } from 'react';
import styled from 'styled-components';
import logo from '../image/logo.png';
import Nickname from './Nickname';

const PageMenu = styled.div`
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid #d6d6d6;
  justify-content: space-between;

  header {
    margin-left: 13rem; //380px로 하니 1980에서는 잘보였는데 제화면에서 너무 이상해 우선 rem으로 변경 =>px로할지 질문
    margin-right: 13rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pagemenu {
    margin: 10px;
  }

  .hamburger {
    display: none;
  }

  img {
    width: 150px;
    height: 60px;
  }
  @media screen and (max-width: 414px) and (max-height: 667px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    header {
      margin: 0px 10px 0px 10px;
      width: 100%;
    }
    img {
      margin-left: 20px;
      width: 120px;
      height: 60px;
    }
    .pagemenu {
      display: none;
    }
    .hamburger {
      display: flex;
      width: 50px;
    }
  }
`;

const PageHeader = () => {
  const [islogin, setIslogin] = useState(true);

  const clickLogin = () => {
    //임의로 오류안나게하기 위해 넣은 함수
    setIslogin(!islogin);
  };

  const headermenu = ['분야선택', '로드맵', '학원일정', '수료후기', '스터디모집', '멘토링'];
  return (
    <PageMenu>
      <header>
        <span className="hamburger">햄버거</span>
        <img src={logo} alt="logo" />
        {headermenu.map((el, idx) => (
          <span className="pagemenu" key={idx}>
            {el}
          </span>
        ))}
        {islogin ? (
          <div>
            <button onClick={clickLogin}>로그인</button>
            <button>회원가입</button>
          </div>
        ) : (
          <div>
            <Nickname />
          </div>
        )}
      </header>
    </PageMenu>
  );
};
export default PageHeader;
