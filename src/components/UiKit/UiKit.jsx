import authOperations from "../../redux/auth/authOperations";
import {useDispatch} from "react-redux";
import {Button, Heading, VStack} from "@chakra-ui/react";

export default function UiKit() {
  const dispatch = useDispatch();
  const credentialRegister = {
    "username": "Kalyta93",
    "email": "smile1337@example.com",
    "password": "Zxcv1234"
  }
  const credentialLogIn = {
    "email": "smile123123@example.com",
    "password": "Zxcv1234",
  }

  return (
    <VStack>
      <Button
        type={'button'}
        onClick={() => dispatch(authOperations.register(credentialRegister))}
      >Register</Button>
      <Button
        type={'button'}
        onClick={() => dispatch(authOperations.logIn(credentialLogIn))}
      >Login</Button>
      <Button
        type={'button'}
        onClick={()=>dispatch(authOperations.logOut())}
      >LogOut</Button>
      <Button
        type={'button'}
        onClick={()=>dispatch(authOperations.refresh())}
      >Refresh</Button>

      <Button>base</Button>
      <Button variant={'primary'}>primary</Button>
      <Button variant={'primary'} isLoading={true}>primary loading</Button>
      <Button variant={'outline'}>outline</Button>

      <Heading fontFamily={'body'}>Body font family</Heading>
      <Heading fontFamily={'heading'}>Heading font family</Heading>
    </VStack>
  );
}
