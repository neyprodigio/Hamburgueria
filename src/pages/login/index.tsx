import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Bag } from "../../styles/loginBag";
import { LoginContainer } from "../../styles/loginContainer";
import { StyledText } from "../../styles/loginText";
import { StyledRigth } from "../../styles/mainRigth";
import { StyledTitle } from "../../styles/titleLogin";
import { Form } from "../../styles/form";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../styles/input";
import { StyledLoginBtn } from "../../styles/loginButton";
import { StyledLefth } from "../../styles/mainLefth";
import { StyledRegisterBtn } from "../../styles/registerButton";

const Login = () => {
    const title = require("../../assets/title.png");
    const text = require("../../assets/Headline.png");
    const bag = require("../../assets/bag.png");

    interface Ilogin {
        email: string;
        password: string;
    }
    const navigate = useNavigate()
    const { userLogin } = useContext(UserContext);
    const { register, handleSubmit } = useForm<Ilogin>();
    const submit = async (data: Ilogin) => {
        console.log(data);
        userLogin(data);
    };

    return (
        <>
            <StyledRigth>
                <StyledLefth>
                    <StyledTitle src={title} alt="" />
                    <LoginContainer>
                        <Bag src={bag} alt="" />
                        <StyledText src={text} alt="" />
                    </LoginContainer>
                </StyledLefth>
                <Form onSubmit={handleSubmit(submit)}>
                    <h1 className="login">Login</h1>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        {...register("email")}
                    />
                    <Input
                        id="password"
                        type="password"
                        placeholder="Senha"
                        {...register("password")}
                    />

                    <StyledLoginBtn>Login</StyledLoginBtn>
                    <Link to="/register" className="link">
                        Crie sua conta para saborear muitas delícias e matar sua
                        fome!
                    </Link>
                    
                    <Link to="/register" className="btnRegister">
                        Cadastrar
                    </Link>
                </Form>
            </StyledRigth>
        </>
    );
};
export default Login;
