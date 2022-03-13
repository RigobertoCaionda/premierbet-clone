import { HeaderArea, Header1, Header2 } from "./styled";
const Page: React.FC = () => {
  return (
    <HeaderArea>
      <Header1>
        <div className="logo-area">
          <img
            src="/assets/premierLogo.svg"
            alt="Premierbet Logo"
            width="220"
          />
        </div>

        <div className="middle-area">
          <div className="license">
            <img src="/assets/flag.png" width="55" />
            <span>LICENÇA B20070800360166286566/ISJ/MF/20</span>
          </div>

          <div className="languages">
            <select>
              <option>PORTUGUÊS</option>
              <option>INGLÊS</option>
              <option>ESPANHOL</option>
            </select>
          </div>
        </div>

        <div className="login-area">
          <form>
            <div className="user">
              <input type="text" placeholder="Usuário /244 + número" />
            </div>

            <div className="password">
              <input type="password" placeholder="Palavra-passe" />
              <div
                className="locker"
                style={{
                  backgroundColor: "#fae100",
                  width: 10,
                  height: 10,
                  marginLeft: -25,
                  cursor: "pointer",
                }}
              ></div>
            </div>

            <div className="login-buttons">
              <button id="signin">INICIAR SESSÃO</button>
              <button id="signup">
                <span>REGISTAR</span>
              </button>
            </div>
          </form>
        </div>
      </Header1>
      <Header2>Cabeca2</Header2>
    </HeaderArea>
  );
};
export default Page;
