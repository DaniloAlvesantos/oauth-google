import {
  AvatarPicture,
  HeaderComponent,
  ContainerAvatar,
  Container,
} from "./style";
import { useAuth } from "../../hooks/useAuth";
import GooglePerson from "../../images/person-google.svg";
import { Button } from "../button";
import { SignIn } from "@phosphor-icons/react";

export function Header() {
  const { user, Login, Logout, isGuest } = useAuth();

  return (
    <HeaderComponent>
      <ContainerAvatar>
        <AvatarPicture src={!user.picture ? GooglePerson : user.picture} />
        <p>{user.name || "Guest"}</p>
      </ContainerAvatar>
      <Container>
        {isGuest ? (
          <Button
            title="Google"
            onClick={Login}
            icon={<SignIn color="#f1f1f1" weight="regular" size={18} />}
          />
        ) : (
          <Button onClick={Logout} title="Logout" />
        )}
      </Container>
    </HeaderComponent>
  );
}
