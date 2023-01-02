import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext, Iregister } from "../../context/userContext";
import { Input } from "../../styles/input";
import { Bag } from "../../styles/loginBag";
import { StyledLoginBtn } from "../../styles/loginButton";
import { LoginContainer } from "../../styles/loginContainer";
import { StyledText } from "../../styles/loginText";
import { StyledLefth } from "../../styles/mainLefth";
import { StyledRigth } from "../../styles/mainRigth";
import { StyledTitle } from "../../styles/titleLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "../../styles/form";
import { Link } from "react-router-dom";
import { StyledRegisterBtn } from "../../styles/registerButton";
import { StyledSection } from "../../styles/sectionRegister";

const Register = () => {
    const title = require("../../assets/title.png");
    const text = require("../../assets/Headline.png");
    const bag = require("../../assets/bag.png");

    const { userRegister } = useContext(UserContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Iregister>({});

    const submit = async (data: Iregister) => {
        userRegister(data);
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
                    <StyledSection>
                        <h1 className="login">Registro</h1>
                        <Link to="/register" className="lnk">
                            retornar para o login
                        </Link>
                    </StyledSection>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Nome"
                        {...register("name")}
                    />
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

                    <StyledRegisterBtn>Cadastrar</StyledRegisterBtn>
                </Form>
            </StyledRigth>
        </>
    );
};
export default Register;
